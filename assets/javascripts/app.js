if (typeof jQuery === 'undefined') { throw new Error('require jQuery library'); }

/* inline http://getbootstrap.com/examples/offcanvas/offcanvas.js to avoid send request for this asset */
$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});

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
  setTimeout(getCurrentGeolocation, 5000);

  (function animateSidebar() {
    'use strict';
    var sidebarSections = $('div.sidebar-nav .ip-nav-header'),
      worker = new Worker('assets/javascripts/worker.js');
    worker.onmessage = function(event) {
      this.callCount = this.callCount || 0;
      this.callCount++;
      // console.dir(event.data); console.dir(this.callCount);
      var deg = event.data.randomNum2,
        randomSidebar = sidebarSections.eq(event.data.randomNum1);
      randomSidebar.css({
        '-webkit-transform': 'rotate(-' + deg + 'deg)',
        '-moz-transform': 'rotate(-' + deg + 'deg)',
        'transform': 'rotate(-' + deg + 'deg)',
      });
    };
    worker.onerror = function(event) {
      console.dir(event);
    };
    setInterval(function() {
      worker.postMessage({ randomMax: sidebarSections.size() + 1 });
    }, 1500);
  })();

  /*
   * loadScript("js.js", function() { Application.init(); });
   * non-blocking pattern to load script
   * embedded here, thus avoiding another HTTP request
   */
  function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (callback) {
      if (script.readyState) { /* IE */
        script.onreadystatechange = function() {
          if (script.readyState == "loaded" || script.readyState == "complete") {
            script.onreadystatechange = null;
            callback();
          }
        };
      } else {
        script.onload = function() { callback(); };
      }
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  setTimeout(function() {
    loadScript('http://cdn.jsdelivr.net/qtip2/2.2.1/jquery.qtip.js', function() {
      $('[data-tooltip!=""]').qtip({ content: { attr: 'data-tooltip' }, style: { classes: 'qtip-bootstrap' } });
    });
    loadScript('//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52012df744920f69', function() {
      addthis.layers({ 'theme' : 'transparent', 'share' : { 'position' : 'right', 'numPreferredServices' : 5 }, 'follow' : { 'services' : [ {'service': 'twitter', 'id': 'ipoval'}, {'service': 'linkedin', 'id': 'ipoval'} ] } });
    });

    /* load twitter feed widget */
    (function(d,s,id){
      var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";js.async=true;fjs.parentNode.insertBefore(js,fjs);}
    })(document,"script","twitter-wjs");
  }, 2500);
});

/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */
/* http://getbootstrap.com/getting-started/#support-ie10-width */
(function () {
  'use strict';
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }
})();
