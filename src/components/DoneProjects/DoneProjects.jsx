import React from 'react'
import { NavLink } from 'react-router-dom'
import CardProject from '../CardProject/CardProject'


const DoneProjects = (props) => {

    let liData = props.doneProjects.map(el => {
        return (<li key={el.id} className="cardLi" id={el.id}>
            <CardProject el={el} dispatch={props.dispatch} whoCall={'DoneProjects'} />
        </li>)
    })

    return (
        <div>
            <h2>Список завершенных дел</h2>
            <ul>{liData}</ul>
            <NavLink to="/create">Добавить новый проект</NavLink>
        </div>
    )
}

export default DoneProjects;