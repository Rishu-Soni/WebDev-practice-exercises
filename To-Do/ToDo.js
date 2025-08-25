let inputCount = 0;
let taskCount = 0;
let storedTask = null;

// to add at least one task on page load
for (let i = 1; i <= localStorage.length; i++) {

    storedTask = localStorage.getItem(localStorage.key(i - 1));
    if (!storedTask) continue;
    let list = document.createElement("li");
    list.className = `task${i}`;
    storedTask = storedTask.slice(storedTask.indexOf(`:`));
    console.log(storedTask)
    list.innerHTML = `<p>Task ${i}` + storedTask;
    document.querySelector("ul").appendChild(list);
    taskCount =localStorage.length;
}
Add();

function Remove() {
    localStorage.clear();
    document.querySelector("ul").innerHTML = "";
    inputCount = 0;
    Add();
    console.log("All tasks cleared");
}

//to add a input field to add a new task
function Add() {
    let newTask = document.createElement("li");
    newTask.className = `input`;
    newTask.innerHTML = `<input type="text" placeholder="New Task is..." autofocus autocorrect="on"><button type="button" class="done"><img src="correct.svg" alt="" class="sidebuttons" ></button><button type="button" class="cancle"><img src="cross.svg" alt="" class="sidebuttons" ></button>`;
    document.querySelector("ul").appendChild(newTask);
}

addEventListener("click", (event) => {
    let newTask;

    if (event.target.classList.contains("cancle")) {
        event.target.parentElement.remove();
    }
    else if (event.target.parentElement.classList.contains("cancle")) {
        event.target.parentElement.parentElement.remove();
    }

    else if (event.target.classList.contains("buttonDel")) {
        event.target.parentElement.remove();
        let keytoremove = event.target.parentElement.classList;
        localStorage.removeItem(keytoremove);
    }
    else if (event.target.parentElement.classList.contains("buttonDel")) {
        event.target.parentElement.parentElement.remove();
        let keytoremove = event.target.parentElement.parentElement.classList;
        localStorage.removeItem(keytoremove);
    }

    else if (event.target.classList.contains("done")) {
        newTask = event.target.parentElement;
    }
    else if (event.target.parentElement.classList.contains("done")) {
        newTask = event.target.parentElement.parentElement;
    }
    if (!newTask) return; {
        taskCount++;
        newTask.className = `task${taskCount}`;
        let textInput = newTask.querySelector("input").value;
        newTask.innerHTML = `<p>Task ${taskCount}: ${textInput}</p> <button type="button" class="buttonDel"><img src="TrashIcon.svg" alt="Delete Task"  ></button>`;
        localStorage.setItem(`task${taskCount}`, `<p>Task ${taskCount}: ${textInput}</p> <button type="button" class="buttonDel"><img src="TrashIcon.svg" alt="Delete Task"  ></button>`);
        document.querySelector("ul").appendChild(newTask);
    }

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(key, value);
    }

});