window.onload = init;

function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");
            let markButton = document.createElement("input");
            let mark = document.createElement("label");
            let eraseButton = document.createElement("input");
            let erase = document.createElement("label");
            let entry = document.createElement("p");
            entry.id = task;
            entry.innerText = task;
            markButton.type = "checkbox";
            mark.innerText = "Done";
            eraseButton.type = "submit";
            erase.innerText = "Erase";
            element.appendChild(entry);
            element.appendChild(mark);
            element.appendChild(markButton);
            element.appendChild(erase);
            element.appendChild(eraseButton);            

            // Añadir un boton para marcar de finalizado
            markButton.addEventListener("change", (evt) => {
                evt.preventDefault();

                if(document.getElementById(task).style.textDecoration = "line-through") {
                    document.getElementById(task).style.textDecoration = "none";
                } 

                document.getElementById(task).style.textDecoration = "line-through";
            })
            // Elimine de la lista
            eraseButton.addEventListener("change", function () {
                console.log(this);
                let parent = this.parentNode;
                if (parent) {
                    parent.removeChild(this);
                }
            });
            /*=========================================*/

            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });
}