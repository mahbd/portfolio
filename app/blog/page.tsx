import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Tutorials - Mahmudul Alam",
  description: "Coding tutorials with copy-paste ready source code.",
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <section className="py-8">
      <h1 className="text-3xl font-bold text-[var(--color-brand-green-400)] mb-8">
        Tutorials
      </h1>
      {posts.length === 0 && (
        <p className="text-[var(--color-brand-gray-400)]">No tutorials yet.</p>
      )}
      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block p-5 rounded-xl bg-[var(--color-card-background)] hover:bg-[var(--color-card-hover-background)] transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-[var(--color-brand-gray-300)] mb-3">
              {post.summary}
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-full border border-[var(--color-input-border)] text-[var(--color-brand-green-300)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
