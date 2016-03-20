'use strict';

angular.module('timeboxApp')
.controller('tboxesCtrl', function(Tbox) {
  var vm = this;
  
//  vm.tbox = new Tbox(6, 'Exercise', 2, 'hr');

  vm.tboxClick = tboxClick;
  vm.save = save;
  
  function tboxClick(cell, tbox) {
    if (!cell.isDone) {
      cell.completed = new Date();
      ++tbox.totalAmt;
    }
    cell.isDone = true;
    if (tbox.cells.every(function(cell) {
      return cell.isDone;
    }) && !tbox.completed) {
      tbox.completed = new Date();
      console.log('It\'s Full!');
      console.log(tbox);
    }
  }
  
  function save() {
    console.log('saved');
  }
  
})