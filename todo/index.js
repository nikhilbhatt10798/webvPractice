const todolist = [];

//this function handles add task
function addTodoHandler(){
 const task =    document.getElementById('task').value;
 if(!task)
 {
    alert("Insert Task");
    return false;
 }
todolist.push(task);
const todoHtml = todoAsHtml();
// console.log(todoHtml);
document.getElementById('listTodo').innerHTML=todoHtml.join("");
 document.getElementById('task').value="";
}
// this function returns array of table row elements
function todoAsHtml(){
 return   todolist.map(
        (taskName,index) =>`<tr>
    <td>${1 + index}</td>
    <td>${taskName}</td>
    <td><button onclick="removeTask(${index})">Done</button ></td>
</tr>`);
}

function removeTask(index){
    
    todolist.splice(index,1);
    const todoHtml = todoAsHtml();
// console.log(todoHtml);
document.getElementById('listTodo').innerHTML=todoHtml.join("");
 console.log('Remove Task')
}