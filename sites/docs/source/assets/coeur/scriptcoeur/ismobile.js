
function isMobile(doSniff) { 
  if(doSniff) {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      return true;
    } else {
      return false;
    }
  }

  // non-sniff is pretty simple
  if( $(window).width() >= 768 ) {
    return false;
  }
  return true;
}
