'use strict';

angular.module('timeboxApp')
.service('todosService', function($http) {
  this.helloWorld = function() {
    console.log("This is the todosService's method!!");
  };
  
  this.getTodos = function(callback){
    $http.get('mock/todos.json')
    .then(callback)
  };
  
  this.deleteTodo = function(todo) {
    console.log("The " + todo.name + " todo has been deleted!")
    // other logic
  };
  
  this.saveTodos = function(todos) {
    console.log(todos.length + " todos have been saved!");
    // other logic...
  };
  
});