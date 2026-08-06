import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/navigation/SiteHeader'
import { AppRoutes } from './router/AppRoutes'

function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <AppRoutes />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
