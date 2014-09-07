(function(self) {
  'use strict';

  self.onmessage = function(event) {
    self.postMessage({
      randomNum1: getRandom(event.data.randomMax),
      randomNum2: getRandom(10)
    });

    // var query = event.data;
    // getYoutubeResults(query);
  };

  var getRandom = function(randomMax) {
    // random 0..n
    return Math.floor(Math.random() * randomMax);
  };

  var getYoutubeResults = function(query) {
    var callback = 'processResults',
      url = 'http://gdata.youtube.com/feeds/videos?vq=' + query + '&alt=json-in-script&max-results=5&callback=' + callback;

    // worker has a utility function to requrest local, relative and remote urls
    self.importScripts(url);
  };

  var processYoutubeResults = function(asJson) {
    // basic stub
    self.postMessage(asJson);
  };
}(this));
