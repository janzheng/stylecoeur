


var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  isMobile = true;
}


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







$(document).ready(function() {

  // this affects <a> onclick events!!!
  //  if this is attached, onclick won't propagate
  // var windowHeight = $(window).height();
  // windowWidth = $(window).width();
  // $("a[href^='#'], html, body").unbind();

  // console.log('window height/width: ' + windowHeight + ' | ' + windowWidth);


  // // intercept hash load
  // let hash = location.hash;

  // if(hash !== '') {
  //   verticalScroll(hash);
  // } else {
  //   verticalScroll();
  // }




  // 
  // sticky nav
  // 

  // animation controller
  // var stickyController = new ScrollMagic.Controller();

  // // sticky nav
  // var nav = new ScrollMagic.Scene({triggerElement: "#nav", triggerHook: "onLeave"})
  //         .setPin("#nav")
  //         .setClassToggle("#nav", "--pinned") // add class toggle
  //         .addTo(stickyController);

  // // execute above function
  // // initPhotoSwipeFromDOM('.gallery');

  // // sidebar element
  // var sidebar = new ScrollMagic.Scene({triggerElement: "._sidebar-tr", triggerHook: "onLeave"})
  //         .setClassToggle("._sidebar", "--pinned") // add class toggle
  //         .addTo(stickyController);


});

// jQuery(window).on('hashchange', verticalScroll(location.hash));

// jQuery(window).on('resize', _.throttle(resize, 500));

// function resize() {
//   var windowHeight = $(window).height();
//   windowWidth = $(window).width();
//   $("a[href^='#'], html, body").unbind();

//   console.log('window height/width: ' + windowHeight + ' | ' + windowWidth);

//   // reset
//   $('.section-content').css({'padding-top':'32px'})
//   $('._footer').show();

//   if(isMobile || $(window).width() < 768 ) {
//     console.log('mobile view');
//     verticalScroll();
//     $('._nav').offset({top: 0});
//     $('.section-container').scrollLeft(0); // reset left/right scroll
//   } else {
//     horizontalScroll();
//     $('._nav').offset({top: windowHeight/2 - $('._nav').outerHeight()/2});

//     // size adjustments
//     if (windowHeight < 580 ) {
//       // console.log('changes...')
//       $('.section-content').css({'padding-top':'0px', 'overflow-y':'scroll', 'height': '100vh'})
//       $('._footer').hide();


//     }
//   }
// }

















