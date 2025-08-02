let taskCount = 0;
let tasks = document.querySelectorAll("task");
tasks.forEach(() => {
    taskCount++;
});

Add();

function Add() {
    taskCount++;
    let newTask = document.createElement("li");
    newTask.className = `task task${taskCount}`;
    newTask.innerHTML = `<input type="text" placeholder="New Task is..." autofocus autocorrect="on"><button type="button" class="done" onclick="Done('task${taskCount}')">✅</button><button type="button" class="cancle" onclick="Cancle('task${taskCount}')">❌</button>`;
    document.querySelector("ul").appendChild(newTask);
}

function Done(taskClass) {
    let newTask = document.querySelector(`.${taskClass}`);
    let textInput = newTask.querySelector("input").value;
    newTask.innerHTML = `<p>Task ${taskCount}: ${textInput}</p> <button type="button" class="buttonDel"><img src="/To learn/To-Do/TrashIcon.svg" alt="Delete Task" onclick="Delete('task${taskCount}')" ></button>`;
    document.querySelector("ul").appendChild(newTask);
}

function Cancle(taskClass) {
    taskCount--;
    document.querySelector(`.${taskClass}`).remove();
}

function Delete(taskClass) {
    taskCount--;
    document.querySelector(`.${taskClass}`).remove();

}
