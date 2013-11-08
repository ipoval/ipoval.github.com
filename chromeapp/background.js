"use strict";

/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/trunk/apps/app.runtime.html
 * @see http://developer.chrome.com/trunk/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  var screenWidth  = screen.availWidth,
      screenHeight = screen.availHeight,
      width        = 1200,
      height       = 768;

  chrome.app.window.create('index.html', {
    id: '@ipoval-chromeapp',
    bounds: {
      width: width,
      height: height,
      left: Math.round((screenWidth - width) / 2),
      top: Math.round((screenHeight - height) / 2)
    }
  });
});
