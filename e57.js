/* 57. Create a simple to-do list app in 
HTML/JS: add items, display them, delete items.*/

class ToDoList {
    constructor(list = []){
        this.list = list
    }
    addTask(task){
        this.list.push(task);
        this.render();
        console.log(`Task <${task}> added to the list.`);
        return this.list.length;
    }
    deleteTask(index) {
        if (index >= 0 && index < this.list.length) {
            this.list.splice(index, 1);
            this.render();
            console.log(`Task <${index}> has been deleted from the list.`);
        }
        return null;
    }
    showList(){
        console.log(this.list);
    }
    render(){
        const container = document.getElementById("list-container");
       
        container.innerHTML = "";
        this.list.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${task}</span>
                <button onclick="app.deleteTask(${index})">Delete</button>
            `;
            
            // 4. Inject each list item into the UI
            container.appendChild(li);    
        });
    }
}

const app = new ToDoList();

app.addTask('Sacar a pasear al perro');
app.addTask('Comprar comida');
app.addTask('Estudiar matemáticas');

function addTask() {
    const input = document.getElementById('taskInput');
    if (input.value.trim()) {
        app.addTask(input.value.trim());
        input.value = '';
    }
}
