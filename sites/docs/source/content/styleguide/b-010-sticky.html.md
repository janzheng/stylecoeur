---
title: Sticky
type: styleguide
layout: layout-coeur-knowbase
name: sticky
section: scriptcoeur
<!-- status: --draft -->
source: ../../
---

<main markdown="1">

## Sticky Components

Used for Sticky nav, sticky sidebar, etc. Uses ScrollMagic to attach classes.

#### Sticky Function

- `triggerElement = "._sidebar-trigger"` - class that triggers scrollMagic
- `target = "._sidebar"` - target element
- `targetClass = "--pinned"` - special class attached when in view
- set `isPinned` to enable ScrollMagic pinning
- set `duration` for distance. Can be a calculated value
- make sure you don't both add a class that sets display: fixed AND ScrollMagic pinning. Funny things will happen.
- uses the new css spec `position: sticky`
- The trigger element should immediately precede the stuck element unless you want funny behavior

<div class="_styleguide-example">
  <div class="_styleguide-example-trigger"></div>
  <div class="_styleguide-stick _padding _color-bg-white">
    <span >This example should stick at the top and then stop 200 px later</span>
  </div>
</div>


~~~ html
<!-- external -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
<!-- optional external -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.js"></script> 


<!-- script -->
<script src="../coeur/scriptcoeur/sticky.js" type="text/javascript"></script>

<script>
$(document).ready(function() {
  var triggerElement = "._styleguide-example-trigger", 
      target = "._styleguide-stick", 
      targetClass = "";
      isPinned = true;
  _sticky(triggerElement, target, targetClass, isPinned);
});
</script>


<div class="_styleguide-example">
  <div class="_styleguide-example-trigger"></div>
  <div class="_styleguide-stick _padding _color-bg-white">
    <span >This example should stick at the top</span>
  </div>
</div>
~~~


<!-- external -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>

<!-- script -->
<script src="../coeur/scriptcoeur/sticky.js" type="text/javascript"></script>

<script>
$(document).ready(function() {
  var triggerElement = "._styleguide-example-trigger", 
      target = "._styleguide-stick", 
      targetClass = "";
      duration = 200;
      isPinned = true;
  _sticky(triggerElement, target, targetClass, duration, isPinned);
});
</script>

</main>

