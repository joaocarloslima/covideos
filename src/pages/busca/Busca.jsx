import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

import CardSerie from "../../components/cardSerie/CardSerie"
import Tab from '../../components/tab/Tab';

export default function Busca(props) {

    const [series, setSeries] = useState([])
    const urlAPI = "https://api.themoviedb.org/3/search/tv" +
                    props.location.search +
                    "&api_key=1e922667481ab207d642450b0efb461e&language=pt-BR"

    useEffect(() => { load() }, [] )

    async function load(){
        try{
            const resposta = await axios.get(urlAPI)
            setSeries(resposta.data.results)
            console.log(props.location)
        }catch(erro){
            console.log(erro)
        }
    }

    return (
        <Fragment>
            <div className="tabs">
                <Tab text="Lançamentos" target="lancamentos" />
                <Tab text="Busca" target="busca" />
                <Tab text="Sobre" target="sobre" />
            </div>
            <div className="content">
                {series.map( (serie) => <CardSerie key={serie.id} serie={serie} />)}
            </div>
        </Fragment>
    );

}