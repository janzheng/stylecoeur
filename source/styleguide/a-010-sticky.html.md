---
title: Sticky
type: styleguide
layout: layout-styleguide
name: sticky
section: scriptcoeur
status: --tbd
source: ../
---

<main markdown="1">

## Sticky Components

Sticky nav, sticky sidebar, etc.

Uses ScrollMagic to attach classes.

[more to come]


</div>

</main>



<script src="../javascripts/scriptcoeur/sticky.js" type="text/javascript"></script>
<script>
$(document).ready(function() {
  var triggerElement = "._sidebar-trigger", target = "._sidebar", targetClass = "--pinned";
  _sticky(triggerElement, target, targetClass);
});
</script>