import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { getAllPosts } from "@/lib/posts";
import { deletePost, logout, togglePublished } from "./actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin - Mahmudul Alam", robots: "noindex" };

export default async function AdminPage() {
  const session = await requireAdmin();
  const posts = await getAllPosts();

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-brand-green-400)]">
            Posts
          </h1>
          <p className="text-sm text-[var(--color-brand-gray-400)]">
            {session.email}
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/admin/new"
            className="gradient-button gradient-button-hover px-5 py-2 rounded-full font-semibold text-[var(--color-white)]"
          >
            New post
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="px-5 py-2 rounded-full border border-[var(--color-input-border)]"
            >
              Log out
            </button>
          </form>
        </div>
      </div>

      {posts.length === 0 && (
        <p className="text-[var(--color-brand-gray-400)]">No posts yet.</p>
      )}
      <ul className="space-y-3">
        {posts.map((post) => (
          <li
            key={post.id}
            className="flex items-center justify-between gap-4 flex-wrap p-4 rounded-lg bg-[var(--color-card-background)]"
          >
            <div className="min-w-0">
              <p className="font-semibold truncate">{post.title}</p>
              <p className="text-xs text-[var(--color-brand-gray-400)]">
                /blog/{post.slug} ·{" "}
                {post.published ? "Published" : "Draft"}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              {post.published && (
                <Link
                  href={`/blog/${post.slug}`}
                  className="px-3 py-1 rounded-md hover:bg-[var(--color-card-hover-background)]"
                >
                  View
                </Link>
              )}
              <Link
                href={`/admin/${post.id}/edit`}
                className="px-3 py-1 rounded-md hover:bg-[var(--color-card-hover-background)]"
              >
                Edit
              </Link>
              <form action={togglePublished.bind(null, post.id)}>
                <button
                  type="submit"
                  className="px-3 py-1 rounded-md hover:bg-[var(--color-card-hover-background)]"
                >
                  {post.published ? "Unpublish" : "Publish"}
                </button>
              </form>
              <form action={deletePost.bind(null, post.id)}>
                <button
                  type="submit"
                  className="px-3 py-1 rounded-md text-red-400 hover:bg-[var(--color-card-hover-background)]"
                >
                  Delete
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
