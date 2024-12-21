import { getAlbum } from "../../lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Creator } from "./Creator";
import { Photos } from "./Photos";

export const Album = () => {
  const { id } = useParams();

  const {
    data: album,
    isLoading,
    error,
  } = useQuery({
    enabled: Boolean(id),
    queryKey: ["albums", id],
    queryFn: () => getAlbum(Number(id)),
  });

  if (error) {
    return <p className="text-red-700">{error.message}</p>;
  }

  if (isLoading) {
    return <div>Loading album #{id} data...</div>;
  }

  if (!album) {
    return <p className="text-red-700">Can't get album #{id} data</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl capitalize">{album.title}</h1>
        <Creator userId={album.userId} />
      </div>
      <Photos albumId={Number(id)} />
    </div>
  );
};
