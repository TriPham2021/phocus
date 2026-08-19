import type { ArticleTextBlock } from '../../types/episode'

interface ArticleBodyProps {
  blocks: ArticleTextBlock[]
}

export function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className="article-body">
      {blocks.map((block, index) => {
        const content = block.segments.map((segment, segmentIndex) =>
          segment.emphasis ? <em key={segmentIndex}>{segment.text}</em> : segment.text,
        )

        if (block.type === 'quote') {
          return (
            <blockquote className="article-quote" key={index}>
              <p>{content}</p>
              {block.citation && <footer>{block.citation}</footer>}
            </blockquote>
          )
        }

        return <p key={index}>{content}</p>
      })}
    </div>
  )
}
