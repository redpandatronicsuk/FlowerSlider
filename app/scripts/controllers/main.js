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
 	$scope.$watch( 'myNumSliders',
 		function(newValue, oldValue){
 			console.log('myNumSliders Changed');
 			console.log(newValue);
 			console.log(oldValue);
 		}
 		);
 	
 	$scope.myNumSliders = 10;
 });
