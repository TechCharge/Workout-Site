var myApp = angular.module('myApp',['timer']);

myApp.controller('myCtrl', function($scope,$timeout){
  $scope.timerRunning = false;
  $scope.minutesEntered = null;
  $scope.secondsEntered = null;
  $scope.countdown = 0;
  
  $scope.startTimer = function (){
    $scope.countdown = ($scope.minutesEntered * 60) + $scope.secondsEntered;
    $timeout(function(){
       $scope.$broadcast('timer-start');
    });
    $scope.timerRunning = true;
  };

  $scope.stopTimer = function (){
      $scope.$broadcast('timer-stop');
      $scope.timerRunning = false;
  };

  $scope.setCountdown = function(newVal) {
    // $scope.countdown = newVal;
     $scope.countdown = $scope.minutesEntered + $scope.secondsEntered;
    $timeout(function(){
       $scope.$broadcast('timer-start');
    });
  };

});