import React from 'react'

import './CardTemporada.css'

export default function CardTemporada({ temporada }){
    return(
        <div class="card-temporada">
            <img 
                src={`https://image.tmdb.org/t/p/w200/${temporada.poster_path}`} 
                alt="poster temporada"
            />
            <div class="temporada-info">
                <h3>{ temporada.name }</h3>
                <p className="qtde-eps">{ temporada.episode_count} episódios</p>
                <p>{ temporada.overview }</p>
            </div>
        </div>
    )
}