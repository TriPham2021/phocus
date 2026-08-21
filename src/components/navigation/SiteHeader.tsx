import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { episodes } from '../../data/episodes/episodes'
import { PageContainer } from '../layout/PageContainer'

const navigationLinks = [
  { label: 'About', to: '/about' },
  { label: 'References', to: '/references' },
]

export function SiteHeader() {
  const [isChaptersOpen, setIsChaptersOpen] = useState(false)

  return (
    <header className="border-b border-[var(--color-rule)]">
      <PageContainer>
        <nav
          className="flex min-h-18 flex-col items-start justify-between gap-3 py-4 lg:flex-row lg:items-center lg:gap-6"
          aria-label="Primary navigation"
        >
          <Link
            className="site-masthead text-lg tracking-wide text-[var(--color-forest)]"
            to="/"
          >
            {'Ph\u00f4\u0301cus'}
          </Link>
          <div className="flex w-full flex-wrap items-center gap-x-5 gap-y-2 text-sm lg:w-auto">
            <div
              className="relative"
              onMouseEnter={() => setIsChaptersOpen(true)}
              onMouseLeave={() => setIsChaptersOpen(false)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  setIsChaptersOpen(false)
                  event.currentTarget.querySelector('button')?.focus()
                }
              }}
            >
              <button
                aria-controls="chapter-menu"
                aria-expanded={isChaptersOpen}
                className="px-2 py-1 transition-colors hover:bg-[var(--color-muted-paper)] focus-visible:bg-[var(--color-muted-paper)]"
                onClick={() => setIsChaptersOpen((isOpen) => !isOpen)}
                onFocus={() => setIsChaptersOpen(true)}
                type="button"
              >
                Chapters
              </button>
              {isChaptersOpen && (
                <div className="absolute left-0 z-10 mt-2 w-72 max-w-[calc(100vw-2.5rem)] border border-[var(--color-rule)] bg-[var(--color-paper)] p-3 shadow-sm">
                  <ul className="space-y-1" id="chapter-menu" aria-label="Chapters">
                    {episodes.map((episode) => (
                      <li key={episode.id}>
                        <NavLink
                          className="block py-2 leading-snug"
                          onClick={() => setIsChaptersOpen(false)}
                          to={`/episodes/${episode.id}`}
                        >
                          Chapter {episode.id}
                          {episode.title && ` \u00b7 ${episode.title}`}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
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
