// jQuery(function($) { $('.edit_task').submitOnCheck(); })
//
jQuery.fn.submitOnCheck = function() {
  $(this).find('input[type=submit]').remove();
  $(this).find('input[type=checkbox]').click(function() {
    $(this).parent('form').submit();
  });
}

// String monkepatches
//
// "string".trim
//
if (!String.prototype.trim) {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  }
}

// "string".word_count
//
if (!String.prototype.word_count) {
  String.prototype.word_count = function() {
    return this.split(/\s+/).length;
  }
}
//
// \String monkepatches
