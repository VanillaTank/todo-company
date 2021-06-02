function D_ADD_INPUT_TASKS(context) {
    context._state.newTaskData.tasks.push({ text: "" })
    context._callSubscriber(context._state);
}

export default D_ADD_INPUT_TASKS;