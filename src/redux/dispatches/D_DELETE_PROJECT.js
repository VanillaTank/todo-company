function D_DELETE_PROJECT(action, context) {
    let cardId = Number(action.cardId)
    for (let i = 0; i < context._state.dataProject.length; i++) {
        if (context._state.dataProject[i].id === cardId) {
            let index = context._state.dataProject.indexOf(context._state.dataProject[i])
            context._state.dataProject.splice(index, 1);
        }

    }
    context._callSubscriber(context._state);
}

export default D_DELETE_PROJECT;