---
title: Borders
type: styleguide
layout: layout-styleguide
name: border
section: fundamental
source: ../
---


<main markdown="1">

## Borders

`_borders.scss`

All kinds of borders. Standard borders have a width of 2px with a color of `$color-ui` .

Borders are used to indicate content groups, edges of components, and to group written content into more manageable chunks.

<div class="_styleguide-example">
  <div class="_grid-five">
    <div class="_box --p4 _border --line _color-border-main _color-bg-white">
    </div>
    <div class="_box --p4 _border --thin _color-border-main _color-bg-white">
    </div>
    <div class="_box --p4 _border --base _color-border-main _color-bg-white">
    </div>
    <div class="_box --p4 _border --thick _color-border-main _color-bg-white">
    </div>
    <div class="_box --p4 _border --massive _color-border-main _color-bg-white">
    </div>
  </div>
</div>
~~~html
<div class="_grid-five">
  <div class="_box --p4 _border --line _color-bg-white">
  </div>
  <div class="_box --p4 _border --thin _color-bg-white">
  </div>
  <div class="_box --p4 _border --base _color-bg-white">
  </div>
  <div class="_box --p4 _border --thick _color-bg-white">
  </div>
  <div class="_box --p4 _border --massive _color-bg-white">
  </div>
</div>
~~~
~~~scss
// border sizes
$border-line: 1px;      .--line { border-width: $border-line }
$border-thin: 2px;      .--thin { border-width: $border-thin }
$border-medium: 3px;    .--medium { border-width: $border-medium }
$border-thick: 6px;     .--thick { border-width: $border-thick }
$border-massive: 12px;  .--massive { border-width: $border-massive }

// general border width
$border-base: $border-thin;

._border {
  border: $border-base solid $color-ui;
  border-radius: $radius;
}
~~~



<div class="_styleguide-example" >
  
regular

<hr>

hr.--short

<hr class="--short" />

hr.--thin

<hr class="--thin" />

hr.--thick

<hr class="--thick" />

hr.--massive

<hr class="--massive" />

hr.--thick-text

<hr class="--thick-text _padding-bottom" data-text="Thick border text example">

hr.--dotted

<hr class="--dotted" />

hr.--dotted-thin

<hr class="--dotted-thin" />

--double-thin

<hr class="--double-thin" />

<div class="--double-box-thin _margin-top _margin-bottom" >
  --double-box-thin
</div>

--dashed

<hr class="--dashed" />

--dashed-thin

<hr class="--dashed-thin" />

--triangle

<hr class="--triangle" />

--triangle-2

<hr class="--triangle-2" />

--hatch

<hr class="--hatch" />

</div>
~~~html

regular

<hr>

hr.--short

<hr class="--short" />

hr.--thin

<hr class="--thin" />

hr.--thick

<hr class="--thick" />

hr.--massive

<hr class="--massive" />

hr.--thick-text

<hr class="--thick-text _padding-bottom" data-text="Thick border text example">

hr.--dotted

<hr class="--dotted" />

hr.--dotted-thin

<hr class="--dotted-thin" />

--double-thin

<hr class="--double-thin" />

<div class="--double-box-thin _margin-top _margin-bottom" >
  --double-box-thin
</div>

--dashed

<hr class="--dashed" />

--dashed-thin

<hr class="--dashed-thin" />

--triangle

<hr class="--triangle" />

--triangle-2

<hr class="--triangle-2" />

--hatch

<hr class="--hatch" />
~~~

</main>


