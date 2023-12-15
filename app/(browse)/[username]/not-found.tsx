import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-4xl">404</h1>
      <p>We couldn&apos;t find the user you were looking for.</p>

      <Link
        href="/"
        className={buttonVariants({
          variant: "secondary",
        })}
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
