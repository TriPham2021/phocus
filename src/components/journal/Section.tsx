import type { PropsWithChildren } from 'react'

interface SectionProps extends PropsWithChildren {
  id: string
  number: number
  title: string
}

export function Section({ children, id, number, title }: SectionProps) {
  return (
    <section className="article-section" id={id}>
      <p className="article-section__label">Subchapter {number}</p>
      <h2 className="article-section__title">{title}</h2>
      {children}
    </section>
  )
}
