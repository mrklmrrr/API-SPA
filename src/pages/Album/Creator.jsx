import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getUser } from "../../lib/api";
import { routes } from "../../lib/routes";

export const Creator = ({ userId }) => {
  const { data: user, isLoading } = useQuery({
    enabled: Boolean(userId),
    queryKey: ["user", userId],
    queryFn: () => getUser(Number(userId)),
  });

  if (isLoading) {
    return <div>Loading user #{userId} data...</div>;
  }

  if (!user) {
    return <p className="text-red-700">Can't get user #{userId} data</p>;
  }

  return (
    <p>
      Creator:{" "}
      <Link to={routes.users.user.create(user.id)} className="underline">
        {user.name} {userId}
      </Link>
    </p>
  );
};
