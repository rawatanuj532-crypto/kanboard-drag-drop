const todo = document.querySelector("#todo");
const done = document.querySelector("#done");
const progress = document.querySelector("#progress");

const tasks = document.querySelectorAll(".task");

let dragElement = null;

tasks.forEach(task => {

    task.addEventListener("drag", () => {

dragElement = task;
    })
})

progress.addEventListener("dragenter", (e) => {

    progress.classList.add("hover-over");
});

progress.addEventListener("dragleave", (e) => {

    progress.classList.remove("hover-over");
})

function addDragEventsOnColumn(column) {
    column.addEventListener("dragenter", (e) => {

        e.preventDefault();
        column.classList.add("hover-over");
    })
    column.addEventListener("dragleave", (e) => {

        e.preventDefault();
        column.classList.remove("hover-over");
    })

    column.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })
    column.addEventListener("drop", (e) => {

        e.preventDefault();
        column.appendChild(dragElement);
        column.classList.remove("hover-over");
    })
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);
