









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
  // // initPhotoSwipeFromDOM('._gallery');

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

















