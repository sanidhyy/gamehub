"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { LiveBadge } from "@/components/live-badge";
import { UserAvatar } from "@/components/user-avatar";
import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";

type UserItemProps = {
  username: string;
  imageUrl: string;
  isLive?: boolean;
};

export const UserItem = ({ username, imageUrl, isLive }: UserItemProps) => {
  const pathname = usePathname();

  const { collapsed } = useSidebar((state) => state);

  const href = `/${username}`;
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-accent",
      )}
    >
      <div
        className={cn(
          "flex items-center w-full gap-x-4",
          collapsed && "justify-center",
        )}
      >
        <UserAvatar imageUrl={imageUrl} username={username} isLive={isLive} />
        {!collapsed && <p className="truncate">{username}</p>}
        {!collapsed && isLive && <LiveBadge className="ml-auto" />}
      </div>
    </Link>
  );
};

export const UserItemSkeleton = () => {
  return (
    <li className="flex items-center gap-x-4 px-3 py-2">
      <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-6" />
      </div>
    </li>
  );
};
