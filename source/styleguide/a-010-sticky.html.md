---
title: Sticky
type: styleguide
layout: layout-styleguide
name: sticky
section: scriptcoeur
<!-- status: --tbd -->
source: ../
---

<main markdown="1">

## Sticky Components

Used for Sticky nav, sticky sidebar, etc. Uses ScrollMagic to attach classes.

#### Sticky Function

- `triggerElement = "._sidebar-trigger"` - class that triggers scrollMagic
- `target = "._sidebar"` - target element
- `targetClass = "--pinned"` - special class attached when in view

- The trigger element should immediately precede the stuck element
- The `--pinned` class makes the target class pinned.

<div class="_styleguide-example-trigger"></div>
<div class="_styleguide-example _margin-bottom-2">
  This example should stick at the top
</div>


~~~ html
<!-- external -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
<!-- optional external -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.js"></script> 

<div class="_styleguide-example-trigger"></div>
<div class="_styleguide-example _margin-bottom-2">
  This example should stick at the top
</div>

<!-- script -->
<script src="../javascripts/scriptcoeur/sticky.js" type="text/javascript"></script>

<script>
$(document).ready(function() {
  var triggerElement = "._styleguide-example-trigger", target = "._styleguide-example", targetClass = "_pinned";
  _sticky(triggerElement, target, targetClass);
});
</script>
~~~


<!-- external -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
<!-- optional external -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.js"></script> 


<!-- script -->
<script src="../javascripts/scriptcoeur/sticky.js" type="text/javascript"></script>

<script>
$(document).ready(function() {
  var triggerElement = "._styleguide-example-trigger", target = "._styleguide-example", targetClass = "_pinned";
  _sticky(triggerElement, target, targetClass);
});
</script>

</main>

