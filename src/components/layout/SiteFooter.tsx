import { PageContainer } from './PageContainer'

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-rule)] bg-[rgba(244,241,234,0.65)] py-8 text-sm text-[var(--color-moss)]">
      <PageContainer>
        <span className="font-mono uppercase tracking-[0.18em] text-[var(--color-slate)]">
          Phốcus
        </span>{' '}
        &middot; Urban Planning &amp; Infrastructure
        <div className="mt-4 text-[var(--color-slate)] opacity-80">
          <a href="mailto:phocusprojecthn@gmail.com" className="hover:underline">
            phocusprojecthn@gmail.com
          </a>
        </div>
      </PageContainer>
    </footer>
  )
}
