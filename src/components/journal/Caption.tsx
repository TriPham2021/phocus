import type { PropsWithChildren } from 'react'

interface CaptionProps extends PropsWithChildren {
  sourceUrl?: string
}

export function Caption({ children, sourceUrl }: CaptionProps) {
  return (
    <figcaption className="article-caption">
      {children}
      {sourceUrl && (
        <>
          {' '}
          <a
            aria-label="Source for this image"
            className="article-caption__source"
            href={sourceUrl}
            rel="noreferrer"
            target="_blank"
          >
            Source
          </a>
        </>
      )}
    </figcaption>
  )
}
