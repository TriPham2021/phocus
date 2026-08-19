export interface RichTextSegment {
  text: string
  emphasis?: boolean
}

export interface ArticleTextBlock {
  type: 'paragraph' | 'quote'
  segments: RichTextSegment[]
  citation?: string
}

export interface EpisodeSection {
  id: string
  number: number
  title: string
  blocks: ArticleTextBlock[]
}

export interface Episode {
  id: string
  title?: string
  description: string
  sections: EpisodeSection[]
}
