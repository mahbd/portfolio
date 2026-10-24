import { requireAdmin } from "@/lib/auth";
import PostForm from "@/components/blog/PostForm";

export const dynamic = "force-dynamic";

export default async function NewPostPage() {
  await requireAdmin();
  return <PostForm />;
}
