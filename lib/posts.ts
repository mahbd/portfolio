import { unstable_cache } from "next/cache";
import { sql } from "./db";

export type Post = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  youtube_url: string;
  content_md: string;
  tags: string[];
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type PostSummary = Pick<
  Post,
  "id" | "slug" | "title" | "summary" | "youtube_url" | "tags" | "created_at"
>;

export const POSTS_TAG = "posts";

export const getPublishedPosts = unstable_cache(
  async (): Promise<PostSummary[]> => {
    const rows = await sql`
      SELECT id, slug, title, summary, youtube_url, tags, created_at
      FROM posts WHERE published = true ORDER BY created_at DESC`;
    return rows as PostSummary[];
  },
  ["published-posts"],
  { tags: [POSTS_TAG] },
);

export const getPublishedPost = unstable_cache(
  async (slug: string): Promise<Post | null> => {
    const rows = await sql`
      SELECT * FROM posts WHERE slug = ${slug} AND published = true LIMIT 1`;
    return (rows[0] as Post | undefined) ?? null;
  },
  ["published-post"],
  { tags: [POSTS_TAG] },
);

export async function getAllPosts(): Promise<Post[]> {
  const rows = await sql`SELECT * FROM posts ORDER BY created_at DESC`;
  return rows as Post[];
}

export async function getPostById(id: number): Promise<Post | null> {
  const rows = await sql`SELECT * FROM posts WHERE id = ${id} LIMIT 1`;
  return (rows[0] as Post | undefined) ?? null;
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function youtubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/))([\w-]{11})/,
  );
  return match ? match[1] : null;
}
