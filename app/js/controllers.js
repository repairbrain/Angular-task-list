'use strict';

/* Controllers */

var taskListAppControllers = angular.module('taskListControllers', []);

taskListAppControllers.controller('TaskListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/tasks.json').then(function(data) {
      $scope.tasks = data.data;
    }, function() {
      console.log('request error');
    });
  }
]);

taskListAppControllers.controller('TaskDetailsCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/tasks.json').then(function(data) {
      function taskToShow(arrayOfObj, params) {
        var filteredArray = [];
        for (var i = 0; i < arrayOfObj.length; i += 1) {
          if ((arrayOfObj[i].id).toString() === params.taskId) {
            filteredArray.push(arrayOfObj[i]);
            break;
          }
        }
        return filteredArray[0];
      }

      $scope.task = taskToShow(data.data, $routeParams);
    }, function() {
      console.log('request error');
    });

    $scope.updateTask = function() {
      $http.put($scope.task.id + '/edit/', $scope.task);
    };

  }
]);