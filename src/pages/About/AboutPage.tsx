import { PageContainer } from '../../components/layout/PageContainer'
export function AboutPage() {
  return (
    <PageContainer>
      <section className="page-intro">
        <p className="eyebrow">About the project</p>
        <h1 className="page-title">A journal of Hanoi’s built environment.</h1>
        <p className="page-summary">
          Project context and editorial methodology will appear here.
        </p>
      </section>
    </PageContainer>
  )
}
