jQuery(function($) {
  // google-code-prettify
  prettyPrint();

  var IpovalGeolocation = {
    current_position: function() {
    }
  };
  IpovalGeolocation.current_position();

  var get_canvas_context = function(node_id) {
    var canv = document.getElementById(node_id);
    if (canv && canv.getContext) {
      return canv.getContext('2d');
    }
  }

  // Page events
  $('#contact, #resumeblock, #passionblock, #project_planner, #tweeter_feed').on('mouseover', function() {
    $(this).addClass('light_section').css('cursor', 'wait');
  }).on('mouseleave', function() {
    $(this).removeClass('light_section');
  })

  // Twitter widget
  var change_twr_summary = function() {
    var twr_frame = document.getElementById('twitter-widget-0');
    if (twr_frame) {
      var twr_document = twr_frame.contentWindow.document;
      var twr_summary = $(twr_document.querySelector('h1.summary'));
      var el = twr_summary.find('a');
      if (el.text() == 'Thoughts out loud') { window.clearInterval(twr_interval); }
      el.text('Thoughts out loud');
      el.css('font-size', '14px');
      console.log('change_twr_summary interval...');
    }
  }
  twr_interval = setInterval(change_twr_summary, 100);
});
