function MOVE_CARD_TO_INPROCASS(action, context) {
    let cardId = action.cardId
    context._state.dataProject[cardId].isArchive = false 
    context._state.dataProject[cardId].complete = false 

    context._callSubscriber(context._state);
}

export default MOVE_CARD_TO_INPROCASS;