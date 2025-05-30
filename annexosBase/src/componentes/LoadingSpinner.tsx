import React from 'react'

const LoadingSpinner: React.FC = () => (
  <div className="loading-spinner">
    <svg
      className="spinner-icon"
      width="50px"
      height="50px"
      viewBox="0 0 50 50"
      >
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      />
    </svg>
  </div>
)

export default LoadingSpinner