import { PageContainer } from '../../components/layout/PageContainer'
import { PageIntro } from '../../components/layout/PageIntro'

export function HomePage() {
  return (
    <PageContainer>
      <PageIntro
        eyebrow="Urban Planning & Infrastructure"
        summary={
          'A forthcoming visual journal documenting the city\u2019s historical planning and infrastructure.'
        }
        title={'H\u00e0 N\u1ed9i, read through its evolving urban form.'}
      />
    </PageContainer>
  )
}
