// src/App.tsx
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Inicio from './pages/Inicio'
import SamplePage from './pages/SamplePage'
import './App.css'

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div>
      {/* Navbar superior */}
      <header className="navbar">
        <div className="navbar-content">
          <button className="drawer-toggle" onClick={() => setDrawerOpen(true)}>
            ☰
          </button>
          <div className="navbar-title">Mi Mini Web</div>
        </div>
      </header>

      {/* Drawer lateral */}
      <aside className={`drawer left-drawer ${drawerOpen ? 'open' : ''}`}>
        <button className="close-drawer" onClick={() => setDrawerOpen(false)}>
          ×
        </button>
        <div className="drawer-content">
          <nav className="navbar-links" onClick={() => setDrawerOpen(false)}>
            <Link to="/">Inicio</Link>
            <Link to="/sample">Sample Page</Link>
          </nav>
        </div>
      </aside>

      {/* Contenido principal */}
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