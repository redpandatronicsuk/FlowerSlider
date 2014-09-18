'use strict';

describe('Directive: rptFlowerSlider', function () {

  // load the directive's module
  beforeEach(module('flowerSliderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rpt-flower-slider></rpt-flower-slider>');
    element = $compile(element)(scope);
  }));
});
