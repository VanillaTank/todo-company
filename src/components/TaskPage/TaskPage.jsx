import React from 'react'
import AddTask from './../AddTask/AddTask'
import Sidebar from './../Sidebar/Sidebar'
import style from './TaskPage.module.css'


const TaskPage = (props) => {
    let editTitle = (e) => {
        e.preventDefault();
        let title = e.currentTarget;
        let titleText = title.innerText;
        title.innerHTML = '<input type="text" placeholder="' + titleText + '"/>'
    }

    let editTitleOnBlur = (e) => {
        e.preventDefault();
        let title = e.currentTarget;
        title.innerHTML = title.value;
    }
    
    let editDescription = (e) => {
        e.preventDefault();
        console.log(2);
    }

    let editTextOfTask = (e) => {
        e.preventDefault();
        console.log(3);
        console.log(e.currentTarget);
    }

    let toggleCheckboxTasks = (e) => {
        console.log(4);
    }

    let activeTasks = props.taskData.tasks.filter(el => el.complete === "false")

    let activeTasksRender = activeTasks.map(el => {
        return (
            <li key={el.id} onDoubleClick={editTextOfTask} className={style.taskLi}><label>
                <input type="checkbox" onChange={toggleCheckboxTasks} /> {el.text}
            </label></li>
        )
    })

    let doneTasks = props.taskData.tasks.filter(el => el.complete === "true")
    let doneTasksRender = doneTasks.map(el => {
        return (
            <li key={el.id} onDoubleClick={editTextOfTask} className={style.taskLi}><label>
                <input type="checkbox" defaultChecked onChange={toggleCheckboxTasks} /> {el.text}
            </label></li>
        )
    })

    return (
        <div>

            <Sidebar data={props.data.filter(el => !el.complete)} />

            <div>
                <h2 onDoubleClick={editTitle} onBlur={editTitleOnBlur}>{props.taskData.title}</h2>
                <p>Описание: <span onDoubleClick={editDescription}>{props.taskData.descr}</span> </p>
                <ul>
                    {activeTasksRender}
                    {doneTasksRender}
                </ul>
                <AddTask />
            </div>

        </div>

    )
}

export default TaskPage;