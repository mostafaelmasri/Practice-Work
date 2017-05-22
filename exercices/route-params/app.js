var app = angular.module("myApp", ['ngRoute'])

.config(function($routeProvider){
   $routeProvider
    .when("/home", {
        controller: "homeCtrl",
        templateUrl: "components/home/home.html"
   })    
});

