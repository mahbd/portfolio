import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedPost } from "@/lib/posts";
import Markdown from "@/components/blog/Markdown";
import YouTubeEmbed from "@/components/blog/YouTubeEmbed";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) return {};
  return { title: `${post.title} - Mahmudul Alam`, description: post.summary };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) notFound();

  return (
    <article className="py-8 max-w-3xl w-full mx-auto">
      <h1 className="text-3xl font-bold text-[var(--color-brand-green-400)]">
        {post.title}
      </h1>
      <p className="text-sm text-[var(--color-brand-gray-400)] mt-2">
        {new Date(post.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <YouTubeEmbed url={post.youtube_url} title={post.title} />
      <Markdown content={post.content_md} />
    </article>
  );
}
