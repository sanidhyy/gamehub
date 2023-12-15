import Link from "next/link";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";
import { Clapperboard, Github } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Actions = async () => {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!user && (
        <SignInButton>
          <Button size="sm" variant="primary">
            Login
          </Button>
        </SignInButton>
      )}

      <Link
        href="https://github.com/sanidhyy/gamehub"
        className={cn(
          buttonVariants({
            size: "sm",
            variant: "ghost",
          }),
          "text-muted-foreground hover:text-primary hidden lg:inline-flex"
        )}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Github className="h-5 w-5 lg:mr-2" />
        <span>GitHub</span>
      </Link>

      {!!user && (
        <div className="flex items-center gap-x-4">
          <Link
            href={`/u/${user.username}`}
            className={cn(
              "text-muted-foreground hover:text-primary",
              buttonVariants({
                size: "sm",
                variant: "ghost",
              })
            )}
          >
            <Clapperboard className="h-5 w-5 lg:mr-2" />
            <span className="hidden lg:block">Dashboard</span>
          </Link>

          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
};
