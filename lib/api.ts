import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

export function jsonError(status: number, error: string) {
  return NextResponse.json({ error }, { status });
}

// Returns an error response when the request lacks a valid bearer token.
export function checkApiKey(request: Request): NextResponse | null {
  const key = process.env.POSTS_API_KEY;
  if (!key || key.length < 32) {
    return jsonError(503, "POSTS_API_KEY is not configured");
  }

  const header = request.headers.get("authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7).trim() : "";
  // Hash both sides so the comparison is constant-time regardless of length.
  const a = createHash("sha256").update(token).digest();
  const b = createHash("sha256").update(key).digest();
  if (!token || !timingSafeEqual(a, b)) {
    return jsonError(401, "Invalid or missing API key");
  }
  return null;
}

export type PostInput = {
  title?: string;
  slug?: string;
  summary?: string;
  youtube_url?: string;
  content_md?: string;
  tags?: string[];
  published?: boolean;
};

const STRING_FIELDS = [
  "title",
  "slug",
  "summary",
  "youtube_url",
  "content_md",
] as const;

// Validates a JSON body; only fields present in the body are returned.
export function parsePostInput(
  body: unknown,
): { input: PostInput } | { error: string } {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { error: "Body must be a JSON object." };
  }
  const raw = body as Record<string, unknown>;
  const input: PostInput = {};

  for (const field of STRING_FIELDS) {
    if (raw[field] === undefined) continue;
    if (typeof raw[field] !== "string") {
      return { error: `"${field}" must be a string.` };
    }
    input[field] =
      field === "content_md" ? raw[field] : (raw[field] as string).trim();
  }

  if (raw.tags !== undefined) {
    // Accept an array or the same comma-separated string the admin form uses.
    const list =
      typeof raw.tags === "string" ? raw.tags.split(",") : raw.tags;
    if (!Array.isArray(list) || list.some((t) => typeof t !== "string")) {
      return { error: '"tags" must be an array of strings.' };
    }
    input.tags = (list as string[]).map((t) => t.trim()).filter(Boolean);
  }

  if (raw.published !== undefined) {
    if (typeof raw.published !== "boolean") {
      return { error: '"published" must be a boolean.' };
    }
    input.published = raw.published;
  }

  return { input };
}

export async function readJson(request: Request): Promise<unknown> {
  try {
    return await request.json();
  } catch {
    return undefined;
  }
}

export function isSlugConflict(err: unknown) {
  return String(err).includes("posts_slug_key");
}
