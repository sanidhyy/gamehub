"use client";

import { useState } from "react";
import { CheckCheck, Copy } from "lucide-react";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";

type CopyButtonProps = {
  value?: string;
};

export const CopyButton = ({ value }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    if (!value) return;

    setIsCopied(true);
    navigator.clipboard.writeText(value);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const Icon = isCopied ? CheckCheck : Copy;

  return (
    <Hint
      label={isCopied ? "Copied" : "Copy to Clipboard"}
      side="bottom"
      asChild
    >
      <Button
        onClick={onCopy}
        disabled={!value || isCopied}
        aria-disabled={!value || isCopied}
        variant="ghost"
        size="sm"
      >
        <Icon className="h-4 w-4" />
      </Button>
    </Hint>
  );
};
