export type PageType = {
    heading: string
    about: string
}

export type DataStateType = {
    pages: PageType[]
}


export const dataState: DataStateType = {
    pages:
        [
            {
                heading: 'Цикл while',
                about: 'Цикл while имеет следующий синтаксис: '
            },
            {
                heading: 'Цикл for',
                about: 'Цикл for имеет следующий синтаксис: '
            },
            {
                heading: 'Конструкция "switch"',
                about: 'Конструкция switch заменяет собой сразу несколько if. '
            }
        ]
}