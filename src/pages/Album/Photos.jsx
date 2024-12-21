import { useQuery } from "@tanstack/react-query";
import { Card } from "../../components";
import { getAlbumPhotos } from "../../lib/api";

export const Photos = ({ albumId }) => {
  const {
    data: photos,
    isLoading,
    error,
  } = useQuery({
    enabled: Boolean(albumId),
    queryKey: ["albums/photos", albumId],
    queryFn: () => getAlbumPhotos(Number(albumId)),
  });

  if (error) {
    return <p className="text-red-700">{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading album #{albumId} photos...</p>;
  }

  if (!photos) {
    return (
      <p className="text-red-700">There are no photos in album #{albumId}.</p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {photos.map(({ id, title, thumbnailUrl }) => (
        <Card key={id}>
          <img
            src={thumbnailUrl}
            alt={title}
            loading="lazy"
            className="w-full aspect-square rounded-md bg-zinc-600"
          />
          <h2 className="md:text-xl">{title}</h2>
        </Card>
      ))}
    </div>
  );
};
