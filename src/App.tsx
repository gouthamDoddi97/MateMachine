import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import './App.css'

type PageNumber = 1 | 2 | 3

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

function App() {
  const [currentPage, setCurrentPage] = useState<PageNumber>(() => {
    return getPageFromHash() ?? 1
  })

  const handlePageChange = (page: PageNumber) => {
    window.scrollTo(0, 0)
    setCurrentPage(page)
    // Push state to browser history
    window.history.pushState({ page }, '', `#page${page}`)
  }

  useEffect(() => {
    // Handle browser back/forward buttons
    const applyPage = (page: PageNumber) => {
      window.scrollTo(0, 0)
      setCurrentPage(page)
    }

    const syncFromLocation = (statePage?: PageNumber) => {
      const hashPage = getPageFromHash()

      if (statePage) {
        applyPage(statePage)
        return
      }

      if (hashPage) {
        applyPage(hashPage)
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

    const handlePageShow = () => {
      syncFromLocation(window.history.state?.page as PageNumber | undefined)
    }

    // Set initial state
    window.history.replaceState({ page: currentPage }, '', `#page${currentPage}`)

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('pageshow', handlePageShow)
    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('pageshow', handlePageShow)
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
