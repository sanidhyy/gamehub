import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type NavItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive: boolean;
};

export const NavItem = ({
  icon: Icon,
  label,
  href,
  isActive,
}: NavItemProps) => {
  const { collapsed } = useCreatorSidebar((state) => state);
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-accent"
      )}
    >
      <div className="flex items-center gap-x-4">
        <Icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
        {!collapsed && <span>{label}</span>}
      </div>
    </Link>
  );
};
