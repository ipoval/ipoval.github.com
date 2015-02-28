if (typeof jQuery === 'undefined') { throw new Error('require jQuery library') }

jQuery(function($) {
  'use strict';

  var FontViewController = {
    apply: function() {
      /* google-code-prettify */
      prettyPrint();

      this.setAsideRightNavFont();
    },

    get rightListFontSize() {
      return this.asideRightFontSize;
    },
    set rightListFontSize(val) {
      this.asideRightFontSize = val;
    },

    setAsideRightNavFont: function() {
      $('.aside\\:right')[0].style.fontSize = this.rightListFontSize;
    }
  };
  FontViewController.rightListFontSize = '12px';
  FontViewController.apply();

  var getCanvasContext = function(nodeId) {
    var canv = document.getElementById(nodeId);
    if (canv && canv.getContext) {
      return canv.getContext('2d');
    }
  };

  $('a.navbar-brand').click(function() {
    var to = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(to).offset().top - 10 }, 1200);
    return false;
  });

  /*
   * Events
   */
  $('#contact, #passionblock').on('mouseover', function() {
    $(this).addClass('light_section');
  }).on('mouseleave', function() {
    $(this).removeClass('light_section');
  });

  /*
   * Twitter widget
   *   recursive setTimeout pattern
   */
  var changeTwitterFeedSummary = function() {
    this.callCount = this.callCount || 0;
    this.callCount++;

    var feedFrame = document.getElementById('twitter-widget-0');
    if (feedFrame) {
      var twr_document = feedFrame.contentWindow.document,
        twr_summary = $(twr_document.querySelector('h1.summary')),
        el = twr_summary.find('a');

      if (el.text() == 'Thoughts out loud') {
        window.clearTimeout(changeTwitterFeedSummaryTimer);
      } else {
        el.text('Thoughts out loud');
        el.css('font-size', '14px');
        setTimeout(changeTwitterFeedSummary, 100);
      }
    }
  };

  changeTwitterFeedSummaryTimer = setTimeout(changeTwitterFeedSummary, 100);

  /*
   * delayed api request to search geolocation based on latitude and longitude
   */
  var getCurrentGeolocation = function() {
    if (! navigator.geolocation) { return; }
    navigator.geolocation.getCurrentPosition(whenHavePosition);

    function whenHavePosition(position) {
      $.get('https://ipovalbackend.herokuapp.com/geolocations/current', { latitude: position.coords.latitude, longitude: position.coords.longitude }, function(data) {
        console.dir(data);
        if (data.location) {
          $('#current-geolocation-area').html('how is the weather like in ' + data.location).hide().slideDown(3000);
        }
      });
    }
  };
  setTimeout(getCurrentGeolocation, 7000);

});
