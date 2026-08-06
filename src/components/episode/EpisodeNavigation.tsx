import { Link } from 'react-router-dom'
import type { Episode } from '../../types/episode'

interface EpisodeNavigationProps {
  previous?: Episode
  next?: Episode
}
export function EpisodeNavigation({ previous, next }: EpisodeNavigationProps) {
  return (
    <nav
      className="mt-12 flex justify-between border-t border-[var(--color-rule)] pt-6 text-sm"
      aria-label="Episode navigation"
    >
      <span>
        {previous && (
          <Link to={`/episodes/${previous.id}`}>← Episode {previous.id}</Link>
        )}
      </span>
      <span>
        {next && <Link to={`/episodes/${next.id}`}>Episode {next.id} →</Link>}
      </span>
    </nav>
  )
}
