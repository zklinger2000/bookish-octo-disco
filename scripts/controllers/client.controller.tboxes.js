'use strict';

angular.module('timeboxApp')
.controller('tboxesCtrl', function(Tbox) {
  var vm = this;
  
  vm.tbox = new Tbox(6, 'Exercise', 2, 'hr');

  vm.tboxClick = tboxClick;
  vm.save = save;
  
  function tboxClick(cell) {
    if (!cell.isDone) {
      cell.completed = new Date();
      ++vm.tbox.totalAmt;
    }
    cell.isDone = true;
    if (vm.tbox.cells.every(function(cell) {
      return cell.isDone;
    }) && !vm.tbox.completed) {
      vm.tbox.completed = new Date();
      console.log('It\'s Full!');
      console.log(vm.tbox);
    }
  }
  
  function save() {
    console.log('saved');
  }
  
})