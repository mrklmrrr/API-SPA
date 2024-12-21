import { NavLink, Outlet } from "react-router-dom";
import { routes } from "../../lib/routes";
import { cn } from "../../lib/utils";

const headerLinks = [
  { link: routes.albums.root, label: "Albums" },
  { link: routes.users.root, label: "Users" },
];

export const Root = () => {
  return (
    <div className="min-h-[100vh] bg-zinc-900 flex flex-col">
      <header className="sticky top-0 z-50 w-full flex bg-zinc-800 px-8 py-6">
        <ul className="flex gap-6">
          {headerLinks.map(({ link, label }) => (
            <li key={link}>
              <NavLink
                to={link}
                className={({ isActive }) =>
                  cn("text-zinc-400", isActive && "text-white")
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      <div className="w-[1400px] mx-auto max-w-full px-2 py-8">
        <Outlet />
      </div>
      <footer className="w-full bg-zinc-800 p-6 py-10 mt-auto flex justify-between gap-4">
        <p>Created by: Margo Kulakovich</p>
        <p>BSU 2024</p>
      </footer>
    </div>
  );
};
