var app = angular.module("app", []);

app.controller("ctrl", function ($scope, $http) {

    $scope.todoItems = [];

    $scope.getting = function () {
        $http.get("https://api.vschool.io/godzilla/todo/").then(function (res) {
            $scope.todoItems = res.data;
        });
    };

    $scope.getting();

    $scope.addItem = function (thing) {
        $http.post("https://api.vschool.io/godzilla/todo/", thing).then(function (res) {
            $scope.getting();
        });
    };

    $scope.deleteItem = function (info) {
        $http.delete("https://api.vschool.io/godzilla/todo/" + info._id).then(function (res) {
            $scope.getting();
        });
    };

    $scope.update = function (item, id) {
        $http.put("https://api.vschool.io/godzilla/todo/" + id, item).then(function (res) {
            $scope.getting();
        });
    };

 });


