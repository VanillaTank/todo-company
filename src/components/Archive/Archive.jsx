import React from 'react'
import style from './Archive.module.css'
import CardProject from '../CardProject/CardProject'


const Archive = (props) => {
    let archiveListItems = "Тут будет список не заврешенных дел, которые хочется сохранить, но не делать сейчас"

    if (props.archivProjects.length !== 0) {
        archiveListItems = props.archivProjects.map(el => {
            return (
                <li key={el.id} className="cardLi" id={el.id}>
                    <CardProject el={el} dispatch={props.dispatch} whoCall={'archive'} />
                </li>
            )
        })
    }

    return (
        <div>
            <ul className={style.__projectlist__projects}>{archiveListItems}</ul>
        </div>
    )
}
export default Archive;