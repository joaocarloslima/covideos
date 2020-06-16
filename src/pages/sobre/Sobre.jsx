import React, { Fragment } from 'react'

import "./style.css"
import Tab from '../../components/tab/Tab';

export default function Sobre() {
    return (
        <Fragment>
            <div className="tabs">
                <Tab text="Lançamentos" target="lancamentos" />
                <Tab text="Busca" target="busca" />
                <Tab text="Sobre" target="sobre" />
            </div>
            <div className="content">
                <h1 className="title">Seu App de Séries</h1>
                <p className="description">Covideos permite que você busque suas séries preferidas e marque como favorita. Além disso você pode ver os últimos lançamentos e as séries com melhores avaliações.</p>
            </div>
        </Fragment>
    );
}