'use strict';

angular.module('timeboxApp')
.controller('listTboxesCtrl', function($scope, tboxesService, Tbox) {

  tboxesService.getTboxes(function(response) { 
//    console.log(response);  
    $scope.tboxes = response.data;
  });
  $scope.newTbox = {};
  
  $scope.addTbox = function(tbox) {
//    console.log(tbox);
    var newTbox = new Tbox(tbox.size, tbox.name, tbox.duration, tbox.units)
    $scope.tboxes.push(newTbox);
    $scope.newTbox = {};
  };
    
  $scope.deleteTbox = function(tbox, $index) {
    tboxesService.deleteTbox(tbox);
    $scope.tboxes.splice($index, 1);
  };
  
  $scope.saveTboxes = function() {
    var filteredTboxes = $scope.tboxes.filter(function(tbox) {
      if (tbox.edited) {
        return tbox;
      }
    });
    tboxesService.saveTboxes(filteredTboxes);
  };
})