function D_MOVE_CARD_TO_ARCHIVE(action, context) {
    let cardId = action.cardId
    context._state.dataProject[cardId].isArchive = true 
    context._state.dataProject[cardId].complete = false 

    context._callSubscriber(context._state);
}

export default D_MOVE_CARD_TO_ARCHIVE;