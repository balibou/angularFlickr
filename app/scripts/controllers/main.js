'use strict';

angular.module('angularFlickrApp')
  .controller('MainCtrl', function($scope, flickr) {
    var search = function(tag){
      flickr.search(tag).then(function(resp){
        $scope.items = resp.items;
      });
    };
    $scope.search = function(tag) {
      search(tag);
    };
    $scope.numLimit = 5;
  });
