---
title: Scroll Animations
type: styleguide
layout: layout-styleguide
name: scroll-animations
section: scriptcoeur
status: --draft
source: ../
---

<main markdown="1">

## Scroll Animations

Rough example of a past scroll animation

(teeth example)

<!-- external -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>

<!-- script -->
<script src="../javascripts/scriptcoeur/sticky.js" type="text/javascript"></script>

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

