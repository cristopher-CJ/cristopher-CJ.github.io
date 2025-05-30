import React, { useEffect, useState } from 'react'
import EditCardForm from '../componentes/EditCardForm'
import BottomBar from '../componentes/BottomBar'
import LoadingSpinner from '../componentes/LoadingSpinner'

interface Card {
  id: number
  title: string
  content: string
  date: string
}

const SamplePage: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([])
  const [loading, setLoading] = useState(true)
  const [editingCard, setEditingCard] = useState<Card | null>(null)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      // Simulamos carga desde localStorage o local file
      const storedCards = localStorage.getItem('cards')
      if (storedCards) {
        setCards(JSON.parse(storedCards))
      } else {
        setCards([])
      }
      setLoading(false)
    }, 1000)
  }, [])

  const saveCards = (updatedCards: Card[]) => {
    setCards(updatedCards)
    localStorage.setItem('cards', JSON.stringify(updatedCards))
  }

  const handleAddCard = () => {
    const newCard: Card = {
      id: Date.now(),
      title: `N post`,
      content: 'Este es el contenido del primer post de la Sample Page.',
      date: new Date().toISOString().slice(0, 10),
    }
    const updatedCards = [...cards, newCard]
    saveCards(updatedCards)
  }

  const handleEditClick = (card: Card) => {
    setEditingCard(card)
  }

  const handleSaveEdit = (id: number, newTitle: string, newContent: string, newDate: string) => {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, title: newTitle, content: newContent, date: newDate } : card
    )
    saveCards(updatedCards)
    setEditingCard(null)
  }

  const handleCancelEdit = () => {
    setEditingCard(null)
  }

  return (
    <>
      {loading && <LoadingSpinner />}

      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
            <small>{card.date}</small>
            <button className="edit-button" onClick={() => handleEditClick(card)}>
              Editar
            </button>
          </div>
        ))}
      </div>

      {editingCard && (
        <div className="modal-overlay">
          <div className="modal-content">
            <EditCardForm
              card={editingCard}
              onSave={handleSaveEdit}
              onCancel={handleCancelEdit}
            />
          </div>
        </div>
      )}

      <BottomBar onAdd={handleAddCard} />
    </>
  )
}

export default SamplePage