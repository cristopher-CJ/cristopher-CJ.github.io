import React from 'react'
import cards from '../data/cards.json' // Importa directamente el JSON
import './SamplePage.css'

const SamplePage: React.FC = () => {
  return (
    <div className="sample-page-container">
      {cards.map(({ id, title, content, date }) => (
        <div className="card" key={id}>
          <h3 className="card-title">{title}</h3>
          <p className="card-content">{content}</p>
          <div className="card-date">{date}</div>
        </div>
      ))}
    </div>
  )
}

export default SamplePage