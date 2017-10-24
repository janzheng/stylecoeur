
// ************************************************************
// Smooth Scrolling 
// - can link to a # of another page, and smooth-scroll down to that #
// 

// OPTIONS
let yOffset = 30;


// ************************************************************







var scrollElement = 'html, body';

// Smooth scrolling for internal links
function verticalScroll(obj) {
  event.preventDefault();
  
  var $this = $(this);
  
  if( !(typeof obj.offset() === "undefined")) {
    $(scrollElement).stop().animate({
      'scrollTop': obj.offset().top - yOffset,
    }, 500, 'swing');
  }
}


$(document).ready(function() {
  let hash = location.hash; // hash intercept
  if(hash !== '') {
    verticalScroll(hash);
  }
});