'use strict';

/**
 * @ngdoc function
 * @name flowerSliderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flowerSliderApp
 */
angular.module('flowerSliderApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
