import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = (props) => {
    let sidebarLi = props.data.map(el => {
        return (
            <li key={el.id}><NavLink to={"/" + el.id}>{el.title}</NavLink></li>
        )
    })

    return (
        <div>
            <ul>{sidebarLi}</ul>
            <NavLink to="/archive">Архив проектов</NavLink>
            <NavLink to="/done-projects">Законченные</NavLink>
            <NavLink to="/create">Добавить новый проект</NavLink>
        </div>
    )
}

export default Sidebar;