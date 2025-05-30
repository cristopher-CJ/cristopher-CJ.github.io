// src/components/AddCardForm.tsx
import React, { useState } from 'react'
import './AddCardForm.css'

interface AddCardFormProps {
  onAdd: (card: { title: string; content: string }) => void
  onClose: () => void
}

const AddCardForm: React.FC<AddCardFormProps> = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !content) return
    onAdd({ title, content })
    onClose()
  }

  return (
    <div className="modal-overlay">
      <form className="modal-form" onSubmit={handleSubmit}>
        <h2>Nueva Card</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="form-buttons">
          <button type="submit">Añadir</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </div>
      </form>
    </div>
  )
}

export default AddCardForm