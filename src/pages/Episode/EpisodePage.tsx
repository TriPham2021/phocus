import { useParams } from 'react-router-dom'
import { EpisodeNavigation } from '../../components/episode/EpisodeNavigation'
import { SidebarTableOfContents } from '../../components/episode/SidebarTableOfContents'
import { ArticleBody } from '../../components/journal/ArticleBody'
import { ArticleHeader } from '../../components/journal/ArticleHeader'
import { ArticleLayout } from '../../components/journal/ArticleLayout'
import { ImageInsertPlaceholder } from '../../components/journal/ImageInsertPlaceholder'
import { Section } from '../../components/journal/Section'
import { PageContainer } from '../../components/layout/PageContainer'
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
            eyebrow={`Chapter ${episode.id}`}
            title={episode.title ?? `Chapter ${episode.id}`}
            summary={episode.description}
          />
          {episode.sections.map((section, sectionIndex) => (
            <div key={section.id}>
              <Section id={section.id} number={section.number} title={section.title}>
                {section.blocks.length > 0 ? (
                  <ArticleBody blocks={section.blocks} />
                ) : (
                  <p>Editorial content for this subchapter is being prepared.</p>
                )}
              </Section>
              {sectionIndex < episode.sections.length - 1 && (
                <ImageInsertPlaceholder afterSubchapter={section.number} />
              )}
            </div>
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
