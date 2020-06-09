import React from 'react'

import './CardSerie.css'

export default function CadSerie({ serie }) {
  const nota = serie.vote_average.toFixed(1)
  const imgUrl = "https://image.tmdb.org/t/p/w200/"
  const data = new Date(serie.first_air_date)
  const data_lancamento = data.toLocaleDateString()

  return (
    <div className="CardSerie">
      <span className="material-icons FavButton">add_circle_outline</span>
      <div
        className="img-header"
        style={{ backgroundImage: `url(${imgUrl}${serie.poster_path})` }}
      >
      </div>

      <div className="detail">
        <div className="score"><span className="material-icons">grade</span>
          {nota}
        </div>
        <h2>{serie.name}</h2>
        <h3>{data_lancamento}</h3>
      </div>

      <a href="#" className="btn-detail">
        <span className="material-icons">add_circle</span>
                detalhes
            </a>
    </div>
  );
}