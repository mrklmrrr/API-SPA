import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getUsers } from "../../lib/api";
import { routes } from "../../lib/routes";

export const Users = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (error) {
    return <p className="text-red-700">{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  if (!users) {
    return <p className="text-red-700">Can't get users</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {users.map((user) => (
        <Link
          to={routes.users.user.create(user.id)}
          className="p-4 py-6 rounded-md bg-zinc-800"
        >
          <h1 className="text-xl">{user.name}</h1>
        </Link>
      ))}
    </div>
  );
};
