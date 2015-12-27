angular
  .module('timeApp')
  .controller('MainController', MainController)

function MainController(){
  this.controllerName = "MainController";
  var self = this;

  self.time = new Date();

}