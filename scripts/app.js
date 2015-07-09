var myApp = angular.module('myApp',['timer']);

myApp.controller('myCtrl', function($scope,$timeout){
  $scope.timerRunning = false;
  $scope.minutesEntered = null;
  $scope.secondsEntered = null;
  $scope.countdown = 0;
  
  //TODO: Once timer hits 0, disable the stop button and stop the timer (i.e. call stopTimer())
  //TODO: On callback, reset countdown to 0, reset clock to 00:00, and disable stop button (call stopTimer() possibly) 
  //TODO: Disable minutes and seconds fields when the timer is started/counting down and enable them during stop, at
  // which time if the value of the fields are changed then set the countdown with the new values and start from there
  // in an approach similar to what is being done in startTimer()
  $scope.startTimer = function (){
    if ($scope.countdown == 0) {
      $scope.countdown = ($scope.minutesEntered * 60) + $scope.secondsEntered;
      $timeout(function(){
        $scope.$broadcast('timer-start');
      });
    } else {
        $timeout(function(){
        $scope.$broadcast('timer-resume');
        }); 
      }
      $scope.timerRunning = true;
  };

  $scope.stopTimer = function (){
      $scope.$broadcast('timer-stop');
      $scope.timerRunning = false;
  };

  $scope.callbackTimer={};
  $scope.callbackTimer.status='Running';
  $scope.callbackTimer.callbackCount=0;   
  $scope.callbackTimer.finished=function(){
      $scope.callbackTimer.status='Complete!';
      $scope.callbackTimer.callbackCount++;
      $scope.$apply();
  };
});