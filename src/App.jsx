import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AllProjectsPage from './pages/AllProjectsPage'
import AllVideosPage from './pages/AllVideosPage'
import NotFound from './components/NotFound'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trabajos" element={<AllProjectsPage />} />
          <Route path="/videos" element={<AllVideosPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
