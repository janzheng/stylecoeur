
// css/js hybrid
// dynamic height dispenser
// don't rely on vh as browser bugs and annoyances like iOS chrome
// vw more reliable
// syntax: height is calculated as vh
//         <div class="_align-vertically _size-vheight" data-vheight="40">
$(window).load(function() {
  function sizeup(obj) {
    var height = $(window).height() * ($(obj).data('vheight') * 0.01);
    $(obj).css({'height': height})
    console.log('sizeup!!', height)
  }

  $('._size-vheight').each(function() {
    // calculate vh manually, and set it dynamically
    // console.log($(this).data())
    var _this = this;
    sizeup(_this)

    if($(this).hasClass('--live')) {
      if(_ === undefined)
        console.error('--live needs lodash to work')
      else {
        $(window).on('resize', _.throttle(function(){sizeup(_this)}, 50))
      }
    }
  });
});