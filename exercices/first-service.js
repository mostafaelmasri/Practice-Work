var app = angular.module("myApp", []);
app.controller("mainCtrl", function($scope, $http, firstService){
    $scope.num = 5;
    $scope.display = firstService.square($scope.num);
    
});

app.service("firstService", function(){
    this.square = function(num) {
        return num * num ;
    }
})