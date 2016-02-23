'use strict';

/* jasmine specs for controllers go here */
describe('TaskList controllers', function() {

  beforeEach(module('taskListApp'));
  var $ctrl, $httpBackend;
    beforeEach(inject(function(_$controller_, $injector) {
    	$httpBackend = $injector.get('$httpBackend');

       $httpBackend.expectGET('data/tasks.json').
           respond([{name: 'Today_task1', id: 1}, {name: 'Today_task11', id: 11}]);

      $ctrl = _$controller_;
    }));


    it('should create tasks with 2 items fetched from json', function() {
    	var $scope = {};
    	var ctrl = $ctrl('TaskListCtrl', {$scope: $scope});
    	$httpBackend.flush();
    	expect($scope.tasks.length).toBe(2);
    });

    it('should create task with 1 item fetched from json and filtered', function() {
      var $scope = {};
      var ctrl = $ctrl('TaskDetailsCtrl', {$scope: $scope, $routeParams: {taskId:'1'}});
      $httpBackend.flush();
      expect($scope.task.id).toBe(1);
    });

});