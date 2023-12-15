import { cva, type VariantProps } from "class-variance-authority";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { LiveBadge } from "@/components/live-badge";
import { cn } from "@/lib/utils";

const avatarSizes = cva("", {
  variants: {
    size: {
      default: "h-8 w-8",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type UserAvatarProps = {
  username: string;
  imageUrl: string;
  isLive?: boolean;
  showBadge?: boolean;
} & VariantProps<typeof avatarSizes>;

export const UserAvatar = ({
  username,
  imageUrl,
  isLive,
  showBadge,
  size,
}: UserAvatarProps) => {
  const canShowBadge = showBadge && isLive;

  return (
    <div className="relative">
      <Avatar
        className={cn(
          isLive && "ring-2 ring-rose-500 border border-background",
          avatarSizes({ size }),
        )}
      >
        <AvatarImage src={imageUrl} className="object-cover" />
        <AvatarFallback className={cn("uppercase", isLive && "text-rose-500")}>
          {username[0]}
          {username[username.length - 1]}
        </AvatarFallback>
      </Avatar>
      {canShowBadge && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <LiveBadge />
        </div>
      )}
    </div>
  );
};

type UserAvatarSkeletonProps = VariantProps<typeof avatarSizes>;

export const UserAvatarSkeleton = ({ size }: UserAvatarSkeletonProps) => {
  return (
    <Skeleton className={cn("rounded-full", avatarSizes({ size }))}></Skeleton>
  );
};
