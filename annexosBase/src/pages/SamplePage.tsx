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
  const [addingCard, setAddingCard] = useState(false)
  const [editingCard, setEditingCard] = useState<Card | null>(null)

  useEffect(() => {
    const loadCards = async () => {
      setLoading(true)
      try {
        const res = await fetch('http://localhost:3001/api/cards')
        const data: Card[] = await res.json()
        setCards(data)
      } catch (err) {
        console.error('Error cargando cards:', err)
      } finally {
        setLoading(false)
      }
    }
    loadCards()
  }, [])

  const saveCards = async (updatedCards: Card[]) => {
    try {
      await fetch('http://localhost:3001/api/cards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCards),
      })
      setCards(updatedCards)
    } catch (err) {
      console.error('Error guardando cards:', err)
    }
  }

  const handleAddButtonClick = () => {
    setAddingCard(true)
  }

  // Añadir card
  const handleConfirmAdd = (
    id: number = cards.length > 0 ? Math.max(...cards.map(c => c.id)) + 1 : 1,
    title: string,
    content: string,
    date: string
  ) => {
    const newCard: Card = {
      id,
      title,
      content,
      date,
    }
    const updated = [...cards, newCard]
    saveCards(updated)
    setAddingCard(false)
  }

  const handleCancelAdd = () => {
    setAddingCard(false)
  }

  // Editar card
  const handleEditClick = (card: Card) => {
    setEditingCard(card)
  }

  const handleConfirmEdit = (
    id: number,
    newTitle: string,
    newContent: string,
    newDate: string
  ) => {
    const updated = cards.map(c =>
      c.id === id ? { ...c, title: newTitle, content: newContent, date: newDate } : c
    )
    saveCards(updated)
    setEditingCard(null)
  }

  const handleCancelEdit = () => {
    setEditingCard(null)
  }

  return (
    <div className="sample-page">
      <h2>Sample Page - Cards</h2>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="cards-container">
            {cards.length === 0 ? (
              <p>No hay cards aún.</p>
            ) : (
              cards.map(card => (
                <div
                  key={card.id}
                  className="card"
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '10px',
                    padding: '10px',
                    marginBottom: '10px',
                    position: 'relative',
                  }}
                >
                  <h3>{card.title}</h3>
                  <p>{card.content}</p>
                  <small>Fecha: {card.date}</small>
                  <button
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      padding: '4px 8px',
                      cursor: 'pointer',
                      borderRadius: '6px',
                      border: 'none',
                      backgroundColor: '#4caf50',
                      color: 'white',
                    }}
                    onClick={() => handleEditClick(card)}
                  >
                    Editar
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Popup para añadir card */}
          {addingCard && (
            <div className="modal-overlay">
              <div className="modal-content">
                <EditCardForm
                  card={{
                    id: 0,
                    title: '',
                    content: '',
                    date: new Date().toISOString().slice(0, 10),
                  }}
                  onSave={handleConfirmAdd}
                  onCancel={handleCancelAdd}
                />
              </div>
            </div>
          )}

          {/* Popup para editar card */}
          {editingCard && (
            <div className="modal-overlay">
              <div className="modal-content">
                <EditCardForm
                  card={editingCard}
                  onSave={handleConfirmEdit}
                  onCancel={handleCancelEdit}
                />
              </div>
            </div>
          )}

          <BottomBar onAdd={handleAddButtonClick} />
        </>
      )}
    </div>
  )
}

export default SamplePage