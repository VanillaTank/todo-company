function D_ADD_NEW_PROJECT(context) {
    let dataNewProject = context._state.newTaskData;
    dataNewProject.id = Number(context._state.dataProject.length) + 1;

    let arrayTasks = [];
    for (let i = 0; i < context._state.newTaskData.tasks.length; i++) {
        let obj = { text: dataNewProject.tasks[i].text, complete: "false" }
        arrayTasks.push(obj)
    }

    let dataForPush = {
        id: dataNewProject.id,
        title: dataNewProject.title,
        descr: dataNewProject.descr,
        tasks: arrayTasks,
        complete: false
    }

    context._state.dataProject.push(dataForPush)

    context._callSubscriber(context._state);
    alert("Проект " + dataNewProject.title + " добавлен")
}

export default D_ADD_NEW_PROJECT;