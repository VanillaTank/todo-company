const UPDATE_NEW_PROJECT_TEXT = "UPDATE_NEW_PROJECT_TEXT"
const ADD_NEW_PROJECT = "ADD_NEW_PROJECT";
const ADD_INPUT_TASKS = "ADD_INPUT_TASKS";

let store = {
    _state: {
        dataProject: [
            {
                id: 1,
                title: "Создание своего таскера",
                descr: "Мне нужен тренировочный проект по реакту и менеджер задач под мои вкусы. К-комбо!",
                tasks: [
                    { text: "Создать основу приложения", complete: "true" },
                    { text: "Расписать роуты", complete: "true" },
                    { text: "Более-менее застилисть то, что есть", complete: "false" },
                    { text: "Прописать добавление задач", complete: "false" },
                    { text: "Законнектить с базой данных", complete: "false" }
                ],
                complete: false
            },
            {
                id: 2,
                title: "Дело номер 2",
                descr: "Деловое дело, чтобы делать дело",
                tasks: [
                    { text: "часть дела 1", complete: "true" },
                    { text: "часть дела 2", complete: "true" },
                    { text: "часть дела 3", complete: "true" }
                ],
                complete: true
            },
            {
                id: 3,
                title: "Дело номер 3",
                descr: "Деловое дело, чтобы делать дело",
                tasks: [
                    { text: "часть дела 1", complete: "false" },
                    { text: "часть дела 2", complete: "true" },
                    { text: "часть дела 3", complete: "false" }
                ],
                complete: false
            }
        ],
        newTaskData: {
            title: '',
            descr: '',
            tasks: [
                { text: '' },
                { text: '' },
                { text: '' }
            ],
            complete: false
        }
    },
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
        if (action.type === UPDATE_NEW_PROJECT_TEXT) {
            let text = action.text;
            let index = action.index;
            switch (action.el) {
                case "title": this._state.newTaskData.title = text; break;
                case "descr": this._state.newTaskData.descr = text; break;
                case "task_0": this._state.newTaskData.tasks[0].text = text; break;
                case "task_1": this._state.newTaskData.tasks[1].text = text; break;
                case "task_2": this._state.newTaskData.tasks[2].text = text; break;
                case "task_" + index: this._state.newTaskData.tasks[index].text = text; break;

                default: console.log("Нет совпадений по свичу");
            }
            this._callSubscriber(this._state);
        }
        else if (action.type === ADD_NEW_PROJECT) {
            let dataNewProject = this._state.newTaskData;
            dataNewProject.id = Number(this._state.dataProject.length) + 1;

            let arrayTasks = [];
            for (let i = 0; i < this._state.newTaskData.tasks.length; i++) {
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

            this._state.dataProject.push(dataForPush)

            this._callSubscriber(this._state);
            alert("Проект " + dataNewProject.title + " добавлен")
        }
        else if (action.type === ADD_INPUT_TASKS) {

            this._state.newTaskData.tasks.push({ text: "" })
            this._callSubscriber(this._state);
        }
        else console.log("Нет совспадения по action")
    }
}

export let updateNewProjectText = (text, elName, index) => ({ type: UPDATE_NEW_PROJECT_TEXT, text: text, el: elName, index: index })
export let addNewProject = () => ({ type: ADD_NEW_PROJECT })
export let addInputTasks = () => ({ type: ADD_INPUT_TASKS })


export default store;