import { Link } from 'react-router-dom'
import { PageContainer } from '../components/layout/PageContainer'
export function NotFoundPage() {
  return (
    <PageContainer>
      <section className="page-intro">
        <p className="eyebrow">404</p>
        <h1 className="page-title">This page is not in the journal.</h1>
        <Link to="/">Return home</Link>
      </section>
    </PageContainer>
  )
}
