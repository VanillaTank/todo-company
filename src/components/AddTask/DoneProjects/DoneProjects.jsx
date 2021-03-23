import React from 'react'
import { NavLink } from 'react-router-dom'


const DoneProjects = (props) => {

    let liData = props.doneProjects.map(el => {
        return (<li>
            <div>
                <NavLink to={"/" + el.id}>{el.title}</NavLink>
                <button>Не сделано</button>
                <button>редактировать</button>
                <button>удалить</button>
                <button>в архив</button>
            </div>
        </li> )
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