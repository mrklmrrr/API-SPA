import { routes } from "../lib/routes";
import { Link } from "react-router-dom";
import { Card } from "./Card";

export const PhotoAlbum = ({ data: { id, title } }) => {
  return (
    <Card>
      <h2 className="flex flex-col gap-2 font-bold text-2xl">
        <Link to={routes.albums.album.create(id)}>{title}</Link>
      </h2>
    </Card>
  );
};
