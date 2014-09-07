jQuery(function($) {
  // google-code-prettify
  prettyPrint();

  var get_canvas_context = function(node_id) {
    var canv = document.getElementById(node_id);
    if (canv && canv.getContext) {
      return canv.getContext('2d');
    }
  }

  $('a.navbar-brand').click(function() {
    var to = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(to).offset().top - 10 }, 1200);
    return false;
  });

  // Page events
  $('#contact, #resumeblock, #passionblock, #project_planner, #tweeter_feed').on('mouseover', function() {
    $(this).addClass('light_section');
  }).on('mouseleave', function() {
    $(this).removeClass('light_section');
  })

  // Twitter widget
  var changeTwitterFeedSummary = function() {
    this.callCount = this.callCount || 0;
    this.callCount++;

    var feedFrame = document.getElementById('twitter-widget-0');
    if (feedFrame) {
      var twr_document = feedFrame.contentWindow.document,
        twr_summary = $(twr_document.querySelector('h1.summary')),
        el = twr_summary.find('a');

      if (el.text() == 'Thoughts out loud') { window.clearInterval(changeTwitterFeedSummaryTimer); }
      el.text('Thoughts out loud');
      el.css('font-size', '14px');
    }
  }
  changeTwitterFeedSummaryTimer = setInterval(changeTwitterFeedSummary, 100);
});
