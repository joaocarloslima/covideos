import React, { Fragment } from 'react'

import CardSerie from "../../components/cardSerie/CardSerie"
import Tab from '../../components/tab/Tab';

export default function Lancamentos() {

    return (
        <Fragment>
            <div className="tabs">
                <Tab text="Lançamentos" target="lancamentos" />
                <Tab text="Sobre" target="sobre" />
            </div>
            <div className="content">
                <CardSerie />
                <CardSerie />
                <CardSerie />
                <CardSerie />
            </div>
        </Fragment>
    );

}