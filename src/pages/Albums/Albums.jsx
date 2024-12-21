import { getAlbums } from "../../lib/api";
import { useQuery } from "@tanstack/react-query";
import { PhotoAlbum } from "../../components";

export const Albums = () => {
  const {
    data: albums,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["albums"],
    queryFn: getAlbums,
  });

  if (error) {
    return <p className="text-red-700">{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading albums...</p>;
  }

  if (!albums) {
    return <p className="text-red-700">Can't get albums</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {albums.map((album) => (
        <PhotoAlbum key={album.id} data={album} />
      ))}
    </div>
  );
};
