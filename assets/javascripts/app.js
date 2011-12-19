jQuery(function($) {
  // google-code-prettify
  prettyPrint();

  // Twitter follow link
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

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

  var draw_logo = function () {
    var context = get_canvas_context('my_logo');
    if (!context) { return false; }

    context.fillStyle = "rgb(200, 0, 0)";
    context.fillRect(10, 10, 100, 100);
    context.fillStyle = "rgb(0, 200, 0)";
    context.fillRect(20, 20, 100, 100);
    context.fillStyle = "rgb(0, 0, 200)";
    context.fillRect(30, 30, 100, 100);

    context.font = 'italic 16px sans-serif';
    context.fillStyle = "rgb(0, 0, 0)";
    context.textBaseline = 'top';
    context.fillText('ipoval', 20, 0);

    var gradient = context.createLinearGradient(0, 0, 0, 40);
    gradient.addColorStop(0, '#000');
    gradient.addColorStop(1, '#f00');
    context.fillStyle = gradient;
    context.strokeStyle = gradient;

    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(0, 40);
    context.lineTo(30, 0);
    context.lineTo(60, 40);
    context.lineTo(285, 40);

    context.stroke();
    context.closePath();
  }

  draw_logo();

  // Page events
  $('#contact, #resumeblock, #passionblock').on('mouseover', function() {
    $(this).addClass('light_section').css('cursor', 'wait');
  }).on('mouseleave', function() {
    $(this).removeClass('light_section');
  })
  //
})
