---
title: Grid Markers
type: styleguide
layout: layout-styleguide
name: gridmarkers
section: scriptcoeur
<!-- status: --tbd -->
source: ../
---


<main markdown="1">

## Grid Markers

`_gridmarkers.scss` 

Useful tool for designing and speccing new designs, or for the hipster "showing the inner-workings"-of-a-site look.

- just include the js file; no init needed
- the grids are drawn with fixed position on screen, so the grids can't be contained w/o modification
- `_grid-markers` is the container class for the grids and can be placed anywhere
- `data-cols="6"` tells how many columns should be drawn. Not currently responsive, but can be changed dynamically in JS
- the content width of a container element is calculated by adding a `_grid-marker-basis` class to the element. In this example the grid is drawn with the example as basis, and not as the entire frame or site (though that's possible).

<div class="_styleguide-example" markdown="1">

  <script src="../javascripts/scriptcoeur/gridmarkers.js" type="text/javascript"></script>

  <div class="_grid-markers-basis">
    <div class="_grid-six" >
      <div class="_padding _margin-bottom _color-bg-white">One col</div>
    </div>

    <div class="_grid-three" >
      <div class="_padding _margin-bottom _color-bg-white">2x3 cols</div>
      <div class="_padding _margin-bottom _color-bg-white">2x3 cols</div>
      <div class="_padding _margin-bottom _color-bg-white">2x3 cols</div>
    </div>

    <div class="_grid-one " >
      <div class="_padding _margin-bottom _color-bg-white">Six columns</div>
    </div>
  </div>

  <div class="_grid-markers" data-cols="6">
  </div>
</div>

</main>


