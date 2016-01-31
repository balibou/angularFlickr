'use strict';

describe('Directive: photosDirective', function () {

  beforeEach(module('angularFlickrApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  // it('should make hidden element visible', inject(function ($compile) {
  //   element = angular.element('<photos-directive></photos-directive>');
  //   element = $compile(element)(scope);
  //   expect(element.text()).toBe('this is the photosDirective directive');
  // }));
});
