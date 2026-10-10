import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Caption } from './Caption'

interface FigureProps {
  alt: string
  caption?: string
  children?: ReactNode
  imageSrc?: string
  sourceUrl?: string
}

export function Figure({
  alt,
  caption,
  children,
  imageSrc,
  sourceUrl,
}: FigureProps) {
  const [isImageOpen, setIsImageOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !isImageOpen) return

    dialog.showModal()
    const handleClose = () => setIsImageOpen(false)
    dialog.addEventListener('close', handleClose)

    return () => dialog.removeEventListener('close', handleClose)
  }, [isImageOpen])

  return (
    <figure className="article-figure">
      {imageSrc ? (
        <button
          aria-label={`Open full-size image: ${alt}`}
          className="article-figure__image-button"
          onClick={() => setIsImageOpen(true)}
          type="button"
        >
          <img alt={alt} src={imageSrc} />
        </button>
      ) : (
        children ?? (
        <div className="article-figure__placeholder" role="img" aria-label={alt}>
          Figure asset placeholder
        </div>
        )
      )}
      {caption && <Caption sourceUrl={sourceUrl}>{caption}</Caption>}
      {imageSrc && isImageOpen && (
        <dialog
          aria-label={caption ? `Image preview: ${caption}` : 'Image preview'}
          className="article-lightbox"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              dialogRef.current?.close()
            }
          }}
          onCancel={(event) => {
            event.preventDefault()
            dialogRef.current?.close()
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              event.preventDefault()
              dialogRef.current?.close()
            }
          }}
          ref={dialogRef}
        >
          <div className="article-lightbox__toolbar">
            <button
              className="article-lightbox__close"
              onClick={() => dialogRef.current?.close()}
              type="button"
            >
              Close
            </button>
          </div>
          <img className="article-lightbox__image" alt={alt} src={imageSrc} />
          {caption && <p className="article-lightbox__caption">{caption}</p>}
        </dialog>
      )}
    </figure>
  )
}
