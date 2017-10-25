
// css/js hybrid
// dynamic height dispenser
// don't rely on vh as browser bugs and annoyances like iOS chrome
// vw more reliable
// syntax: class=_size-vheight" data-height="30" is calculated 30 vh
$(window).load(function() {
  $('._sizer-vheight').each(function() {
    // calculate vh manually, and set it dynamically
    // console.log($(this).data())
    var height = $(window).height() * ($(this).data('vheight') * 0.01);
    $(this).css({'height': height})
  });
});