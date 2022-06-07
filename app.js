
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

    //Clear input
    taskInput.value = '';
    

    e.preventDefault();
}
//Remove Task
function removeTask(e){

    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you Soure')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

//Cleat Task
function clearTasks(){
    taskList.innerHTML = '';

}

//Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
    });
    
}