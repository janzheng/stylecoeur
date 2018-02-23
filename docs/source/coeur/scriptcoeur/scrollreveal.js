
// [0.0.1]
// scrollreveal - paired with ._scrollReveal css 
// attaches a class to animate independently of scrolling position
$(document).ready(function() {
  var scrollRevealContainer = new ScrollMagic.Controller();
  var target = '._scrollReveal';// trigger and target the same
  var i = 0;
  $('._scrollReveal').each(function() {
    // ScrollMagic needs to reference unique ids
    var target_id = '_scrollReveal-' + i++;
    $(this).attr('id', target_id);
    target_id = '#'+target_id;

    // add delay
    if($(this).attr('data-delay')) {
      var delay = $(this).attr('data-delay') + 'ms';
      console.log('delay: ', delay)
      $(this).css('-webkit-transition-delay', delay )
             .css('-moz-transition-delay', delay)
             .css('-ms-transition-delay', delay)
             .css('-o-transition-delay', delay)
             .css('transition-delay', delay);
    }


    var scrollReveal = new ScrollMagic.Scene({reverse: false, triggerElement: target_id, triggerHook: 'onEnter', offset: 0});
    scrollReveal.setClassToggle(target_id, '--revealed');
    scrollReveal.addIndicators({name: "scroll reveal"}); // add indicators (requires plugin)
    scrollReveal.addTo(scrollRevealContainer); 
  })
});