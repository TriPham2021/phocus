interface ArticleHeaderProps {
  eyebrow: string
  title: string
  summary?: string
}

export function ArticleHeader({ eyebrow, title, summary }: ArticleHeaderProps) {
  return (
    <header>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      {summary && <p className="page-summary">{summary}</p>}
    </header>
  )
}
