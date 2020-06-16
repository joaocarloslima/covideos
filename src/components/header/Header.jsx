import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import "./Header.css"

function Header(props){

    const [search, setSearch] = useState("");

    function buscar(e){
        e.preventDefault()
        props.history.push("/busca?query=" + search)
    }

    return(
        <div className="Header">
            <div className="Logo">COVIDEOS</div>
            <form onSubmit={ buscar }>
                <input 
                    type="text" 
                    name="query" 
                    id="query" 
                    onChange={ e => setSearch(e.target.value) }
                />
                <button type="submit">procurar</button>
            </form>
        </div>
    )
}

export default withRouter(Header)

