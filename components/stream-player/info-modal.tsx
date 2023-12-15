"use client";

import { type ElementRef, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
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
