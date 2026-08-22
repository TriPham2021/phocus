import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { episodes } from '../../data/episodes/episodes'
import { PageContainer } from '../layout/PageContainer'

const navigationLinks = [
  { label: 'About', to: '/about' },
  { label: 'References', to: '/references' },
]

export function SiteHeader() {
  const [isChaptersOpen, setIsChaptersOpen] = useState(false)
  const closeTimer = useRef<number | undefined>(undefined)

  const clearCloseTimer = () => {
    if (closeTimer.current !== undefined) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = undefined
    }
  }

  const openChapters = () => {
    clearCloseTimer()
    setIsChaptersOpen(true)
  }

  const closeChapters = () => {
    clearCloseTimer()
    closeTimer.current = window.setTimeout(() => {
      setIsChaptersOpen(false)
      closeTimer.current = undefined
    }, 200)
  }

  const closeChaptersImmediately = () => {
    clearCloseTimer()
    setIsChaptersOpen(false)
  }

  useEffect(() => clearCloseTimer, [])

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
          <div className="flex w-full flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:gap-x-5 lg:w-auto">
            <div
              className="relative"
              onMouseEnter={openChapters}
              onMouseLeave={closeChapters}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  closeChaptersImmediately()
                  event.currentTarget.querySelector('button')?.focus()
                }
              }}
            >
              <button
                aria-controls="chapter-menu"
                aria-expanded={isChaptersOpen}
                className="inline-flex min-h-11 items-center px-2 py-1 transition-colors hover:bg-[var(--color-muted-paper)] focus-visible:bg-[var(--color-muted-paper)]"
                onClick={() => {
                  clearCloseTimer()
                  setIsChaptersOpen((isOpen) => !isOpen)
                }}
                onFocus={openChapters}
                type="button"
              >
                Chapters
              </button>
              {isChaptersOpen && (
                <div className="chapter-menu absolute left-0 z-10 mt-2 border border-[var(--color-rule)] bg-[var(--color-paper)] p-3 shadow-sm">
                  <ul className="space-y-1" id="chapter-menu" aria-label="Chapters">
                    {episodes.map((episode) => (
                      <li key={episode.id}>
                        <NavLink
                          className="block min-h-11 py-2 leading-snug"
                          onClick={closeChaptersImmediately}
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
              <NavLink
                className="inline-flex min-h-11 items-center py-1"
                key={link.to}
                to={link.to}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </PageContainer>
    </header>
  )
}
