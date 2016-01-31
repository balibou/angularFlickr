'use strict';

angular.module('angularFlickrApp')
  .factory('flickr', function($resource, $q) {
    var photos = $resource('http://api.flickr.com/services/feeds/photos_public.gne', {
      format: 'json',
      jsoncallback: 'JSON_CALLBACK'
    }, {
      'load': {
        'method': 'JSONP'
      }
    });

    return {
      search: function(tag) {
        var q = $q.defer();
        photos.load({
          tags: tag
        }, function(resp) {
          q.resolve(resp);
        }, function(err) {
          q.reject(err);
        });
        return q.promise;
      }
    };
  });
