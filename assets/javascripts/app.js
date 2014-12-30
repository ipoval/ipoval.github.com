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

  /*
   * Events
   */
  $('#contact, #resumeblock, #passionblock, #project_planner, #tweeter_feed').on('mouseover', function() {
    $(this).addClass('light_section');
  }).on('mouseleave', function() {
    $(this).removeClass('light_section');
  })

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
        setTimeout(changeTwitterFeedSummary, 100)
      }
    }
  }
  changeTwitterFeedSummaryTimer = setTimeout(changeTwitterFeedSummary, 100);

});
