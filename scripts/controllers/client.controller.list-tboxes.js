'use strict';

angular.module('timeboxApp')
.controller('listTboxesCtrl', function($scope, tboxesService) {
  $scope.addTbox = function() {
    var tbox = {name: "This is a new tbox."};
    $scope.tboxes.push(tbox);
  };
  
  $scope.helloWorld = tboxesService.helloWorld;
  
  tboxesService.getTboxes(function(response) { 
      console.log(response);  
      $scope.tboxes = response.data;
    });
  
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