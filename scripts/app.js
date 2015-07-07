angular.module('MyApp', ['timer'])
  .controller('MyAppController', ['$scope', function ($scope) {
      $scope.timerRunning = true;

      $scope.startTimer = function (){
          $scope.$broadcast('timer-start');
          $scope.timerRunning = true;
      };

      $scope.stopTimer = function (){
          $scope.$broadcast('timer-stop');
          $scope.timerRunning = false;
      };

      $scope.$on('timer-stopped', function (event, args) {
          console.log('timer-stopped args = ', args);
      });
  }]);