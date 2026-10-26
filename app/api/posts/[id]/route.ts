import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { sql } from "@/lib/db";
import { POSTS_TAG, getPostById, slugify } from "@/lib/posts";
import {
  checkApiKey,
  isSlugConflict,
  jsonError,
  parsePostInput,
  readJson,
} from "@/lib/api";

async function loadPost(ctx: RouteContext<"/api/posts/[id]">) {
  const { id } = await ctx.params;
  const n = Number(id);
  return Number.isInteger(n) && n > 0 ? getPostById(n) : null;
}

// GET /api/posts/:id
export async function GET(
  request: Request,
  ctx: RouteContext<"/api/posts/[id]">,
) {
  const denied = checkApiKey(request);
  if (denied) return denied;

  const post = await loadPost(ctx);
  if (!post) return jsonError(404, "Post not found.");
  return NextResponse.json(post);
}

// PATCH /api/posts/:id — update only the fields sent.
export async function PATCH(
  request: Request,
  ctx: RouteContext<"/api/posts/[id]">,
) {
  const denied = checkApiKey(request);
  if (denied) return denied;

  const existing = await loadPost(ctx);
  if (!existing) return jsonError(404, "Post not found.");

  const parsed = parsePostInput(await readJson(request));
  if ("error" in parsed) return jsonError(400, parsed.error);
  const p = { ...existing, ...parsed.input };

  // Keep the current slug when only the title changes, so links don't break.
  const slug = slugify(parsed.input.slug ?? existing.slug);
  if (!p.title || !slug) return jsonError(400, '"title" cannot be empty.');

  try {
    const [post] = await sql`
      UPDATE posts SET slug = ${slug}, title = ${p.title}, summary = ${p.summary},
        youtube_url = ${p.youtube_url}, content_md = ${p.content_md}, tags = ${p.tags},
        published = ${p.published}, updated_at = now()
      WHERE id = ${existing.id}
      RETURNING *`;
    revalidateTag(POSTS_TAG, "max");
    return NextResponse.json(post);
  } catch (err) {
    if (isSlugConflict(err)) {
      return jsonError(409, "That slug is already used by another post.");
    }
    throw err;
  }
}

// DELETE /api/posts/:id
export async function DELETE(
  request: Request,
  ctx: RouteContext<"/api/posts/[id]">,
) {
  const denied = checkApiKey(request);
  if (denied) return denied;

  const existing = await loadPost(ctx);
  if (!existing) return jsonError(404, "Post not found.");

  await sql`DELETE FROM posts WHERE id = ${existing.id}`;
  revalidateTag(POSTS_TAG, "max");
  return new NextResponse(null, { status: 204 });
}
