'use strict';

angular.module('angularFlickrApp')
  .directive('photosDirective', function () {
    return {
      templateUrl: 'views/photosDirective.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the photosDirective directive');
      }
    };
  });
