// src/pages/SamplePage.tsx
import React, { useState, useEffect } from 'react'
import BottomBar from '../componentes/BottomBar'
import './SamplePage.css'

// Interfaz para tipo Card
interface Card {
  id: number
  title: string
  content: string
  date: string
}

const SamplePage: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([])

  // Cargar cards desde archivo JSON local - (aquí harías fetch si es necesario)
  useEffect(() => {
    // Por ahora, cargamos un ejemplo inicial
    setCards([
      {
        id: 1,
        title: 'N post',
        content: 'Este es el contenido del primer post de la Sample Page.',
        date: '2025-05-28',
      },
    ])
  }, [])

  // Función para añadir una nueva card plantilla
  const addCard = () => {
    const newId = cards.length > 0 ? cards[cards.length - 1].id + 1 : 1
    const newCard: Card = {
      id: newId,
      title: `N post ${newId}`,
      content: 'Este es el contenido del primer post de la Sample Page.',
      date: new Date().toISOString().slice(0, 10),
    }
    setCards([...cards, newCard])
  }

  return (
    <>
      <div className="sample-content">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
            <small>{card.date}</small>
          </div>
        ))}
      </div>

      <BottomBar onAddCard={addCard} />
    </>
  )
}

export default SamplePage