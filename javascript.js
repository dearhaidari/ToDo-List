const headExplain = document.getElementById("headExplain");
const container = document.getElementById("lists-container").contentEditable = "true";
const inputTask = document.querySelector("#inputTask");
const addTask = document.getElementById("addTask");
const todoList = document.getElementById("todo-list");
const removeTask = document.getElementById("removeTask");
const removeAllTask = document.getElementById("removeAllTask");
const explains = document.getElementById("explains");

window.addEventListener("DOMContentLoaded", function () {
    inputTask.focus();
    addToDoApps = new addToDoApp();
})
addTask.addEventListener("click", function () {
    addToDoApps.addTodo();
    addToDoApps.renderToDo();

});

removeTask.addEventListener("click", function () {
    addToDoApps.removeToDo();

})
removeAllTask.addEventListener("click", function () {
    addToDoApps.removeAllTask();
})

explains.addEventListener("click", function () {
    addToDoApps.explainsFunc();
})

class addToDoApp {
    todoItems = [];
    bool = "false";
    clearMyInput() {
        inputTask.value = "";
    }
    addTodo() {
        let inputs = inputTask.value;
        if (inputs.length == 0) {
            alert("Please enter something");
        } else {
            this.todoItems.push({
                id: Date.now(),
                text: inputTask.value,
                checked: "false",
            })

            console.log(this.todoItems);
        }
    }
    renderToDo() {
        if (inputTask.value.length !== 0) {
            let liTag = document.createElement("li");
            let hr = document.createElement("hr");
            let checked = document.createElement("input");
            checked.setAttribute('type', 'checkbox');
            checked.setAttribute('style', ' transform: scale(1.5); padding-left:5px;')
            liTag.textContent = inputTask.value;
            todoList.appendChild(liTag);
            todoList.appendChild(hr);
            liTag.appendChild(checked);
            this.clearMyInput();

        }
    }
    removeToDo() {
        if (todoList.childElementCount == 0) {
            alert("No tasks to be removed");
        } else {
            todoList.removeChild(todoList.lastElementChild);
        }
    }
    removeAllTask() {
        if (todoList.childElementCount == 0) {
            alert("No tasks to be removed");
        } else {
            while (todoList.firstChild) {
                todoList.removeChild(todoList.lastChild);
            }
        }
    }
    explainsFunc() {
        if (this.bool == "false") {
            let explainsOfToDo = document.createElement("h1");
            explainsOfToDo.setAttribute('style', 'font-size: small;color: #00FF0D;margin-right: 5px;float: right;');
            explainsOfToDo.innerHTML = `<span style="color: #00FF0D;padding:5px;">How to use ToDo? <br/> <br/>
            ➤ You can check the options  <br/> <br/>
            ➤  if you have done the job  <br/> <br/>
            ➤  you can click and edit it   <br/> <br/>
            ➤    <br/> <br/>
        </span>`;
            headExplain.appendChild(explainsOfToDo);
            this.bool = "true";
        }
    }

}