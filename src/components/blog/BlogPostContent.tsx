interface BlogPostContentProps {
  content: string;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <div 
      className="prose prose-lg max-w-none
        prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
        prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border/50
        prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-5
        prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4 prose-h4:text-primary
        prose-p:text-foreground/90 prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-[17px]
        prose-ul:text-foreground/90 prose-ul:my-6 prose-ul:space-y-3
        prose-ol:text-foreground/90 prose-ol:my-6 prose-ol:space-y-3
        prose-li:my-2 prose-li:leading-relaxed prose-li:pl-2
        prose-strong:text-foreground prose-strong:font-semibold prose-strong:text-[18px]
        prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-primary/80 prose-a:transition-colors
        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:bg-muted/30 prose-blockquote:rounded-r
        prose-table:border-collapse prose-table:my-8 prose-table:w-full
        prose-th:bg-muted/50 prose-th:p-4 prose-th:text-left prose-th:border prose-th:border-border prose-th:font-bold
        prose-td:p-4 prose-td:border prose-td:border-border
        [&_h2]:first:mt-0
        [&_p:has(strong:only-child)]:mb-3
      "
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
