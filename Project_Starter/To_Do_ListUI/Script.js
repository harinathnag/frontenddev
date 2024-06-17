
const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUL = document.getElementById('todo')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addToDo(todo))

}


form.addEventListener('submit', (e) => {
    e.preventDefault(todo => addToDo(todo))

    addToDo()
})

function addToDo(todo) {
    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEL = document.createElement('li')
        if(todo && todo.completed) {
            todoEL.classList.add('completed')
        }
        todoEL.innerText = todoText
        todoEL.addEventListener('click', () => todoEL.classList.toggle('completed'))
        todoEL.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEL.remove()
        })

        todoEL.appendChild(todoEL)

        input.value = ''

        updateLS()
    }
}

    function updateLS() {

        todoEL = document.querySelectorAll('li')

        const todos = []

        todoEL.forEach(todoEL => {
            todos.push({
                text: todoEL.innerText, 
                completed: todoEL.classList.contains('completed')
            })
        })

        localStorage.setItem('todos', JSON.stringify(todos))
    }

