import { Link } from 'react-router-dom'
import { PageContainer } from '../components/layout/PageContainer'
import { PageIntro } from '../components/layout/PageIntro'

export function NotFoundPage() {
  return (
    <PageContainer>
      <PageIntro eyebrow="404" title="This page is not in the journal.">
        <Link to="/">Return home</Link>
      </PageIntro>
    </PageContainer>
  )
}
