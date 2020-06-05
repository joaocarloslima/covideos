import React from 'react'

import './CardSerie.css'

export default function CadSerie() {
  return (
    <div className="CardSerie">
      <span className="material-icons FavButton">add_circle_outline</span>
      <div
        className="img-header"
        >
      </div>

      <div className="score">
        <span className="material-icons">grade</span>
        9.8
      </div>
      <h2>Lost</h2>
      <h3>02/01/2006</h3>

      <a href="#" className="btn-detail">
        <span className="material-icons">add_circle</span>
                detalhes
            </a>
    </div>
  );
}