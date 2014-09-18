'use strict';

/**
 * @ngdoc function
 * @name flowerSliderApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flowerSliderApp
 */
angular.module('flowerSliderApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
