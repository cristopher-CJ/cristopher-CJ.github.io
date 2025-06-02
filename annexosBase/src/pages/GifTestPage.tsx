import React from 'react'
import './GifTestPage.css' // Si quieres estilos personalizados

const GifTestPage: React.FC = () => {
  return (
    <div className="gif-test-page">
      <h2>Pruebas de Gifs / Imágenes / Videos</h2>
      <img src="https://media.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.gif" alt="Gif de prueba" />
      <img src={`${import.meta.env.BASE_URL}/img/img1.png`} alt="Imagen local de ejemplo" />

       <video
        src={`${import.meta.env.BASE_URL}/videos/ejemplo.mp4`}
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '1000px', borderRadius: '10px' }}
        />
    </div>
  )
}

export default GifTestPage