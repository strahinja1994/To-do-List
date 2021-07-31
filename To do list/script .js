let li_items = document.querySelectorAll('li');
let task = document.getElementById('task');
let button = document.querySelector('button');
let ul = document.querySelector('ul');

button.addEventListener('click', () => {
    let new_task = task.value;
    let new_li = document.createElement('li');
    new_li.textContent = new_task;
    if (new_task == "" || new_task == null) {
        alert('Write something!')
    }
    else {
        ul.appendChild(new_li);
    }
    task.value = "";

    new_li.addEventListener('click', () => {
        if (new_li.style.textDecoration == "line-through"){
            new_li.style.textDecoration = "none";
        }
        else{
            new_li.style.textDecoration = "line-through";
        }
    });
});

li_items.forEach(li => {
    li.addEventListener('click', () => {
        if (li.style.textDecoration == "line-through"){
            li.style.textDecoration = "none";
        }
        else{
            li.style.textDecoration = "line-through";
        }
    });
});
