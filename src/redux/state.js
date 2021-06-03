import actions from "./actions.js"
import mockData from "./mockData.js"
import D_UPDATE_NEW_PROJECT_TEXT from "./dispatches/UPDATE_NEW_PROJECT_TEXT.js"
import D_ADD_NEW_PROJECT from "./dispatches/ADD_NEW_PROJECT.js"
import D_ADD_INPUT_TASKS from "./dispatches/ADD_INPUT_TASKS.js"
import D_MOVE_CARD_TO_ARCHIVE from "./dispatches/D_MOVE_CARD_TO_ARCHIVE.js"
import D_MOVE_CARD_TO_INPROCASS from "./dispatches/D_MOVE_CARD_TO_INPROCASS.js"



let store = {
    _state: mockData,

    _callSubscriber() {
        console.log("State was changed...");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //главное не писать тут let или const
    },

    dispatch(action) {
        if (action.type === actions.UPDATE_NEW_PROJECT_TEXT) { D_UPDATE_NEW_PROJECT_TEXT(action, this) }
        else if (action.type === actions.ADD_NEW_PROJECT) { D_ADD_NEW_PROJECT(this) }
        else if (action.type === actions.ADD_INPUT_TASKS) { D_ADD_INPUT_TASKS(this) }
        else if (action.type === actions.MOVE_CARD_TO_ARCHIVE) {D_MOVE_CARD_TO_ARCHIVE(action, this)}
        else if (action.type === actions.MOVE_CARD_TO_INPROCASS) {D_MOVE_CARD_TO_INPROCASS(action, this)}
        else console.log("Нет совспадения по action")
    }
}

export let updateNewProjectText = (text, elName, index) => ({ type: actions.UPDATE_NEW_PROJECT_TEXT, text: text, el: elName, index: index });
export let addNewProject = () => ({ type: actions.ADD_NEW_PROJECT });
export let addInputTasks = () => ({ type: actions.ADD_INPUT_TASKS });
export let moveCardToArchive = (cardID) => ({type: actions.MOVE_CARD_TO_ARCHIVE, cardId: cardID });
export let moveCardToInProcess = (cardID) => ({type: actions.MOVE_CARD_TO_INPROCASS, cardId: cardID });


export default store;