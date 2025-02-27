import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Error, Root, Users, Albums, User, Album } from "./pages";
import { routes } from "./lib/routes";
import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: routes.home,
        element: <Users />,
      },
      {
        path: routes.users.user.base,
        element: <User />,
      },
      {
        path: routes.users.root,
        element: <Users />,
      },
      {
        path: routes.albums.root,
        element: <Albums />,
      },
      {
        path: routes.albums.album.base,
        element: <Album />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
