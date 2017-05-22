// home.js
 var app = angular.module('myApp', ['ngRoute']) 

.config(function ($routeProvider) {
  $routeProvider
      .when("/home", {
    controller: 'homeController',
    templateUrl: 'components/home/home.html'
  })
 .when('/about', {
      controller:'aboutController',
      templateUrl: 'components/about/about.html'
  })    
})

.controller('homeController', function ($scope) {
  $scope.name = 'The Postal Service';
});