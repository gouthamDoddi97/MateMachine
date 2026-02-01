import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState<1 | 2 | 3>(1)

  const handlePageChange = (page: 1 | 2 | 3) => {
    window.scrollTo(0, 0)
    setCurrentPage(page)
    // Push state to browser history
    window.history.pushState({ page }, '', `#page${page}`)
  }

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.page) {
        window.scrollTo(0, 0)
        setCurrentPage(event.state.page)
      } else {
        // If no state, go to page 1
        setCurrentPage(1)
      }
    }

    // Set initial state
    window.history.replaceState({ page: currentPage }, '', `#page${currentPage}`)

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
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
