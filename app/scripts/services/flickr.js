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
      search: function(query) {
        var q = $q.defer();
        photos.load({
          tags: query
        }, function(resp) {
          q.resolve(resp);
        }, function(err) {
          q.reject(err);
        })
        console.log(q.promise);
        return q.promise;
      }
    }
  });
