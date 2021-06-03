const mockData = {
    dataProject: [
        {
            id: 0,
            title: "Создание своего таскера",
            descr: "Мне нужен тренировочный проект по реакту и менеджер задач под мои вкусы. К-комбо!",
            tasks: [
                { text: "Создать основу приложения", complete: "true", id: 1 },
                { text: "Расписать роуты", complete: "true", id: 2 },
                { text: "Более-менее застилисть то, что есть", complete: "false", id: 3 },
                { text: "Прописать добавление задач", complete: "false", id: 4 },
                { text: "Законнектить с базой данных", complete: "false", id: 5 }
            ],
            complete: false,
            isArchive: false
        },
        {
            id: 1,
            title: "Дело из архива",
            descr: "Деловое дело, чтобы делать дело",
            tasks: [
                { text: "часть дела 1", complete: "true", id: 1 },
                { text: "часть дела 2", complete: "true", id: 2 },
                { text: "часть дела 3", complete: "true", id: 3 }
            ],
            complete: false,
            isArchive: true
        },
        {
            id: 2,
            title: "Дело номер 3",
            descr: "Деловое дело, чтобы делать дело",
            tasks: [
                { text: "часть дела 1", complete: "false", id: 1 },
                { text: "часть дела 2", complete: "true", id: 2 },
                { text: "часть дела 3", complete: "false", id: 3 }
            ],
            complete: false,
            isArchive: false
        }, 
        {
            id: 3,
            title: "Сделанное дело",
            descr: "Деловое дело, чтобы делать дело",
            tasks: [
                { text: "часть дела 1", complete: "false", id: 1 },
                { text: "часть дела 2", complete: "true", id: 2 },
                { text: "часть дела 3", complete: "false", id: 3 }
            ],
            complete: true,
            isArchive: false
        }
    ],

    // не замена не удалять!!!
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
    // не замена не удалять до сюда!!!
}

export default mockData;