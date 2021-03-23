import React from 'react'
import AddTask from './../AddTask/AddTask'
import Sidebar from './../Sidebar/Sidebar'



const TaskPage = (props) => {
    console.log(props);
    let activeTasks = props.taskData.tasks.filter(el => el.complete === "false")
    
    let activeTasksRender = activeTasks.map(el => {
        return (
            <li><label>
                <input type="checkbox"/> {el.text}
            </label></li>
        )
    })

    let doneTasks = props.taskData.tasks.filter(el => el.complete === "true")
    let doneTasksRender = doneTasks.map(el => {
        return (
            <li><label>
                <input type="checkbox" defaultChecked /> {el.text}
            </label></li>
        )
    })

    return (
        <div>

            <Sidebar data={props.data.filter(el => !el.complete)} />
            
            <div>
                <h2>{props.taskData.title}</h2>
                <p>Описание: {props.taskData.descr}</p>
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