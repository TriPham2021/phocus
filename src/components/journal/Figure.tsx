import type { ReactNode } from 'react'
import { Caption } from './Caption'

interface FigureProps {
  alt: string
  caption?: string
  children?: ReactNode
}

export function Figure({ alt, caption, children }: FigureProps) {
  return (
    <figure className="article-figure">
      {children ?? (
        <div className="article-figure__placeholder" role="img" aria-label={alt}>
          Figure asset placeholder
        </div>
      )}
      {caption && <Caption>{caption}</Caption>}
    </figure>
  )
}
