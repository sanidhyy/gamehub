"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { onUnblock } from "@/actions/block";

type UnblockButtonProps = {
  userId: string;
};

export const UnblockButton = ({ userId }: UnblockButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((result) =>
          toast.success(`User ${result.blocked.username} unblocked.`),
        )
        .catch(() => toast.error("Something went wrong."));
    });
  };

  return (
    <Button
      disabled={isPending}
      aria-disabled={isPending}
      onClick={onClick}
      variant="link"
      size="sm"
      className="text-blue-500 w-full"
    >
      Unblock
    </Button>
  );
};
