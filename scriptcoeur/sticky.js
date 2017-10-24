
// _sticky.js [0.0.1] / sticky sidebar controller
var _sticky = function(_triggerElement, _triggerTarget, _targetClass) {
  var sidebarController = new ScrollMagic.Controller();
  var sidebar_scene = new ScrollMagic.Scene({triggerElement: _triggerElement, triggerHook: "onLeave"})
          .setClassToggle(_triggerTarget, _targetClass) // add class toggle
          .addTo(sidebarController);
}

// usage
$(document).ready(function() {
  var triggerElement = "._sidebar-trigger", target = "._sidebar", targetClass = "--pinned";
  _sticky(triggerElement, target, targetClass);
});
