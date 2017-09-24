import $ from 'jquery';

$.fn.isOnScreen = function() {
  var win = $(window);

  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return !(
    viewport.right < bounds.left ||
    viewport.left > bounds.right ||
    viewport.bottom < bounds.top + 200 ||
    viewport.top > bounds.bottom
  );
};

$(document).ready(function() {
  $(window).scroll(function() {
    if ($('#down-arrow-icon').isOnScreen()) {
      $('#down-arrow-icon').addClass('into-animation');
    }
  });
});
