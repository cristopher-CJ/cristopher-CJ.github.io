import React, { useState, useEffect } from 'react';

interface Card {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface EditCardFormProps {
  card: Card;
  onSave: (id: number, newTitle: string, newContent: string, newDate: string) => void;
  onCancel: () => void;
}

const EditCardForm: React.FC<EditCardFormProps> = ({ card, onSave, onCancel }) => {
  const [title, setTitle] = useState(card.title);
  const [content, setContent] = useState(card.content);
  const [date, setDate] = useState(card.date);

  useEffect(() => {
    // Si cambian las props de card (por ejemplo, al abrir para editar otro card), actualiza el estado local
    setTitle(card.title);
    setContent(card.content);
    setDate(card.date);
  }, [card]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(card.id, title, content, date);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-card-form">
      <label>
        Título:
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          autoFocus
        />
      </label>

      <label>
        Contenido:
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          required
          rows={4}
        />
      </label>

      <label>
        Fecha:
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />
      </label>

      <div className="form-buttons">
        <button type="submit">Guardar</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
};

export default EditCardForm;