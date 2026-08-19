import type { EpisodeSection } from '../../types/episode'

interface SidebarTableOfContentsProps {
  sections: EpisodeSection[]
}
export function SidebarTableOfContents({ sections }: SidebarTableOfContentsProps) {
  return (
    <aside aria-label="Table of contents" className="text-sm">
      <p className="eyebrow">Contents</p>
      <ol className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>
              {section.number}. {section.title}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  )
}
