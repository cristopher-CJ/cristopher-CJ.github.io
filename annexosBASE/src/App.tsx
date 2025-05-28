// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom'
import Inicio from './pages/Inicio'
import SamplePage from './pages/SamplePage'
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <header className="navbar">
        <div className="navbar-content">
          <div className="navbar-title">Mi Mini Web</div>
          <nav className="navbar-links">
            <Link to="/">Inicio</Link>
            <Link to="/sample">Sample Page</Link>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sample" element={<SamplePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App