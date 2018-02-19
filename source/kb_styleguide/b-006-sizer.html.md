---
title: Sizer
type: styleguide
layout: layout-knowbase
name: sizer
section: scriptcoeur
<!-- status: --draft -->
source: ../
---

<main markdown="1">

## Sizer

Sizer resizes a piece of content dynamically, based on window size.

- define height in % of screen in the element: `data-vheight="50"`
- use a `--loaded` pattern so it's not a flash of ugly
- only really necessary for vertical height as `vh` is buggy
- mobile browser mess with `vh` units when showing/hiding the address bar, this solves for that
- width can be solved with `vw` units 

<div class="_styleguide-example">

  <script src="../javascripts/scriptcoeur/sizer.js" type="text/javascript"></script>
  <h3 class="_sizer-vheight _align-vertically " data-vheight="50">
    50% Screen Height!
  </h3>

</div>
~~~html
<script src="../javascripts/scriptcoeur/sizer.js" type="text/javascript"></script>
<h3 class="_sizer-vheight _align-vertically " data-vheight="50">
  50% Screen Height!
</h3>
~~~


</main>



