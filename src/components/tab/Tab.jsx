import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Tab.css"

export default function Tab(props){
    return(
        <NavLink to={props.target} className="TabLink">
            {props.text}
        </NavLink>
    )
}