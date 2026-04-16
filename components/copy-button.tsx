"use client";

import { useState, useCallback } from "react";

type CopyButtonProps = {
  text: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
};

export function CopyButton({
  text,
  label = "Copy string",
  className = "button-primary compact-button",
  style,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      type="button"
      className={className}
      onClick={handleCopy}
      style={{
        ...style,
        background: copied ? "var(--green)" : undefined,
        minWidth: "10ch",
      }}
    >
      {copied ? "\u2713 Copied!" : label}
    </button>
  );
}
