import React, { Fragment, useEffect, useState } from "react";
import api, { api_options } from "../../services/api";

import "./Serie.css";

export default function Populares(props) {
  const { serieId } = props.match.params
  const [serie, setSerie] = useState([]);
  const [genres, setGenres] = useState([]);
  const imgBaseUrl = "https://image.tmdb.org/t/p/w300/";
  const imgBgBaseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const resposta = await api.get(`/tv/${serieId}`, api_options());
      setSerie(resposta.data);
      setGenres(resposta.data.genres);
      console.log(resposta.data);
    } catch (erro) {
      console.log(erro);
    }
  }

  return (
    <Fragment>
      <div className="hero">
        <div
          className="bg"
          style={{
            backgroundImage: `url(${imgBgBaseUrl}${serie.backdrop_path})`,
          }}
        >
        </div>
        <button className="btn-back" onClick={props.history.goBack}>
          <span className="material-icons">navigate_before</span>
          voltar
        </button>
        <img src={`${imgBaseUrl}${serie.poster_path}`} alt="poster" />
        <div className="serie-info">
          <h1>{serie.name}</h1>
          <div className="score">
            <span className="material-icons">grade</span>
            {serie.vote_average}
          </div>
          <p className="genres">
            {genres.map((genero) => {
              return genero.name + " | ";
            })}
          </p>
          <p>{serie.overview}</p>
        </div>
      </div>
    </Fragment>
  );
}
