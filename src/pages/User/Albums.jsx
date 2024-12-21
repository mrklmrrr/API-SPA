import { useQuery } from "@tanstack/react-query";
import { getUserAlbums } from "../../lib/api";
import { PhotoAlbum } from "../../components";

export const Albums = ({ userId }) => {
  const {
    data: albums,
    isLoading,
    error,
  } = useQuery({
    enabled: Boolean(userId),
    queryKey: ["users/albums", userId],
    queryFn: () => getUserAlbums(userId),
  });

  if (error) {
    return <p className="text-red-700">{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading user #{userId} albums...</p>;
  }

  if (!albums) {
    return (
      <p className="text-red-700">There are no albums of user #{userId}.</p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {albums.map((album) => (
        <PhotoAlbum key={album.id} data={album} />
      ))}
    </div>
  );
};
