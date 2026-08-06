import { useParams } from 'react-router-dom'
import { ArticleHeader } from '../../components/journal/ArticleHeader'
import { ArticleLayout } from '../../components/journal/ArticleLayout'
import { Figure } from '../../components/journal/Figure'
import { Section } from '../../components/journal/Section'
import { PageContainer } from '../../components/layout/PageContainer'
import { EpisodeNavigation } from '../../components/episode/EpisodeNavigation'
import { SidebarTableOfContents } from '../../components/episode/SidebarTableOfContents'
import { episodes } from '../../data/episodes/episodes'
import { NotFoundPage } from '../NotFoundPage'

export function EpisodePage() {
  const { episodeId } = useParams()
  const index = episodes.findIndex((episode) => episode.id === episodeId)
  if (index === -1) return <NotFoundPage />
  const episode = episodes[index]
  return (
    <PageContainer>
      <ArticleLayout sidebar={<SidebarTableOfContents sections={episode.sections} />}>
        <article>
          <ArticleHeader
            eyebrow={`Episode ${episode.id}`}
            title={episode.title ?? `Episode ${episode.id}`}
            summary={episode.description}
          />
          {episode.sections.map((section) => (
            <Section key={section.id} id={section.id} title={section.title}>
              <p>Article content will be added in a future editorial phase.</p>
              {episode.id === '1' && (
                <Figure
                  alt="Future historical map or archive image"
                  caption="Figure treatment is ready for future editorial assets."
                />
              )}
            </Section>
          ))}
          <EpisodeNavigation
            previous={episodes[index - 1]}
            next={episodes[index + 1]}
          />
        </article>
      </ArticleLayout>
    </PageContainer>
  )
}
