// components/AddCardForm.tsx
import React, { useState } from 'react'

interface AddCardFormProps {
  onAddSuccess: () => void
  onCancel: () => void
}

const AddCardForm: React.FC<AddCardFormProps> = ({ onAddSuccess, onCancel }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('http://localhost:3001/api/cards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, date }),
      })

      if (!res.ok) throw new Error('Error al añadir la card')

      setTitle('')
      setContent('')
      setDate(new Date().toISOString().slice(0, 10))
      onAddSuccess()
    } catch (err: any) {
      setError(err.message || 'Error inesperado')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Añadir Nueva Card</h3>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          disabled={loading}
          style={{ width: '100%', padding: '8px', borderRadius: '5px', marginTop: '5px' }}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <label>Contenido:</label>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          required
          rows={4}
          disabled={loading}
          style={{ width: '100%', padding: '8px', borderRadius: '5px', marginTop: '5px' }}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <label>Fecha:</label>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
          disabled={loading}
          style={{ padding: '8px', borderRadius: '5px', marginTop: '5px' }}
        />
      </div>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

      <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between' }}>
        <button type="button" onClick={onCancel} disabled={loading} style={{ padding: '8px 15px', borderRadius: '5px' }}>
          Cancelar
        </button>
        <button
          type="submit"
          disabled={loading}
          style={{ padding: '8px 15px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', border: 'none' }}
        >
          {loading ? 'Añadiendo...' : 'Añadir'}
        </button>
      </div>
    </form>
  )
}

export default AddCardForm