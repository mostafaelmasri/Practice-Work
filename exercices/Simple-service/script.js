var app = angular.module("app", []);

app.controller("ctrl", function($scope, servicez){
    $scope.teena = servicez.thing;
    $scope.number = servicez.stuff;
});


app.service("servicez", function(){
    this.thing =  "something";   
    this.stuff = Math.floor((Math.random() * 10) + 1); //display on p tag html a random number between 1 and 10
})