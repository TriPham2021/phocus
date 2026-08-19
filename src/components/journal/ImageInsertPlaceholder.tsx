import { Figure } from './Figure'

interface ImageInsertPlaceholderProps {
  afterSubchapter: number
}

export function ImageInsertPlaceholder({
  afterSubchapter,
}: ImageInsertPlaceholderProps) {
  return (
    <Figure
      alt={`Reserved image insert after Subchapter ${afterSubchapter}`}
      caption="Reserved for one or more editorial images, maps, or archival figures."
    />
  )
}
