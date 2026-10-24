"use client";

import { useActionState, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { savePost, type FormState } from "@/app/admin/actions";
import type { Post } from "@/lib/posts";

const initial: FormState = {};
const field =
  "w-full px-3 py-2 rounded-md bg-[var(--color-input-background)] border border-[var(--color-input-border)]";

export default function PostForm({ post }: { post?: Post }) {
  const [state, action, pending] = useActionState(
    savePost.bind(null, post?.id ?? null),
    initial,
  );
  const [content, setContent] = useState(post?.content_md ?? "");
  const [preview, setPreview] = useState(false);

  return (
    <form action={action} className="space-y-4 py-8 max-w-4xl w-full mx-auto">
      <h1 className="text-2xl font-bold text-[var(--color-brand-green-400)]">
        {post ? "Edit post" : "New post"}
      </h1>

      <input
        name="title"
        placeholder="Title"
        defaultValue={post?.title}
        required
        className={field}
      />
      <input
        name="slug"
        placeholder="Slug (auto from title if empty)"
        defaultValue={post?.slug}
        className={field}
      />
      <input
        name="youtube_url"
        placeholder="YouTube URL"
        defaultValue={post?.youtube_url}
        className={field}
      />
      <textarea
        name="summary"
        placeholder="Short summary"
        defaultValue={post?.summary}
        rows={2}
        className={field}
      />
      <input
        name="tags"
        placeholder="Tags, comma separated"
        defaultValue={post?.tags.join(", ")}
        className={field}
      />

      <div>
        <div className="flex gap-2 mb-2 text-sm">
          <button
            type="button"
            onClick={() => setPreview(false)}
            className={`px-3 py-1 rounded-md ${!preview ? "bg-[var(--color-card-hover-background)]" : ""}`}
          >
            Write
          </button>
          <button
            type="button"
            onClick={() => setPreview(true)}
            className={`px-3 py-1 rounded-md ${preview ? "bg-[var(--color-card-hover-background)]" : ""}`}
          >
            Preview
          </button>
        </div>
        {/* Keep the textarea mounted so its value is always submitted. */}
        <textarea
          name="content_md"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={24}
          placeholder={"Write in Markdown. Use ```lang fenced blocks for code."}
          className={`${field} font-mono text-sm ${preview ? "hidden" : ""}`}
        />
        {preview && (
          <div className="blog-prose p-4 rounded-md border border-[var(--color-input-border)] min-h-64">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        )}
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="published"
          defaultChecked={post?.published}
        />
        Published
      </label>

      {state.error && (
        <p role="alert" className="text-sm text-red-400">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="gradient-button gradient-button-hover px-6 py-2 rounded-full font-semibold text-[var(--color-white)] disabled:opacity-60"
      >
        {pending ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
