import type { ArticleTextBlock, RichTextSegment } from '../types/episode'

const emphasisPattern = /\*([^*]+)\*|_([^_]+)_/g

function parseInlineMarkdown(text: string): RichTextSegment[] {
  const segments: RichTextSegment[] = []
  let cursor = 0

  for (const match of text.matchAll(emphasisPattern)) {
    const matchIndex = match.index ?? 0

    if (matchIndex > cursor) {
      segments.push({ text: text.slice(cursor, matchIndex) })
    }

    segments.push({ text: match[1] ?? match[2] ?? '', emphasis: true })
    cursor = matchIndex + match[0].length
  }

  if (cursor < text.length) {
    segments.push({ text: text.slice(cursor) })
  }

  return segments.length > 0 ? segments : [{ text }]
}

function parseQuoteBlock(markdown: string): ArticleTextBlock {
  const lines = markdown.split(/\r?\n/).map((line) => line.replace(/^>\s?/, ''))
  const citationIndex = lines.findIndex((line) => line.startsWith('— '))
  const quote = lines
    .filter((_, index) => index !== citationIndex)
    .join('\n')
    .trim()

  return {
    type: 'quote',
    segments: parseInlineMarkdown(quote),
    ...(citationIndex >= 0 && { citation: lines[citationIndex].slice(2) }),
  }
}

export function parseArticleMarkdown(markdown: string): ArticleTextBlock[] {
  return markdown
    .trim()
    .split(/\r?\n\s*\r?\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) =>
      block.startsWith('>')
        ? parseQuoteBlock(block)
        : { type: 'paragraph', segments: parseInlineMarkdown(block) },
    )
}
