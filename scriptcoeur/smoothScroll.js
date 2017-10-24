
// ************************************************************
// Smooth Scrolling 
// - can link to a # of another page, and smooth-scroll down to that #
// 

// OPTIONS
let yOffset = 30;


// ************************************************************


// basic scroller

var scrollElement = 'html, body';

// Smooth scrolling for internal links
function verticalScroll(obj) {
  event.preventDefault();
  
  var $this = $(this);
  
  if( !(typeof $(obj).offset() === "undefined")) {
    $(scrollElement).stop().animate({
      'scrollTop': obj.offset().top - yOffset,
    }, 500, 'swing');
  }
}

// "advanced" scroller

$(document).ready(function() {
  let hash = location.hash; // hash intercept
  if(hash !== '') {
    verticalScroll(hash);
  }
});





var navOffset = -60;

function verticalScroll(_target) {
  // console.log('scrolling to ', _target)
  var scrollElement = 'html, body';
  event.preventDefault();
  
  // Smooth scrolling for internal links
  $("a[href^='#']").click(function(event) {
    event.preventDefault();

    // var $this = $(this),
    var target = this.hash || _target,
        $target = $(target),
        offset = $('a[href='+target+']').data('offset-scroll') || 0; // <... data-offset-scroll="400"> 
        offset += navOffset;

    // console.log('scroll: ' , target, $('a[href='+target+']'), $('a[href='+target+']').data('offset-scroll'))
    // if(_target) {
    //   offset = $('a[href=#'+'target]').data('offset-scroll') || 0;
    //   console.log('new target offset: ', offset, _target)
    // }
    // console.log('start vScroll')

    if( typeof $target.offset() !== "undefined") {
      // window.location.hash = target;
      $(scrollElement).stop().animate({
        'scrollTop': $target.offset().top + offset
      }, 500, 'swing', function() {

        // changes target id so we don't scroll twice w/ setting location
        var id = target.replace(/^.*#/, ''),
            elem = document.getElementById(id)
        elem.id = id+'-tmp'
        window.location.hash = target
        elem.id = id

        // window.location.hash = target;
        event.preventDefault();
        // console.log('finished vScroll: ', target)
      });
    }
  });
}


