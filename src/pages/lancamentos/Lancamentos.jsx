import React, { Fragment, useEffect, useState } from 'react'
import api, { api_options } from '../../services/api'

import CardSerie from "../../components/cardSerie/CardSerie"
import Menu from '../../components/menu/Menu';

export default function Lancamentos() {

    const [series, setSeries] = useState([])

    useEffect(() => { load() }, [] )

    async function load(){
        try{
            const resposta = await api.get("/tv/airing_today", api_options())
            setSeries(resposta.data.results)
            console.log(resposta.data.results)
        }catch(erro){
            console.log(erro)
        }
    }

    return (
        <Fragment>
            <Menu />
            <div className="content">
                {series.map( (serie) => <CardSerie key={serie.id} serie={serie} />)}
            </div>
        </Fragment>
    );

}