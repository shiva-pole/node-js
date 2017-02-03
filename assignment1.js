/*
Assignment 1:  
 
https://github.com/Devbootcamp/object-oriented-javascript-todos

*/

function Task(id, description, completed = false){
   this.id = id;
   this.description = description;
   this.completed = completed;
};

Task.prototype.complete = function(){
   this.completed = true;
}

function TodoList(){
    this.tasks = [];
    this.lastItemId = 0;
};

//methods
TodoList.prototype.add = function(taskDesc){
   var taskId =  this.lastItemId + 1;
   this.tasks.push(new Task(taskId, taskDesc));
   this.lastItemId = taskId;
}

TodoList.prototype.remove = function(task){
//    if(Task.prototype.isPrototypeOf(task)){
      let index = this.tasks.indexOf(task);console.log(index);
      if(index != -1){
         this.tasks.splice(index,1);
      }
//    }
}

TodoList.prototype.list = function(){
    this.tasks.forEach(function(task) {
        console.log('Task ' + JSON.stringify(task));
    });
}

var groceryList = new TodoList();

groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// console.log(groceryList.tasks);

var breadTask = groceryList.tasks[0];

breadTask.complete();

groceryList.list();

groceryList.remove(breadTask);

groceryList.list();


