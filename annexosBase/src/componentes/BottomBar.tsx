// src/components/BottomBar.tsx
import React from 'react'
import './BottomBar.css'

interface BottomBarProps {
  onAddCard: () => void
}

const BottomBar: React.FC<BottomBarProps> = ({ onAddCard }) => {
  return (
    <footer className="bottom-bar">
      <div className="add-button" onClick={onAddCard} title="Añadir nueva card">
        +
      </div>
    </footer>
  )
}

export default BottomBar