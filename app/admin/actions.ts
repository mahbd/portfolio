"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import bcrypt from "bcryptjs";
import { sql } from "@/lib/db";
import { createSession, destroySession, requireAdmin } from "@/lib/auth";
import { POSTS_TAG, slugify } from "@/lib/posts";

const MAX_ATTEMPTS = 5;
// Compared against when the email is unknown so response timing stays similar.
const DUMMY_HASH =
  "$2b$12$BBKNwug5uSlwqqNOn5.LGu8k2Tx7QTAfKOV4F6tSTCZqjb7wb41H2";

export type FormState = { error?: string };

export async function login(
  _: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  const [{ count }] = await sql`
    SELECT count(*)::int AS count FROM login_attempts
    WHERE ip = ${ip} AND attempted_at > now() - interval '15 minutes'`;
  if (count >= MAX_ATTEMPTS) {
    return { error: "Too many attempts. Try again in 15 minutes." };
  }

  const rows = await sql`
    SELECT id, email, password_hash FROM admins WHERE email = ${email}`;
  const admin = rows[0];
  const ok = await bcrypt.compare(password, admin?.password_hash ?? DUMMY_HASH);

  if (!admin || !ok) {
    await sql`INSERT INTO login_attempts (ip) VALUES (${ip})`;
    return { error: "Invalid email or password." };
  }

  await sql`DELETE FROM login_attempts WHERE ip = ${ip}`;
  await createSession(admin.id, admin.email);
  redirect("/admin");
}

export async function logout() {
  await destroySession();
  redirect("/admin/login");
}

export async function savePost(
  id: number | null,
  _: FormState,
  formData: FormData,
): Promise<FormState> {
  await requireAdmin();

  const title = String(formData.get("title") ?? "").trim();
  const slug = slugify(String(formData.get("slug") ?? "") || title);
  const summary = String(formData.get("summary") ?? "").trim();
  const youtubeUrl = String(formData.get("youtube_url") ?? "").trim();
  const content = String(formData.get("content_md") ?? "");
  const tags = String(formData.get("tags") ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const published = formData.get("published") === "on";

  if (!title || !slug) return { error: "Title is required." };

  try {
    if (id) {
      await sql`
        UPDATE posts SET slug = ${slug}, title = ${title}, summary = ${summary},
          youtube_url = ${youtubeUrl}, content_md = ${content}, tags = ${tags},
          published = ${published}, updated_at = now()
        WHERE id = ${id}`;
    } else {
      await sql`
        INSERT INTO posts (slug, title, summary, youtube_url, content_md, tags, published)
        VALUES (${slug}, ${title}, ${summary}, ${youtubeUrl}, ${content}, ${tags}, ${published})`;
    }
  } catch (err) {
    if (String(err).includes("posts_slug_key")) {
      return { error: "That slug is already used by another post." };
    }
    throw err;
  }

  revalidateTag(POSTS_TAG, "max");
  redirect("/admin");
}

export async function togglePublished(id: number) {
  await requireAdmin();
  await sql`UPDATE posts SET published = NOT published, updated_at = now() WHERE id = ${id}`;
  revalidateTag(POSTS_TAG, "max");
  redirect("/admin");
}

export async function deletePost(id: number) {
  await requireAdmin();
  await sql`DELETE FROM posts WHERE id = ${id}`;
  revalidateTag(POSTS_TAG, "max");
  redirect("/admin");
}
