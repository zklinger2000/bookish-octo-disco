'use strict';

angular.module('timeboxApp')
.controller('todosCtrl', function($scope, todosService) {
  $scope.addTodo = function() {
    var todo = {name: "This is a new todo."};
    $scope.todos.unshift(todo);
  };
  
  $scope.helloWorld = todosService.helloWorld;
  
  todosService.getTodos(function(response) { 
      console.log(response.data);  
      $scope.todos = response.data;
    });
  
  $scope.deleteTodo = function(todo, $index) {
    todosService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };
  
  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo) {
      if (todo.edited) {
        return todo;
      }
    });
    todosService.saveTodos(filteredTodos);
  };
})