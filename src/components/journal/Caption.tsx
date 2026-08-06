import type { PropsWithChildren } from 'react'
export function Caption({ children }: PropsWithChildren) {
  return <figcaption className="article-caption">{children}</figcaption>
}
