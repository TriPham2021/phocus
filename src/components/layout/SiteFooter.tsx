import { PageContainer } from './PageContainer'

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-rule)] bg-[rgba(244,241,234,0.65)] py-8 text-sm text-[var(--color-moss)]">
      <PageContainer>
        <span className="font-mono uppercase tracking-[0.18em] text-[var(--color-slate)]">
          Phốcus
        </span>{' '}
        &middot; Urban Planning &amp; Infrastructure
      </PageContainer>
    </footer>
  )
}
