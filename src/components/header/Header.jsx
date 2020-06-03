import React from 'react'

import "./Header.css"

export default function Header(props){
    return(
        <div className="Header">
            <div className="Logo">COVIDEOS</div>
            <input type="text" name="search" id="search"/>
        </div>
    )
}

