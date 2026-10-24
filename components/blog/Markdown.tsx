import { MarkdownAsync } from "react-markdown";
import remarkGfm from "remark-gfm";
import { codeToHtml } from "shiki";
import type { ReactNode } from "react";
import CodeBlock from "./CodeBlock";

type CodeElementProps = { className?: string; children?: ReactNode };

async function Pre({ children }: { children?: ReactNode }) {
  const child = children as { props?: CodeElementProps } | undefined;
  const props = child?.props ?? {};
  const code = String(props.children ?? "").replace(/\n$/, "");
  const lang = /language-([\w-]+)/.exec(props.className ?? "")?.[1] ?? "text";

  let html: string;
  try {
    html = await codeToHtml(code, { lang, theme: "github-dark" });
  } catch {
    // unknown language: fall back to plain text
    html = await codeToHtml(code, { lang: "text", theme: "github-dark" });
  }
  return <CodeBlock html={html} code={code} lang={lang} />;
}

export default function Markdown({ content }: { content: string }) {
  return (
    <div className="blog-prose">
      <MarkdownAsync remarkPlugins={[remarkGfm]} components={{ pre: Pre }}>
        {content}
      </MarkdownAsync>
    </div>
  );
}
