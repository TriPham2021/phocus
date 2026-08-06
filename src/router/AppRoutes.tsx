import { Route, Routes } from 'react-router-dom'
import { AboutPage } from '../pages/About/AboutPage'
import { EpisodePage } from '../pages/Episode/EpisodePage'
import { HomePage } from '../pages/Home/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ReferencesPage } from '../pages/References/ReferencesPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/episodes/:episodeId" element={<EpisodePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/references" element={<ReferencesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
