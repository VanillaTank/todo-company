import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './MainScreen.module.css'
import CardProject from '../CardProject/CardProject'

const MainScreen = (props) => {

    let liData = props.data.map(el => {
        return (
            <li key={el.id} className="cardLi" id={el.id}>
                 <CardProject el={el} dispatch={props.dispatch} whoCall={'MainScreen'}/>
            </li>
        )
    })

    return (
        <div className={style.background}>
            <div className={style.container}>
                <h2 className={style.title}>Список актуальных задач</h2>
                <div className={style.__projectlist}>
                    <div className={style.__projectlist__inner}>
                        <ul className={style.__projectlist__projects}>{liData}</ul>
                    </div>
                </div>
                <div className={style.__buttonslinks}>
                    <NavLink className={style.__button_link} to="/create">Создать проект</NavLink>
                    <NavLink className={style.__button_link} to="/archive">Архив</NavLink>
                    <NavLink className={style.__button_link} to="/done-projects">Законченные</NavLink>
                </div>
            </div>
        </div>
    )
}

export default MainScreen;