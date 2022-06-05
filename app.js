// document.getElementById();

// console.log(document.getElementById('task-title'));

// Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

// let val;

// val = document.scripts[2];

// console.log(document);


const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');




document.querySelector('.clear-tasks').addEventListener('click', function(e){
    console.log('Hello World');
    e.preventDefault();
});

const card = document.querySelector('.card');
const heading = document.querySelector('h5');

card.addEventListener('mousemove', runEvent);

function runEvent(e){

    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
    card.style.background = `rgb(${e.offsetY}, ${e.offsetX}, 60)`;
    liOdd.forEach(function(li, index){
        li.style.background = `rgb(${e.offsetY}, ${e.offsetX}, ${e.offsetY + e.offsetX})`;
    })
    
    liEven.forEach(function(li, index){
        li.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 80)`;
    })
}

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// taskInput.value = '';


// taskInput.addEventListener('keydown', runEvent2);
// function runEvent2(e){
//     console.log(`Event Type: ${e.type}`);
//     console.log(taskInput.value);

//     heading.innerText =  e.target.value;

//     e.preventDefault();
// }


// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//     if(e.target.parentElement.classList.contains('delete-item')){
    
//         e.target.parentElement.parentElement.remove();

//     }
// }



document.querySelector('form').addEventListener('submit', function(e){

    const task = document.getElementById('task').value;
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task Saved');

    e.preventDefault();
});