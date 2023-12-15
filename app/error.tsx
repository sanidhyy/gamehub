"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <p>Something went wrong.</p>

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

export default ErrorPage;
