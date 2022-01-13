//todo-control
//header-input
//todo-list
//todo-completed

const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')

const toDoData = [
    {
        text: 'Сварить кофе',
        completed: false
    },
    {
        text: 'Помыть посуду',
        completed: true
    }
]

const render = function () {
    console.log(toDoData);
}

todoControl.addEventListener('submit', function (event) {
    event.preventDefault()
    
    const newToDo = {
        text: headerInput.value,
        completed: false
    }

    toDoData.push(newToDo)
    //очистить input
    headerInput.value = ''

    render()
})