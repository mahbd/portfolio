import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { sql } from "@/lib/db";
import { POSTS_TAG, getAllPosts, slugify } from "@/lib/posts";
import {
  checkApiKey,
  isSlugConflict,
  jsonError,
  parsePostInput,
  readJson,
} from "@/lib/api";

// GET /api/posts — every post, drafts included.
export async function GET(request: Request) {
  const denied = checkApiKey(request);
  if (denied) return denied;
  return NextResponse.json(await getAllPosts());
}

// POST /api/posts — create a post. Only "title" is required.
export async function POST(request: Request) {
  const denied = checkApiKey(request);
  if (denied) return denied;

  const parsed = parsePostInput(await readJson(request));
  if ("error" in parsed) return jsonError(400, parsed.error);
  const p = parsed.input;

  const title = p.title ?? "";
  const slug = slugify(p.slug || title);
  if (!title || !slug) return jsonError(400, '"title" is required.');

  try {
    const [post] = await sql`
      INSERT INTO posts (slug, title, summary, youtube_url, content_md, tags, published)
      VALUES (${slug}, ${title}, ${p.summary ?? ""}, ${p.youtube_url ?? ""},
        ${p.content_md ?? ""}, ${p.tags ?? []}, ${p.published ?? false})
      RETURNING *`;
    revalidateTag(POSTS_TAG, "max");
    return NextResponse.json(post, { status: 201 });
  } catch (err) {
    if (isSlugConflict(err)) {
      return jsonError(409, "That slug is already used by another post.");
    }
    throw err;
  }
}
