(function(self) {
  'use strict';

  self.onmessage = function(event) {
    var query = event.data;
    self.postMessage('worker has fired');
  };
}(this));
