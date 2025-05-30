// SamplePage.tsx
import React, { useEffect, useState } from 'react'
import EditCardForm from '../componentes/EditCardForm'
import LoadingSpinner from '../componentes/LoadingSpinner'
import './SamplePage.css'

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
    const loadCards = async () => {
      setLoading(true)
      try {
        await new Promise((res) => setTimeout(res, 3000)) // 3 segundos delay
        const res = await fetch('/cards.json')
        if (!res.ok) throw new Error('Error fetching cards')
        const data = await res.json()
        setCards(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    loadCards()
  }, [])

  const handleSaveEdit = (id: number, newTitle: string, newContent: string, newDate: string) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, title: newTitle, content: newContent, date: newDate } : card
      )
    )
    setEditingCard(null)
  }

  return (
    <div className="sample-page">
      {loading && (
        <div className="loading-overlay">
          <LoadingSpinner />
        </div>
      )}

      {!loading && (
        <div className="cards-container">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card"
              onClick={() => setEditingCard(card)}
              tabIndex={0}
              role="button"
              aria-label={`Editar ${card.title}`}
            >
              <h3>{card.title}</h3>
              <p>{card.content}</p>
              <small>{card.date}</small>
            </div>
          ))}
        </div>
      )}

      {editingCard && (
        <div className="modal-backdrop" onClick={() => setEditingCard(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <EditCardForm
              card={editingCard}
              onSave={handleSaveEdit}
              onCancel={() => setEditingCard(null)}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default SamplePage