var app = angular.module("app", [])
app.controller("mainCtrl", function ($scope, BlueService, RedService) {
    $scope.redScore = RedService.score;
    $scope.blueScore = BlueService.score;
    $scope.redBtn = function () {
        RedService.increment();
        BlueService.decrement();
        $scope.redScore = RedService.score;
        $scope.blueScore = BlueService.score;
        
    }

    $scope.blueBtn = function () {
        BlueService.increment();
        RedService.decrement();
        $scope.blueScore = BlueService.score;
        $scope.redScore = RedService.score;
    }
});
