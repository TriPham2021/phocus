import type { PropsWithChildren } from 'react'

interface SectionProps extends PropsWithChildren {
  id: string
  title: string
}

export function Section({ children, id, title }: SectionProps) {
  return (
    <section className="article-section" id={id}>
      <h2 className="article-section__title">{title}</h2>
      {children}
    </section>
  )
}
