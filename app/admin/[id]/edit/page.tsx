import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { getPostById } from "@/lib/posts";
import PostForm from "@/components/blog/PostForm";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const post = Number.isInteger(Number(id)) ? await getPostById(Number(id)) : null;
  if (!post) notFound();
  return <PostForm post={post} />;
}
