'use strict';

angular.module('angularFlickrApp')
  .controller('MainCtrl', function($scope, flickr) {
    $scope.search = function(tag) {
      $scope.flickr = flickr.search(tag);
    };
    var search = function(tag){
      flickr.search(tag).then(function(resp){
        $scope.items = resp.items;
        console.log($scope.items);
      });
    };
    $scope.search = function() {
      search($scope.tag);
    };
    $scope.numLimit = 5;
  });
