export interface RichTextSegment {
  text: string
  emphasis?: boolean
}

export interface ArticleTextBlock {
  type: 'paragraph' | 'quote'
  segments: RichTextSegment[]
  citation?: string
}

export interface EpisodeImage {
  src: string
  alt: string
  caption: string
}

export interface EpisodeSection {
  id: string
  number: number
  title: string
  blocks: ArticleTextBlock[]
  images?: EpisodeImage[]
}

export interface Episode {
  id: string
  title?: string
  description: string
  sections: EpisodeSection[]
}
