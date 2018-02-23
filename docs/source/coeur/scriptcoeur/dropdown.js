


var delayTime = 600; // 600ms delay


$('._dropdown').each(function(){
  var width = $(this).data('width');
  var _target = $(this); 
  _target.find('._dropdown-container').css({'width': width});


  if(_target.hasClass('--delay')) {
    // add onhover effect
    _target.on('mouseenter', function() {
      console.log('delay hover', _target);
      _target.addClass('--opening');
      window.setTimeout(function() {
        _target.removeClass('--opening');
        console.log('open!');
      }, delayTime);
    })
  }
});