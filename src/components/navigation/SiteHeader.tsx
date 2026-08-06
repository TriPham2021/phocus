import { Link, NavLink } from 'react-router-dom'
import { episodes } from '../../data/episodes/episodes'
import { PageContainer } from '../layout/PageContainer'

const navigationLinks = [
  { label: 'About', to: '/about' },
  { label: 'References', to: '/references' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--color-rule)]">
      <PageContainer>
        <nav
          className="flex min-h-18 flex-col items-start justify-between gap-3 py-4 lg:flex-row lg:items-center lg:gap-6"
          aria-label="Primary navigation"
        >
          <Link
            className="font-serif text-lg tracking-wide text-[var(--color-forest)]"
            to="/"
          >
            H&#192; N&#7896;I JOURNAL
          </Link>
          <div className="flex w-full flex-wrap items-center gap-x-5 gap-y-2 text-sm lg:w-auto">
            {episodes.map((episode) => (
              <NavLink key={episode.id} to={`/episodes/${episode.id}`}>
                Episode {episode.id}
              </NavLink>
            ))}
            {navigationLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </PageContainer>
    </header>
  )
}
