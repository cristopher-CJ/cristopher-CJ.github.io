import React from 'react'

interface BottomBarProps {
  onAdd: () => void
}

const BottomBar: React.FC<BottomBarProps> = ({ onAdd }) => {
  return (
    <div className="bottom-bar">
      <button className="add-button" onClick={onAdd}>
        +
      </button>
    </div>
  )
}

export default BottomBar