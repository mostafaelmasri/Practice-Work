var app = angular.module("myApp", []);
app.controller("mainCtrl", function($scope){
    $scope.arr = [];
    $scope.display = function(){
       var obj = {
           title : $scope.firstitle,
           img : $scope.image,
           description : $scope.desc
       }
 
    $scope.arr.push(obj);
  }
});