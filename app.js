
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all EventListener
loadEventListeners();

// Load all event listenera
function loadEventListeners(){
    //Add task event
    form.addEventListener('submit', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
    //Filter tasks event
    filter.addEventListener('keyup', filterTasks);
    //DOM load Event
    document.addEventListener('DOMContentLoaded', getTasks);
}


//Get tasks from LOCAL STORAGE
function getTasks(){

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];

    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
            
        //Create li Elemet
        const li = document.createElement('li');
        //Add Class
        li.className = 'collection-item';
        //Create a text node and append to li
        li.appendChild(document.createTextNode(task));

        //Create a new link elemet
        const link = document.createElement('a');
        //Add class
        link.className = 'delete-item secondery-content';
        //Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //Append the link to li
        li.appendChild(link);
        
        //Append li to ul
        taskList.appendChild(li);

    });
}

// Add Task
function addTask(e){

    if(taskInput.value === ''){
        alert('Add a task');
    }


    //Create li Elemet
    const li = document.createElement('li');
    //Add Class
    li.className = 'collection-item';
    //Create a text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    //Create a new link elemet
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondery-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);
    
    //Append li to ul
    taskList.appendChild(li);

    //Storage in Local Storage
    storeTaskInLocakStorage(taskInput.value);

    //Clear input
    taskInput.value = '';
    

    e.preventDefault();
}


// Store Task
function storeTaskInLocakStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];

    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Task
function removeTask(e){

    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you Soure')){
            e.target.parentElement.parentElement.remove();

            //Remove form Local Storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

//Remove frrom Local Storage
function removeTaskFromLocalStorage(taskItem){
    console.log(taskItem);
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];

    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });
}

//Cleat Task
function clearTasks(){
    taskList.innerHTML = '';
    // clear from Local Storage
    clearTasksFromLocalStorage();

}


//clear Tasks from Local Storage
function clearTasksFromLocalStorage(){
    localStorage.clear();

}

//Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
    
}