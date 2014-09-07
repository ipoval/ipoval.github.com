(function(self) {
  'use strict';

  self.onmessage = function(event) {
    var query = event.data;
    getYoutubeResults(query);
  };

  var getYoutubeResults = function(query) {
    var callback = 'processResults',
      url = 'http://gdata.youtube.com/feeds/videos?vq=' + query + '&alt=json-in-script&max-results=5&callback=' + callback;

    // worker has a utility function to requrest local, relative and remote urls
    importScripts(url);
  };

  var processResults = function(asJson) {
    postMessage(asJson);
  };
}(this));
