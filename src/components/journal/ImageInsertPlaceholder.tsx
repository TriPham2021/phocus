import { Figure } from './Figure'

interface ImageInsertPlaceholderProps {
  afterSubchapter: number
}

const placeholderCaption =
  'Reserved for one or more editorial images, maps, or archival figures.'

export function ImageInsertPlaceholder({
  afterSubchapter,
}: ImageInsertPlaceholderProps) {
  return (
    <div className="article-image-insert-grid">
      {[1, 2].map((imageNumber) => (
        <Figure
          alt={`Reserved image insert ${imageNumber} after Subchapter ${afterSubchapter}`}
          caption={placeholderCaption}
          key={imageNumber}
        />
      ))}
    </div>
  )
}
