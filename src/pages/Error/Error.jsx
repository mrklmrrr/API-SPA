import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import { routes } from "../../lib/routes";

export const Error = () => {
  const error = useRouteError();
  const errorMessage = getErrorMessage(error);

  return (
    <div className="flex flex-col items-center justify-center gap-6 h-[100vh]">
      <h1 className="font-bold text-4xl text-center">
        {errorMessage || "Error"}
      </h1>
      <Link to={routes.home} className="text-xl underline">
        Home page
      </Link>
    </div>
  );
};

function getErrorMessage(error) {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`;
  } else if (error != undefined && "message" in object) {
    return error.message;
  } else if (typeof error === "string") {
    return error;
  } else {
    console.error(error);
    return "Unknown error";
  }
}
