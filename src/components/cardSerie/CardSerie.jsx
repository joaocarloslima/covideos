import React from 'react'

import './CardSerie.css'

export default function CadSerie() {
  return (
    <div className="card-serie">
      <div className="poster-image"></div>
      <div className="card-detail">
        <span className="material-icons">star</span>
          9,5
          <h1>Lost</h1>
        <h2>01/01/2020</h2>
      </div>
      <a href="#" className="btn-detail">
        <span className="material-icons">play_circle_filled</span>
        detalhes
      </a>
    </div>
  );
}