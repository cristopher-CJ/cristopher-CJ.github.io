// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom'
import Inicio from './pages/Inicio'
import SamplePage from './pages/SamplePage'

const App: React.FC = () => {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Inicio</Link>
        <Link to="/sample">Sample Page</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sample" element={<SamplePage />} />
      </Routes>
    </div>
  )
}

export default App