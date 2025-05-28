// src/components/Clock.tsx
import React, { useState, useEffect } from 'react'

const Clock: React.FC = () => {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <div className="clock">{time}</div>
}

export default Clock