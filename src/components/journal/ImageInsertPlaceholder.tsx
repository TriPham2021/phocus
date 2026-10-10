import { Figure } from './Figure'
import type { EpisodeImage } from '../../types/episode'

interface ImageInsertPlaceholderProps {
  afterSubchapter: number
  images?: EpisodeImage[]
}

const placeholderCaption =
  'Reserved for one or more editorial images, maps, or archival figures.'

export function ImageInsertPlaceholder({
  afterSubchapter,
  images = [],
}: ImageInsertPlaceholderProps) {
  return (
    <div className="article-image-insert-grid">
      {[1, 2].map((imageNumber) => {
        const image = images[imageNumber - 1]

        return image ? (
          <Figure
            alt={image.alt}
            caption={image.caption}
            imageSrc={image.src}
            key={image.src}
            sourceUrl={image.sourceUrl}
          />
        ) : (
          <Figure
            alt={`Reserved image insert ${imageNumber} after Subchapter ${afterSubchapter}`}
            caption={placeholderCaption}
            key={imageNumber}
          />
        )
      })}
    </div>
  )
}
