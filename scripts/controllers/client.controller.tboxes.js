'use strict';

angular.module('timeboxApp')
.controller('tboxesCtrl', function(Tbox) {
  var vm = this;
  
  vm.tboxClick = tboxClick;
  
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
      console.log(tbox);
    }
  }
  
})