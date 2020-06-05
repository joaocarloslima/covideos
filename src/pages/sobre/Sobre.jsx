import React, { Fragment } from 'react'

import "./style.css"
import Tab from '../../components/tab/Tab';

export default function Sobre() {
    return (
        <Fragment>
            <div className="tabs">
                <Tab text="Lançamentos" target="lancamentos" />
                <Tab text="Sobre" target="sobre" />
            </div>
            <div className="content">
                <h1 className="title">Seu App de Séries</h1>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere beatae et perferendis dolore, vitae deserunt harum sapiente incidunt aliquid ducimus placeat reiciendis voluptatibus, in dignissimos laborum pariatur, consequuntur nihil aliquam?</p>
            </div>
        </Fragment>
    );
}