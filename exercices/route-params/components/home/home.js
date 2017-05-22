var app = angular.module("myApp");

app.controller('homeCtrl', function($scope, $routeParams) {
    $scope.data = "yo" ;
    $scope.param = $routeParams.favoritemovie;
});