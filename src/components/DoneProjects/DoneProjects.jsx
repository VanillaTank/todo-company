import React from 'react'
import { NavLink } from 'react-router-dom'
import {moveCardToArchive, deleteCardProject, moveInNotDone} from '../../redux/state'

const DoneProjects = (props) => {

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

    let moveToActive = (e) => {
        e.preventDefault();
        let cardID = e.currentTarget.closest('.cardLi').id;
        props.dispatch( moveInNotDone( cardID ) )
    }

    let liData = props.doneProjects.map(el => {
        return (<li key={el.id} id={el.id} className="cardLi">
            <div>
                <NavLink to={"/" + el.id}>{el.title}</NavLink>
                <button onClick={moveToActive}>Не сделано</button>
                <button>редактировать</button>
                <button onClick={moveToArchive}>в архив</button>                
                <button onClick={deleteCard}>удалить</button>
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