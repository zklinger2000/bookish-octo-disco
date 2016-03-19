'use strict';

angular.module('timeboxApp')
.controller('tboxesCtrl', function() {
  var vm = this;
  
  vm.hello = hello;
  vm.tboxes = [];
  for (var i = 0; i < 6; i++) {
    vm.tboxes[i] = { isDone: false };
  }
  vm.tboxes.forEach(function(tbox) {
    tbox.isDone = false;
  });
  vm.bars = [];
  
  vm.tboxClick = tboxClick;
  
  function tboxClick(tbox) {
    tbox.isDone = true;
    if (vm.tboxes.every(function(tbox) {
      return tbox.isDone;
    })) {
      vm.bars.push({});
      vm.tboxes.forEach(function(tbox) {
        tbox.isDone = false;
      });
    }
  }
  
  function hello() {
    console.log('hellooooo');
  }
  
})