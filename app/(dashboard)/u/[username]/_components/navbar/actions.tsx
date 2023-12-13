import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Actions = () => {
  return (
    <div className="flex items-center justify-end gap-x-2">
      <Link
        href="/"
        className={cn(
          "text-muted-foreground hover:text-primary",
          buttonVariants({
            size: "sm",
            variant: "ghost",
          })
        )}
      >
        <LogOut className="h-5 w-5 mr-2" />
        Exit
      </Link>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
