---
title: Loader
type: styleguide
layout: layout-styleguide
name: loader
section: scriptcoeur
<!-- status: --draft -->
source: ../
---

<main markdown="1">

## Loader Animation

Sometimes sites will flash an unstyled ugly mess while the css and js loading (for example with the `sizer`). You can add a "loaded" state that doubles as an intro animation.

- add class `--loaded` to body once the page is loaded, or attach to a `settimeout` timer, as is shown below
- give the `body` tag a neutral, unloaded state (e.g. `opacity:0`)

~~~html
<script>
  function onLoadPage() {
    $('._loader').addClass('--loaded');
  }

  $(document).ready(function() {
    // hide loader; reveal page
    window.setTimeout(onLoadPage, 400)
  });
</script>
~~~

The CSS is straight-forward. It looks decent with easing attached.

~~~css
._loader {
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



</main>
