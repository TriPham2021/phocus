import type { ArticleTextBlock } from '../../types/episode'

interface BibliographyProps {
  entries: ArticleTextBlock[]
}

export function Bibliography({ entries }: BibliographyProps) {
  return (
    <ol className="article-bibliography">
      {entries.map((entry, index) => (
        <li key={index}>
          {entry.segments.map((segment, segmentIndex) =>
            segment.emphasis ? (
              <em key={segmentIndex}>{segment.text}</em>
            ) : (
              segment.text
            ),
          )}
        </li>
      ))}
    </ol>
  )
}
