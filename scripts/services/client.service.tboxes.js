'use strict';

angular.module('timeboxApp')
.service('tboxesService', function($http) {
  console.log('LOADED tboxesService');
  this.helloWorld = function() {
    console.log("This is the tboxesService's method!!");
  };
  
  this.getTboxes = function(callback){
    $http.get('mock/tboxes.json')
    .then(callback);
//    console.log(callback);
  };
  
  this.deleteTbox = function(tbox) {
    console.log("The " + tbox.name + " tbox has been deleted!")
    // other logic
  };
  
  this.saveTboxes = function(tboxes) {
    console.log(tboxes.length + " tboxes have been saved!");
    // other logic...
  };
  
});