'use strict';

// Declare app level module which depends on views, and components
var taskListApp = angular.module('taskListApp', [
  'ngRoute',
  'taskListControllers',
  'xeditable'
]);

taskListApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
    templateUrl: 'html/task-list.html',
    controller: 'TaskListCtrl'
  	}).
  	when('/:taskId', {
    templateUrl: 'html/task-details.html',
    controller: 'TaskDetailsCtrl'
  	}).
  	otherwise({redirectTo: '/'});
}]);

taskListApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});