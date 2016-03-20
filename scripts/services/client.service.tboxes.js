'use strict';

angular.module('timeboxApp')
.service('tboxesService', function($http) {
  
  this.getTboxes = function(callback){
    $http.get('mock/tboxes.json')
    .then(callback);
  };
  
  this.deleteTbox = function(tbox) {
    console.log("The " + tbox.name + " tbox has been deleted!")
    // other logic
  };
  
});