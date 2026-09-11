import { Link } from 'react-router-dom'
import { PageContainer } from '../../components/layout/PageContainer'
import { PageIntro } from '../../components/layout/PageIntro'
import { episodes } from '../../data/episodes/episodes'

export function ChaptersPage() {
  return (
    <PageContainer>
      <PageIntro
        eyebrow="Chapters"
        summary="Explore the chapters of Phốcus as they are published."
        title="A history in chapters."
      />
      <section aria-labelledby="chapter-list-title" className="chapter-portal">
        <h2 className="sr-only" id="chapter-list-title">
          Available chapters
        </h2>
        <ol className="chapter-portal__list">
          {episodes.map((episode) => (
            <li className="chapter-portal__item" key={episode.id}>
              <Link className="chapter-portal__link" to={`/episodes/${episode.id}`}>
                <span className="chapter-portal__number">Chapter {episode.id}</span>
                <span className="chapter-portal__title">
                  {episode.title ?? 'Coming soon'}
                </span>
                <span className="chapter-portal__description">{episode.description}</span>
                <span aria-hidden="true" className="chapter-portal__arrow">
                  -&gt;
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </PageContainer>
  )
}