'use strict';

describe('Service: flickr', function() {

  beforeEach(module('angularFlickrApp'));

  var flickr;
  beforeEach(inject(function(_flickr_) {
    flickr = _flickr_;
  }));

  it('should do something', function() {
    expect(!!flickr).toBe(true);
  });

  it('should call search method', inject(function(flickr) {
    expect(flickr.search().$$state.status).toEqual(0);
  }));

});
