import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../lib/api";
import { Albums } from "./Albums";

export const User = () => {
  const { id } = useParams();

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    enabled: Boolean(id),
    queryKey: ["users", id],
    queryFn: () => getUser(Number(id)),
  });

  if (error) {
    return <p className="text-red-700">{error.message}</p>;
  }

  if (isLoading) {
    return <div>Loading user #{id} data...</div>;
  }

  if (!user) {
    return <p className="text-red-700">Can't get user #{id} data.</p>;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl md:text-3xl">{user.name}</h1>
        <div className="flex flex-col gap-1 text-zinc-400">
          <p>Username: {user.username}</p>
          <p>
            Email:{" "}
            <a href={`mailto:${user.email}`} className="underline">
              {user.email}
            </a>
          </p>
          <p>Phone: {user.phone}</p>
          <p>
            Site:{" "}
            <a
              href={`https://${user.website}`}
              target="_blank"
              className="underline"
            >
              {user.website}
            </a>
          </p>
        </div>
      </div>
      <Albums userId={user.id} />
    </div>
  );
};
