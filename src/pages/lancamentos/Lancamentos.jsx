import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

import CardSerie from "../../components/cardSerie/CardSerie"
import Tab from '../../components/tab/Tab';

export default function Lancamentos() {

    const [series, setSeries] = useState([])

    useEffect(() => { load() }, [] )

    async function load(){
        try{
            const resposta = await axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=1e922667481ab207d642450b0efb461e&language=pt-BR")
            setSeries(resposta.data.results)
            console.log(resposta.data.results)
        }catch(erro){
            console.log(erro)
        }
    }

    return (
        <Fragment>
            <div className="tabs">
                <Tab text="Lançamentos" target="lancamentos" />
                <Tab text="Sobre" target="sobre" />
            </div>
            <div className="content">
                {series.map( (serie) => <CardSerie key={serie.id} serie={serie} />)}
            </div>
        </Fragment>
    );

}