
// Smooth Scrolling 
// - can link to a # of another page, and smooth-scroll down to that #


// function verticalScroll(_target = undefined, offsetY = 0) {
function verticalScroll(offsetY = 0) {
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
        offset += offsetY;

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

$(document).ready(function() { 
  // intercept hash on load
  var hash = location.hash,
      navOffset = -60;

  verticalScroll(navOffset);
});



/*



// 
// Smooth Scrolling 
// - can link to a # of another page, and smooth-scroll down to that #
// - mooified to scroll left/right based on responsive size
// 

function hScroll(target) {
  var scrollElement = '.section-container';

  $target = $(target);
  // offset = $this.data('offset-scroll') || 0; // <... data-offset-scroll="400"> 
  targetOffset = $target.offset().left;
  offset = -300;

  // console.log('start hScroll to ' , target)

  if( typeof $target.offset() !== "undefined") {
    // window.location.hash = target;
    $(scrollElement).stop().animate({
      'scrollLeft': $target.offset().left + $(scrollElement).scrollLeft() + offset
    }, 600, 'swing', function() {
      window.location.hash = target;

      // console.log('finished hScroll')
    });
  }
}
function horizontalScroll() {
  
  // Smooth scrolling for internal links
  $("a[href^='#']").click(function(event) {
    event.preventDefault();
    hScroll(this.hash);
  });
}

function verticalScroll(_target) {
  var scrollElement = 'html, body';
  event.preventDefault();
  
  // Smooth scrolling for internal links
  $("a[href^='#']").click(function(event) {
    event.preventDefault();

    // var $this = $(this),
    var target = this.hash || _target,
        $target = $(target),
        offset = $('a[href='+target+']').data('offset-scroll') || 0; // <... data-offset-scroll="400"> 

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
