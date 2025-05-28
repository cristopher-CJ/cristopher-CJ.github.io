// App.tsx
import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Inicio from './pages/Inicio'
import SamplePage from './pages/SamplePage'
import './App.css'

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const drawerWidth = isDrawerOpen ? '200px' : '60px'

  return (
    <div>
      {/* Navbar superior */}
      <header className="navbar">
        <div className="navbar-left">
          <button
            className="drawer-toggle"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            aria-label="Toggle Drawer"
          >
            &#9776;
          </button>
          <div className="navbar-title">Mi Mini Web</div>
        </div>
      </header>

      {/* Drawer lateral */}
      <div
        className={`drawer left-drawer ${isDrawerOpen ? 'open' : ''}`}
        style={{ width: drawerWidth }}
      >
        <nav className="drawer-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `drawer-link ${isActive ? 'active' : ''}`
            }
          >
            <div className="drawer-link-content">
              <span className="drawer-icon">🏠</span>
              {isDrawerOpen && <span className="drawer-text">Inicio</span>}
            </div>
          </NavLink>
          <NavLink
            to="/sample"
            className={({ isActive }) =>
              `drawer-link ${isActive ? 'active' : ''}`
            }
          >
            <div className="drawer-link-content">
              <span className="drawer-icon">⭐</span>
              {isDrawerOpen && <span className="drawer-text">Sample Page</span>}
            </div>
          </NavLink>
        </nav>
      </div>

      {/* Contenido principal */}
      <main className="main-content" style={{ marginLeft: drawerWidth }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sample" element={<SamplePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App