"use client";
import { useState } from "react";

export const useCopyPaste =() => {
    const [copied, setCopied] = useState(false);
    const accountNumber = '7194738654';

    const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text).then(
        () => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
        },
        (err) => {
          console.error('Failed to copy text: ', err);
        }
      );
    };
    return { copied, copyToClipboard, accountNumber };
}