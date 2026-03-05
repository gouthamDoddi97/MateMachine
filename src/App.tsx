import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import './App.css'

type PageNumber = 1 | 2 | 3

const storageKey = 'mm.currentPage'

const getPageFromHash = (): PageNumber | null => {
  if (typeof window === 'undefined') {
    return null
  }

  const match = window.location.hash.match(/^#page([1-3])$/)
  if (!match) {
    return null
  }

  const page = Number(match[1]) as PageNumber
  return page
}

const getPageFromStorage = (): PageNumber | null => {
  if (typeof window === 'undefined') {
    return null
  }

  const rawValue = window.sessionStorage.getItem(storageKey)
  if (!rawValue) {
    return null
  }

  const page = Number(rawValue)
  if (page === 1 || page === 2 || page === 3) {
    return page
  }

  return null
}

const persistPage = (page: PageNumber) => {
  window.sessionStorage.setItem(storageKey, String(page))
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageNumber>(() => {
    return getPageFromHash() ?? 1
  })

  const handlePageChange = (page: PageNumber) => {
    window.scrollTo(0, 0)
    setCurrentPage(page)
    persistPage(page)
    // Update hash to create a history entry (more reliable on iOS Chrome)
    window.location.hash = `page${page}`
  }

  useEffect(() => {
    // Handle browser back/forward buttons
    const applyPage = (page: PageNumber) => {
      window.scrollTo(0, 0)
      setCurrentPage(page)
    }

    const syncFromLocation = (statePage?: PageNumber) => {
      const hashPage = getPageFromHash()
      const storedPage = getPageFromStorage()

      if (statePage) {
        applyPage(statePage)
        persistPage(statePage)
        return
      }

      if (hashPage) {
        applyPage(hashPage)
        persistPage(hashPage)
        return
      }

      if (storedPage) {
        applyPage(storedPage)
        return
      }

      // If no state or hash, go to page 1
      applyPage(1)
    }

    const handlePopState = (event: PopStateEvent) => {
      syncFromLocation(event.state?.page as PageNumber | undefined)
    }

    const handleHashChange = () => {
      syncFromLocation()
    }

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload()
        return
      }

      syncFromLocation(window.history.state?.page as PageNumber | undefined)
      window.setTimeout(() => {
        syncFromLocation(window.history.state?.page as PageNumber | undefined)
      }, 50)
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        syncFromLocation(window.history.state?.page as PageNumber | undefined)
        window.setTimeout(() => {
          syncFromLocation(window.history.state?.page as PageNumber | undefined)
        }, 50)
      }
    }

    // Set initial state
    window.history.replaceState({ page: currentPage }, '', `#page${currentPage}`)

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('pageshow', handlePageShow)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('pageshow', handlePageShow)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <div className="app">
      {currentPage === 1 && <Hero onNext={() => handlePageChange(2)} />}
      {currentPage === 2 && <PageTwo onNext={() => handlePageChange(3)} />}
      {currentPage === 3 && <PageThree />}
    </div>
  )
}

export default App
