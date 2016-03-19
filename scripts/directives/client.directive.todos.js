angular.module('timeboxApp')
.directive('todos', function() {
  return {
    templateUrl: 'templates/todos.html',
    controller: 'todosCtrl'
  }
});