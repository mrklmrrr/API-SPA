import { cn } from "../lib/utils";

export const Card = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 bg-zinc-800  p-4 rounded-md overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};
