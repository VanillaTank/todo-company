function D_MOVE_TO_DONE(action, context) {
    let cardId = Number(action.cardId)
    for (let i = 0; i < context._state.dataProject.length; i++) {
        if (context._state.dataProject[i].id === cardId) {
            context._state.dataProject[i].isArchive = false
            context._state.dataProject[i].complete = true
        }
    }
    context._callSubscriber(context._state);
}

export default D_MOVE_TO_DONE