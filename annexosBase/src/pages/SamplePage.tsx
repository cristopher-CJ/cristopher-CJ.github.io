import React from 'react'
import cards from '../data/cards.json' // Importa directamente el JSON
import './SamplePage.css'
import BottomBar from '../componentes/BottomBar'

const SamplePage: React.FC = () => {
  return (
    <div>
        <div className="sample-page-container">
            {cards.map(({ id, title, content, date }) => (
                <div className="card" key={id}>
                <h3 className="card-title">{title}</h3>
                <p className="card-content">{content}</p>
                <div className="card-date">{date}</div>
                </div>
            ))}
        </div>

        <BottomBar />
    </div>
  )
}

export default SamplePage