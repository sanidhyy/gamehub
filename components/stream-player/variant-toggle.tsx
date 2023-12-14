"use client";

import { MessageSquare, Users } from "lucide-react";

import { ChatVariant, useChatSidebar } from "@/store/use-chat-sidebar";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";

export const VariantToggle = () => {
  const { variant, onChangeVariant } = useChatSidebar((state) => state);

  const Icon = variant === ChatVariant.CHAT ? Users : MessageSquare;

  const isChat = variant === ChatVariant.CHAT;

  const onToggle = () => {
    const newVariant = isChat ? ChatVariant.COMMUNITY : ChatVariant.CHAT;
    onChangeVariant(newVariant);
  };

  const label = isChat ? "Community" : "Go back to chat";

  return (
    <Hint label={label} side="left" asChild>
      <Button
        onClick={onToggle}
        variant="ghost"
        className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent"
      >
        <Icon className="h-4 w-4" />
      </Button>
    </Hint>
  );
};
