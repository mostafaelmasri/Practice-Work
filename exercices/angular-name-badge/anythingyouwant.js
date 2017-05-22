var app = angular.module("myApp", []);

app.controller("mainCtrl", function($scope){
   $scope.arr = [];
    $scope.createBadge = function(){
       var obj = {
           firstName : $scope.fname, 
           lastName  : $scope.lname,
           eMail : $scope.email,
           PlaceOfBirth : $scope.birthplace,
           phone : $scope.phone,
           FavoriteFood : $scope.favfood,
           Biography : $scope.bio
           
           
       }
    $scope.arr.push(obj)   
               

    }
    
});

