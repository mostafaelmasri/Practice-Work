var app = angular.module("myApp", []);

app.controller("ctrl", function($scope, $http){
    
    var config = {  
    headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
    }
};

  $scope.go = function(){  
 $http.get("https://yoda.p.mashape.com/yoda?sentence="+ $scope.name, config).then(function(response){
     $scope.data = response.data;
 }

                                                                                  
)};
    
});