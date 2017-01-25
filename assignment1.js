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
};

//methods
TodoList.prototype.add = function(){

}

TodoList.prototype.remove = function(){

}

TodoList.prototype.list = function(){
    
}

