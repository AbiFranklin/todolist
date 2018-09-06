document.addEventListener("DOMContentLoaded", function(event){

let addBtn = document.querySelector('.btn');

function addToDoItem() {
    const toDoItem = document.createElement('div');
    toDoItem.className = "toDoItem";
    const checkBox = document.createElement('i');
    checkBox.className = "far fa-circle check";
    const closeBtn = document.createElement('div');
    closeBtn.className = "close fas fa-times";
    const itemText = document.createElement('span');
    const input = document.querySelector(".toDo").value;
    itemText.appendChild(document.createTextNode(input));
    toDoItem.appendChild(checkBox);
    toDoItem.appendChild(itemText);
    toDoItem.appendChild(closeBtn);
    document.querySelector('.container').appendChild(toDoItem);
    document.querySelector('.toDo').value = "";
    let items = document.querySelectorAll('.toDoItem');
    items = Array.from(items).map(item => new ToDoItem(item));
};
    
addBtn.addEventListener('click', addToDoItem);
document.addEventListener('keydown', function(event) {
    if (event.which === 13){    
        event.preventDefault();
        addToDoItem();
    }
})


class ToDoItem {
    constructor(item) {
        this.item = item;
        this.check = item.querySelector(".check");
        this.closeButton = item.querySelector(".close");
        this.check.addEventListener('click', this.checkItem);
        this.closeButton.addEventListener('click', this.deleteItem);
    }

    checkItem(event) {
        if (event.currentTarget.classList.contains('fa-circle')) {
            event.currentTarget.classList.replace('fa-circle', 'fa-times-circle');
            event.currentTarget.parentNode.querySelector('span').style.textDecoration = "line-through";
        } else {
            event.currentTarget.classList.replace('fa-times-circle', 'fa-circle');
            event.currentTarget.parentNode.querySelector('span').style.textDecoration = "none";
        }
    }

    deleteItem(event) {
        TweenMax.to(event.currentTarget.parentNode, .3, {opacity: 0, display: "none"});
    }
}



});