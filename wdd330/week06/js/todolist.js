import { TaskHandler } from "./ls.js";

// local storage handling class
const taskHandler = new TaskHandler();
const addBtn = document.querySelector(".addTaskBtn");
const status = document.getElementById("status");
var taskList = taskHandler.filterList();

window.addEventListener("load", (event) => { 
    console.log("document loaded");
    //taskHandler.clear();
    displayAllTasks(taskList);
})

addBtn.addEventListener("click", (event) => {
    console.log(event)
    addTask();
})

status.addEventListener("click", (event) => {
    console.log(event)
    updateFilters(event);
})

function displayAllTasks(taskList) {
    resetTaskTable();
    if(taskList.length > 0){
        console.log(taskList);
        for(var i =0; i < taskList.length; i++){
            var taskContainer = document.createElement("div");
            var statusClass = '';
            var checked = '';
            var contentComplete = '';

            if(taskList[i].completed){
                statusClass = 'complete';
                checked = 'checked';
                contentComplete = 'class="strike"';
            }
    
            taskContainer.innerHTML = "<input "+checked+" type='checkbox' class='completeTaskBtn "+statusClass+"'>"+
                                      "<p "+contentComplete+">"+taskList[i].content+"</p>"+
                                      "<button class='removeTaskBtn'>X</button>"+
                                      "<p class='date'>"+taskList[i].id+"</p>";
            
            var parentContainer = document.getElementById("todolist");
            parentContainer.appendChild(taskContainer);
        }  
    }
    updateCount();
    
    const remBtn = document.querySelectorAll(".removeTaskBtn");
    const comBtn = document.querySelectorAll(".completeTaskBtn");
    for(var i=0;i<remBtn.length;i++){
        remBtn[i].addEventListener("click", (event) => {
            removeTask(event);
        });

        comBtn[i].addEventListener("click", (event) => {
            if(event.target.attributes[0].name == "checked"){
                uncompleteTask(event);
            }else {
                completeTask(event);
            }
        });
    }
}

function resetTaskTable(){
    document.getElementById("todolist").innerHTML = '';
}

function addTask(){
    const task = document.querySelector(".newTask");
    if(task.value == "" || task.value == null || typeof(task.value) == "undefined"){
        return
    }
    
    //Create object from given task
    const taskObject = {
        id: new Date().getTime(),
        content: task.value,
        completed: false,
    }

    console.log(taskObject);
    //Save object to local storage
    taskList = taskHandler.saveTask(taskObject);
    task.value = '';
    displayAllTasks(taskList);
}

function removeTask(event){
    const taskId = event.target.nextSibling.childNodes[0].data;
    taskList = taskHandler.removeTask(taskId);
    displayAllTasks(taskList);
}

function completeTask(event){
    const taskId = event.target.nextSibling.nextSibling.nextSibling.childNodes[0].data;
    taskList = taskHandler.completeTask(taskId);
    displayAllTasks(taskList);
}

function uncompleteTask(event){
    const taskId = event.target.nextSibling.nextSibling.nextSibling.childNodes[0].data;
    taskList = taskHandler.uncompleteTask(taskId);
    displayAllTasks(taskList);
}

function updateCount() {
    const taskCount = taskHandler.countList();
    var count;

    if (taskCount == 1) {
        count = taskCount+" task left";
    } else {
        count = taskCount+" tasks left";
    }
    document.querySelector(".count").textContent = count;
}

function updateFilters(event) {
    if(event.target.tagName == "P"){
        for(var i=1; i<status.childNodes.length; i+=2){
            status.childNodes[i].className = ''
        }
        event.target.className = "active";
        taskList = taskHandler.filterList(event.target.childNodes[0].data);
        displayAllTasks(taskList);
    }
}


