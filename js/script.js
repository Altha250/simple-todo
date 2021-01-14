let button = document.querySelector(".addTodo");
let todosList = document.querySelector(".todos-list");
let todos = document.querySelector(".todos");
let input = document.querySelector(".input");
let todo = document.querySelector(".todo");


button.addEventListener("click", function() {
    // напоминание о том, что нужно ввести название задачи
    if (input.value == "") {
        alert("Введите название задачи!");
    } else {
        // если строка не пустая, то загружаем текст
        // и скрываем фразу "Список пуст..."
        todosList.hidden = true;
        addTodo();
    }
    // очистка input
    input.value = "";
});


// добавление нового дела
function addTodo() {
    let li = document.createElement("li");
    li.className = "createTodo";
    li.textContent = input.value;
    todos.append(li);
}

// смена состояния дела: сделано / не сделано
todos.addEventListener("click", function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle("completedTodo");
    }
}, false);

