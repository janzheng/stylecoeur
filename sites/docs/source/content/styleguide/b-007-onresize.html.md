---
title: onResize
type: styleguide
layout: layout-coeur-knowbase
name: onresize
section: scriptcoeur
<!-- status: --draft -->
source: ../../
---

<main markdown="1">

## onResize & Throttle

Add all the layout code that depends on window size in a function called `onResize()` that gets called whenever the window is resized. Don't forget to call `onResize` for the first time on load. Also don't forget to throttle with `lodash.js`. Build it like async programming.

<div class="_styleguide-example">
  Resize the window
  <div class="resizer">Window size:</div>

  <script src="https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js"></script>
  <script>
    $(document).ready(function() {
      onResize();
    });

    function onResize() {
      $('.resizer').html('Window size: ' + $(window).width());
    }
    $(window).on('resize', _.throttle(onResize, 500));
  </script>

</div>
~~~ html
<div class="resizer">Window size:</div>

<script src="https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js"></script>
<script>
  $(document).ready(function() {
    onResize();
  });

  function onResize() {
    $('.resizer').html('Window size: ' + $(window).width());
  }
  $(window).on('resize', _.throttle(onResize, 500));
</script>
~~~

</main>
