export interface EpisodeSection {
  id: string
  title: string
}
export interface Episode {
  id: string
  title?: string
  description: string
  sections: EpisodeSection[]
}
