import { PageContainer } from '../../components/layout/PageContainer'
import { PageIntro } from '../../components/layout/PageIntro'

export function AboutPage() {
  return (
    <PageContainer>
      <PageIntro
        eyebrow="About the project"
        summary={'Project context and editorial methodology will appear here.'}
        title={'A journal of Hanoi\u2019s built environment.'}
      />
    </PageContainer>
  )
}
