import React from 'react';
import {updateNewProjectText, addNewProject, addInputTasks} from './../../redux/state'
import { NavLink } from 'react-router-dom'

const Create = (props) => {

    let title = props.newTaskData.title;
    let descr = props.newTaskData.descr;

    let inputChangeHandler = (e) => {
        let text = e.target.value;
        let elName = e.target.name;
        let indexInput = '';
        if(elName.indexOf('task_') > -1) {
           indexInput =  elName.slice(5)
        }
        props.dispatch( updateNewProjectText(text, elName, indexInput) )
    }

    let addProject = (e) => {
        e.preventDefault();
        props.dispatch( addNewProject() )
    }

    let addTasks = (e) => {
        e.preventDefault();
        props.dispatch( addInputTasks() )
        
    }

    let tasksInputs = props.newTaskData.tasks.map((el, index)=> <input key={index} type="text" onChange={inputChangeHandler} value={ el.text } placeholder="Задача" name={"task_" + index}/>)

    return (
        <div>
              <NavLink to={"/"}>Посмотреть</NavLink>
            <h3>Создать проект</h3>
            <form>
                <input type="text" onChange={inputChangeHandler} value={ title } placeholder="Название проекта" name="title" required/>
                <input type="text" onChange={inputChangeHandler} value={ descr } placeholder="Описание" name="descr" required/>
                {tasksInputs}


                <button onClick={addTasks}>Добавить задачи</button>
                <button onClick={addProject}>Добавить проект</button>
            </form>
        </div>
    )
}

export default Create;