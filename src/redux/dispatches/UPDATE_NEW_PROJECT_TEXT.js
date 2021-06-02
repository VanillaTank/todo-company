function D_UPDATE_NEW_PROJECT_TEXT (action, context) {
    let text = action.text;
    let index = action.index;
    switch (action.el) {
        case "title": context._state.newTaskData.title = text; break;
        case "descr": context._state.newTaskData.descr = text; break;
        case "task_0": context._state.newTaskData.tasks[0].text = text; break;
        case "task_1": context._state.newTaskData.tasks[1].text = text; break;
        case "task_2": context._state.newTaskData.tasks[2].text = text; break;
        case "task_" + index: context._state.newTaskData.tasks[index].text = text; break;

        default: console.log("Нет совпадений по свичу");
    }
    context._callSubscriber(context._state);
}

export default D_UPDATE_NEW_PROJECT_TEXT;