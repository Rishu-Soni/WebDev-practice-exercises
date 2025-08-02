let taskCount = 0;
let tasks = document.querySelectorAll("task");
tasks.forEach(() => {
    taskCount++;
});

// to add at least one task on page load
Add();

//to add a input field to add a new task
function Add() {
    taskCount++;
    let newTask = document.createElement("li");
    newTask.className = `task task${taskCount}`;
    newTask.innerHTML = `<input type="text" placeholder="New Task is..." autofocus autocorrect="on"><button type="button" class="done" onclick="Done('task${taskCount}')"><img src="/To learn/To-Do/correct.svg" alt="" class="sidebuttons" ></button><button type="button" class="cancle" onclick="Cancle('task${taskCount}')"><img src="/To learn/To-Do/cross.svg" alt="" class="sidebuttons" ></button>`;
    document.querySelector("ul").appendChild(newTask);
}
// to save the task and remove the input field
function Done(taskClass) {
    let newTask = document.querySelector(`.${taskClass}`);
    let textInput = newTask.querySelector("input").value;
    newTask.innerHTML = `<p>Task ${taskCount}: ${textInput}</p> <button type="button" class="buttonDel"><img src="/To learn/To-Do/TrashIcon.svg" alt="Delete Task" onclick="Delete('task${taskCount}')" ></button>`;
    document.querySelector("ul").appendChild(newTask);
}

// to remove the input field without saving    
function Cancle(taskClass) {
    taskCount--;
    document.querySelector(`.${taskClass}`).remove();
}

// to delete the task
function Delete(taskClass) {
    taskCount--;
    document.querySelector(`.${taskClass}`).remove();

}
