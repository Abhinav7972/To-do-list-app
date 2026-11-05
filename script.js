let add_task_button = document.querySelector('#add_task_button');
let task_input = document.querySelector('#task_input');
let task_list = document.querySelector('#task-list');


function addTask()
{
//console.log('added task');
let li = document.createElement('li');
li.textContent = task_input.value;
task_list.append(li)

let delete_task_button = document.createElement('button');
delete_task_button.textContent = 'Delete Button';
li.append(delete_task_button);

delete_task_button.addEventListener('click',()=>{li.remove()})


task_input.value='';
task_input.focus();
} 


add_task_button.addEventListener('click',addTask)

