"use client";

import { useState } from "react";

type Props = { html: string; code: string; lang: string };

export default function CodeBlock({ html, code, lang }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable (insecure context or denied permission)
    }
  }

  return (
    <div className="my-5 rounded-lg overflow-hidden border border-[var(--color-input-border)]">
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--color-card-background)] text-xs">
        <span className="uppercase tracking-wide text-[var(--color-brand-gray-400)]">
          {lang}
        </span>
        <button
          type="button"
          onClick={copy}
          className="px-3 py-1 rounded-md font-semibold text-[var(--color-brand-green-400)] hover:bg-[var(--color-card-hover-background)] transition-colors"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div
        className="overflow-x-auto text-sm [&_pre]:p-4 [&_pre]:m-0"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
