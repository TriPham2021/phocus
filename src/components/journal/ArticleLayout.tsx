import type { PropsWithChildren, ReactNode } from 'react'

interface ArticleLayoutProps extends PropsWithChildren {
  sidebar?: ReactNode
}

export function ArticleLayout({ children, sidebar }: ArticleLayoutProps) {
  return (
    <div className="article-layout">
      {sidebar}
      {children}
    </div>
  )
}
