import React from 'react'
import { moveCardToInProcess, deleteCardProject, moveCardToDone, moveCardToArchive, moveInNotDone } from './../../redux/state'
import { NavLink } from 'react-router-dom'

const CardProject = (props) => {
let button1, button2;

    let moveToInProcess = (e) => {
        e.preventDefault();
        let cardID = e.currentTarget.closest('.cardLi').id;
        props.dispatch(moveCardToInProcess(cardID))
    }

    let deleteCard = (e) => {
        e.preventDefault();
        let cardID = e.currentTarget.closest('.cardLi').id;
        props.dispatch(deleteCardProject(cardID))
    }

    let moveToDone = (e) => {
        e.preventDefault();
        let cardID = e.currentTarget.closest('.cardLi').id;
        props.dispatch(moveCardToDone(cardID))
    }

    let moveToArchive = (e) => {
        e.preventDefault();
        let cardID = e.currentTarget.closest('.cardLi').id;
        props.dispatch(moveCardToArchive(cardID))
    }

    let moveCardInNotDone = (e) => {
        e.preventDefault();
        let cardID = e.currentTarget.closest('.cardLi').id;
        props.dispatch(moveInNotDone(cardID))
    }

    if (props.whoCall === 'archive') {
        button1 = <button onClick={moveToDone}>
            {/* кнопка подтвердить */}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#3c72ff" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" /></svg>
        </button>

        button2 = <button onClick={moveToInProcess}>
            {/* в актуальные */}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#3c72ff" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z" /></svg>
        </button>
    }

    if (props.whoCall === 'MainScreen') {
        button1 = <button onClick={moveToDone}>
            {/* кнопка подтвердить */}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#3c72ff" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" /></svg>
        </button>

        button2 = <button onClick={moveToArchive}>
            {/* в актуальные */}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#3c72ff" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z" /></svg>
        </button>
    }

    if(props.whoCall === "DoneProjects") {
        button1 = <button onClick={moveCardInNotDone}>
            {/* кнопка подтвердить */}
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#3c72ff" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" /></svg>
        </button>

        button2 = <button onClick={moveToArchive }>
        {/* в арихив */}
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path fill="#3c72ff" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z" /></svg>
    </button>
    }

    return (
        <NavLink to={"/" + props.el.id}>
            <h3>{props.el.title}</h3>
            {button1}
            {button2}

            <button onClick={deleteCard}>
                {/* удалить */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 448 512"><path fill="#3c72ff" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" /></svg>
            </button>
        </NavLink>
    )
}
export default CardProject;