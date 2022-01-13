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
    toDoData.forEach(function(item) {
        //todo-item
        const li = document.createElement('li')

        li.classList.add('todo-item')

        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +

        '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
		'</div>'

        console.log(li);
    })
}
//каждое значение дела

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