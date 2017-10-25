---
title: Borders
type: styleguide
layout: layout-styleguide
name: border
section: basics
source: ../
---


<main markdown="1">

## Borders

`_borders.scss`

All kinds of borders. Borders are defined as the following, with 2px borders as the main width.

~~~scss
$border-line: 1px;      ._border-line { border-width: $border-line }
$border-thin: 2px;      ._border-thin { border-width: $border-thin }
$border-medium: 3px;    ._border-medium { border-width: $border-medium }
$border-thick: 6px;     ._border-thick { border-width: $border-thick }
$border-massive: 12px;  ._border-massive { border-width: $border-massive }
~~~


Borders are used to indicate content groups, edges of components, and to group written content into more manageable chunks.

<div class="_styleguide-example" markdown="1">
  Here is some text
  <hr class="_border-divider-skinny" />
  Here is some text
</div>
~~~html
<hr class="_border-divider-skinny" />
~~~

</main>


