import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './MainScreen.module.css'
import {moveCardToArchive, deleteCardProject,  moveCardToDone} from './../../redux/state'

const MainScreen = (props) => {

    let moveToArchive = (e) => {
        e.preventDefault();
        let cardID = e.currentTarget.closest('.cardLi').id;
        props.dispatch( moveCardToArchive( cardID ) )
    }

    let deleteCard = (e) => {
        e.preventDefault();
        let cardID = e.currentTarget.closest('.cardLi').id;
        props.dispatch( deleteCardProject( cardID ) )
    }

    let moveToDone = (e) => {
        e.preventDefault();
        console.log(1);
        let cardID = e.currentTarget.closest('.cardLi').id;
        props.dispatch( moveCardToDone( cardID ) )
    }

    let liData = props.data.map(el => {
        return (<li key={el.id} className="cardLi" id={el.id} >
            <div>
                <NavLink to={"/" + el.id}>{el.title}</NavLink>

                <button onClick={moveToDone}>
                    {/* кнопка сделано */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#3c72ff" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" /></svg>
                </button>
               
                <button>
                    {/* кнопка редактрировать */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#3c72ff" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z" /></svg>
                </button>


                <button onClick={moveToArchive}>
                    {/* Кнопка в архив */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#3c72ff" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z" /></svg>
                </button>

                <button onClick={deleteCard}>
                    {/* удалить */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 448 512"><path fill="#3c72ff" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" /></svg>
                </button>
            </div>
        </li>)
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