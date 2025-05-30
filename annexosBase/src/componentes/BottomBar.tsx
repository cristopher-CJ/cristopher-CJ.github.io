import React from 'react'
import './BottomBar.css'

interface BottomBarProps {
  onAdd: () => void
}

const BottomBar: React.FC<BottomBarProps> = ({ onAdd }) => {
  return (
    <div className="bottom-bar">
      <button className="add-button" onClick={onAdd}>
        ＋
      </button>
    </div>
  )
}

export default BottomBar