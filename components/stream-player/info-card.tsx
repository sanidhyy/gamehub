"use client";

import Image from "next/image";
import { Pencil } from "lucide-react";

import { InfoModal } from "@/components/stream-player/info-modal";
import { Separator } from "@/components/ui/separator";

type InfoCardProps = {
  streamName: string;
  thumbnailUrl: string | null;
  hostIdentity: string;
  viewerIdentity: string;
};

export const InfoCard = ({
  streamName,
  thumbnailUrl,
  hostIdentity,
  viewerIdentity,
}: InfoCardProps) => {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  if (!isHost) return null;

  return (
    <div className="px-4">
      <div className="rounded-xl bg-background">
        <div className="flex items-center gap-x-2.5 p-4">
          <div className="rounded-md bg-blue-600 p-2 h-auto w-auto">
            <Pencil className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-sm lg:text-lg font-semibold capitalize">
              Edit your stream info
            </h2>
            <p className="text-xs lg:text-sm text-muted-foreground">
              Maximize your visibility.
            </p>
          </div>

          <InfoModal
            initialName={streamName}
            initialThumbnailUrl={thumbnailUrl}
          />
        </div>

        <Separator />
        <div className="p-4 lg:p-6 space-y-4">
          <div>
            <h3 className="text-sm text-muted-foreground mb-2">Name</h3>
            <p className="text-sm font-semibold">{streamName}</p>
          </div>
        </div>

        <div className="p-4 lg:p-6 space-y-4">
          <div>
            <h3 className="text-sm text-muted-foreground mb-2">Thumbnail</h3>
            {thumbnailUrl && (
              <div className="relative aspect-video rounded-md overflow-hidden w-[200px] border border-white/10">
                <Image src={thumbnailUrl} alt={streamName} fill />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
