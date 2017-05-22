var app = angular.module("myApp", []);

app.controller("ctrl", function ($scope, myService) {
    $scope.myService = myService;
    myService.getSW();
});




app.service("myService", function ($http) {
    var self = this;
    this.getSW = function () {
        $http.get("http://swapi.co/api/films/1/").then(function (res) {
            self.openingCrawl = res.data.opening_crawl;
        });
    }
});
