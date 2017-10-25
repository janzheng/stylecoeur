
// _sticky.js [0.0.5] / sticky sidebar controller
var _sticky = function(_triggerElement, _triggerTarget, _targetClass, _duration, isPinned) {
  var stickyController = new ScrollMagic.Controller();
  var stickyScene = new ScrollMagic.Scene({triggerElement: _triggerElement, triggerHook: "onLeave", duration: _duration});
          
  if(_triggerTarget && _targetClass ) {stickyScene.setClassToggle(_triggerTarget, _targetClass)} // add class toggle
  if(isPinned) {stickyScene.setPin(_triggerTarget, {pushFollowers: false});}

  stickyScene.addTo(stickyController);
}

// common usage examples 
$(document).ready(function() {
  var triggerElement = "._sidebar-trigger", target = "._sidebar", targetClass = "--pinned";
  _sticky(triggerElement, target, targetClass);
});
