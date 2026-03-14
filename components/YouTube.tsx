export default function YouTube({
  id,
  title,
}: {
  id: string;
  title?: string;
}) {
  return (
    <div className="my-8 aspect-video w-full overflow-hidden rounded-xl">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}`}
        title={title || "YouTube video"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
