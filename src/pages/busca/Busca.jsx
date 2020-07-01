import React, { Fragment, useEffect, useState } from 'react'
import api, {api_options} from '../../services/api'

import CardSerie from "../../components/cardSerie/CardSerie"
import Menu from '../../components/menu/Menu';

export default function Busca(props) {

    const [series, setSeries] = useState([])
    const urlAPI = "/search/tv" + props.location.search

    useEffect(() => { load() }, [props.location.search] )

    async function load(){
        try{
            const resposta = await api.get(urlAPI, api_options())
            setSeries(resposta.data.results)
            console.log(props.location)
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