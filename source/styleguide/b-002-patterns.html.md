---
title: Patterns
type: styleguide
layout: layout-styleguide
name: patterns
section: scriptcoeur
<!-- status: --tbd -->
source: ../
---

<main markdown="1">

## Script Patterns

Common, useful script patterns

#### Loaded Animation

Sometimes sites will flash an unstyled ugly mess while the css and js loading (for example with the `sizer`). You can add a "loaded" state that doubles as an intro animation.

- add class `--loaded` to body once the page is loaded, or attach to a `settimeout` timer, as is shown below
- give the `body` tag a neutral, unloaded state (e.g. `opacity:0`)

~~~html
<script>
  function onLoadPage() {
    $('body').addClass('--loaded');
  }

  $(document).ready(function() {
    // hide loader; reveal page
    window.setTimeout(onLoadPage, 400)
  });
</script>
~~~

The CSS is straight-forward. It looks decent with easing attached.

~~~css
body {
  width: 100%;
  position: relative;

  // hide ugly loader
  @extend %ease-slow;
  opacity: 0;
  top: 10px;

  &.--loaded {
    @extend %ease-slow;
    opacity: 1;
    top: 0;
  }
}
~~~



#### onResize & Throttle

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
