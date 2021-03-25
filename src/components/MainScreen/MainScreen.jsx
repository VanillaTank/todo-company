import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './MainScreen.module.css'


const MainScreen = (props) => {

    let liData = props.data.map(el => {
        return (<li>
            <div>
                <NavLink to={"/" + el.id}>{el.title}</NavLink>
                <button>сделано</button>
                <button>редактировать</button>
                <button>удалить</button>
                <button>в архив</button>
            </div>
        </li>)
    })

    return (
        <div className={style.container}>
            <h2 className={style.title}>Список актуальных задач</h2>
            <div className={style.ul_inner}>
                <ul className={style.tasks}>{liData}</ul>
            </div>
            <NavLink to="/create">Создать проект</NavLink>
            <NavLink to="/done-projects">Законченные</NavLink>
        </div>
    )
}

export default MainScreen;