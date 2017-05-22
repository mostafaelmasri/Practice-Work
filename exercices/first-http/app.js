var app = angular.module("myApp", []);

app.controller("mainCtrl", function($scope , $http) {
    $scope.go = function(){
    $http.get("http://swapi.co/api/planets/", function(response) {
        console.log(response);
        $scope.planet = response.data.name;
    });
}           
})