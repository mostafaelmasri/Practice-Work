var app = angular.module("myApp", []);

app.controller("mainCtrl", function ($scope, hitList) {
    $scope.hitList = hitList;
    hitList.getList();
});

app.service("hitList", function ($http) {
//    this.list = [];
//    console.log(hitList);
    var self = this;

    this.getList = function () {
        return $http.get("http://api.vschool.io:6543/hitlist.json").then(function (res) {
            self.list = res.data;
//            console.log(self.list);
        });
    };
});