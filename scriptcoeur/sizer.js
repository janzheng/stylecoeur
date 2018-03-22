
// css/js hybrid
// dynamic height dispenser
// don't rely on vh as browser bugs and annoyances like iOS chrome
// vw more reliable
// syntax: height is calculated as vh
//         <div class="_align-vertically _size-vheight" data-vheight="40">
$(window).load(function() {
  $('._size-vheight').each(function() {
    // calculate vh manually, and set it dynamically
    // console.log($(this).data())
    var height = $(window).height() * ($(this).data('vheight') * 0.01);
    $(this).css({'height': height})
  });
});