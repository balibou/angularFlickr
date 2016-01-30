'use strict';

angular.module('angularFlickrApp')
  .controller('MainCtrl',function ($scope, flickr) {
    $scope.search = function(tag) {
        $scope.flickr = flickr.search(tag);
      };
  });
