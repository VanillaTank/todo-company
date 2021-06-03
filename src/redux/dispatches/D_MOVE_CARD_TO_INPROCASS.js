function MOVE_CARD_TO_INPROCASS(action, context) {
    let cardId = Number(action.cardId)
    for (let i = 0; i < context._state.dataProject.length; i++) {
        if (context._state.dataProject[i].id === cardId) {
            context._state.dataProject[i].isArchive = false
            context._state.dataProject[i].complete = false
        }
    }

    context._callSubscriber(context._state);
}

export default MOVE_CARD_TO_INPROCASS;