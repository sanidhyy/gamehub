import { useState } from "react";
import { useDebounce } from "usehooks-ts";
import { useParticipants } from "@livekit/components-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

import { CommunityItem } from "./community-item";

type ChatCommunityProps = {
  hostName: string;
  viewerName: string;
  isHidden: boolean;
};

export const ChatCommunity = ({
  hostName,
  viewerName,
  isHidden,
}: ChatCommunityProps) => {
  const [value, setValue] = useState("");
  const participants = useParticipants();
  const debouncedValue = useDebounce<string>(value, 500);

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  if (isHidden) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-sm text-muted-foreground">Community is disabled.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <Input
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search community"
        className="border-white/10"
      />

      <ScrollArea className="gap-y-2 mt-4">
        <p className="text-center text-sm text-muted-foreground hidden last:block p-2">
          No results.
        </p>
        {participants.map((participant) => (
          <CommunityItem
            key={participant.identity}
            hostName={hostName}
            viewerName={viewerName}
            participantName={participant.name}
            participantIdentity={participant.identity}
          />
        ))}
      </ScrollArea>
    </div>
  );
};
