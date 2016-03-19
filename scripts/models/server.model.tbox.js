'use strict';

angular.module('timeboxApp')
.factory('Tbox', function() {
  
  var Cell = function() {
    this.isDone = false;
    this.completed = undefined;
  };
  
  var Tbox = function(size, name, duration, units) {
    this.size = size || 6;
    this.name = name || '';
    this.duration = duration || 1;
    this.units = units || 'hr';
    this.created = new Date();
    this.totalAmt = 0;
    this.completed = undefined;
    this.cells = Array.apply(null, Array(this.size))
      .map(function () {
        return new Cell();
      });
  };
  
  Tbox.prototype.constructor = Tbox;

  return Tbox;
});