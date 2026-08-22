import type { PropsWithChildren } from 'react'

interface PageIntroProps extends PropsWithChildren {
  eyebrow: string
  summary?: string
  title: string
}

export function PageIntro({ children, eyebrow, summary, title }: PageIntroProps) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      {summary && <p className="page-summary">{summary}</p>}
      {children}
    </section>
  )
}
