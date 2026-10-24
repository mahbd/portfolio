import { youtubeId } from "@/lib/posts";

export default function YouTubeEmbed({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const id = youtubeId(url);
  if (!id) return null;
  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden my-6">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        className="w-full h-full"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
