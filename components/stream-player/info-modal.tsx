"use client";

import { type ElementRef, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";
import { toast } from "sonner";

import { UploadDropzone } from "@/lib/uploadthing";
import { updateStream } from "@/actions/stream";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Hint } from "@/components/hint";
import Image from "next/image";

type InfoModalProps = {
  initialName: string;
  initialThumbnailUrl: string | null;
};

export const InfoModal = ({
  initialName,
  initialThumbnailUrl,
}: InfoModalProps) => {
  const router = useRouter();
  const closeRef = useRef<ElementRef<"button">>(null);
  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState(initialName);
  const [thumbnailUrl, setThumbnailUrl] = useState(initialThumbnailUrl);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      updateStream({ name })
        .then(() => toast.success("Stream updated."))
        .catch(() => toast.error("Something went wrong."))
        .finally(() => closeRef?.current?.click());
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" size="sm" className="ml-auto">
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit stream info</DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-14">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Stream name"
              onChange={onChange}
              value={name}
              disabled={isPending}
              aria-disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label>Thumbnail</Label>

            {thumbnailUrl ? (
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                <div className="absolute top-2 right-2 z-[10]">
                  <Hint label="Remove thumbnail" side="left" asChild>
                    <Button
                      type="button"
                      disabled={isPending}
                      aria-disabled={isPending}
                      onClick={() => {}}
                      className="h-auto w-auto p-1.5"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </Hint>
                </div>

                <Image
                  src={thumbnailUrl}
                  alt="Thumbnail"
                  className="object-cover"
                  fill
                />
              </div>
            ) : (
              <div className="rounded-xl border outline-dashed outline-muted">
                <UploadDropzone
                  endpoint="thumbnailUploader"
                  appearance={{
                    label: {
                      color: "#FFFFFF",
                    },
                    allowedContent: {
                      color: "#FFFFFF",
                    },
                  }}
                  onClientUploadComplete={(res) => {
                    setThumbnailUrl(res?.[0]?.url);
                    router.refresh();
                  }}
                />
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <DialogClose ref={closeRef} asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button
              variant="primary"
              type="submit"
              disabled={isPending}
              aria-disabled={isPending}
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
