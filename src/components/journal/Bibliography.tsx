import React from 'react';
import type { ArticleTextBlock } from '../../types/episode';

interface BibliographyProps {
  entries: ArticleTextBlock[];
}

// Helper to convert URLs in text to clickable links
const urlRegex = /(https?:\/\/[^\s]+)/g;
const renderTextWithLinks = (text: string) => {
  return text.split(urlRegex).map((part, i) =>
    part.match(urlRegex) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-ink"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );
};

export function Bibliography({ entries }: BibliographyProps) {
  return (
    <ol className="article-bibliography">
      {entries.map((entry, index) => (
        <li key={index}>
          {entry.segments.map((segment, segmentIndex) => {
            const rendered = renderTextWithLinks(segment.text);
            return segment.emphasis ? (
              <em key={segmentIndex}>{rendered}</em>
            ) : (
              <React.Fragment key={segmentIndex}>{rendered}</React.Fragment>
            );
          })}
        </li>
      ))}
    </ol>
  );
}
