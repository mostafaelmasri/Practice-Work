var app = angular.module("app", []);

app.service('blyatService', function () {
    this.name = "";
    this.setName = function (newName) {
    this.name = newName;
    };
    this.deleteName = function () {
        this.name = "";
    }
});



app.controller("Ctrller", function ($scope, blyatService) {
    $scope.name = blyatService.name;
    $scope.saveText = function(){
     blyatService.setName($scope.userText);
    $scope.name = blyatService.name;
    }
    $scope.deleteName = blyatService.name;
    
});