---
title: Buttons
type: styleguide
layout: layout-styleguide
name: buttons
section: simple
source: ../
---


<main markdown="1">

## Buttons

`_buttons.scss`

The main navigation uses a two-section grid block of [ one three ], with standard links as navigation buttons. A special `_nav--separator` attribute exists to separate parts of the navigation.

The lighter in-page nav uses a `--simple` attribute that removes some of the heavier styling elements.


Some JS is used to provide the 'sticky nav' functionality, namely ScrollMagic.  `#nav-tr` is the triggering element, and when triggered, the `#nav` gets pinned by ScrollMagic and receives the `--pinned` attribute class for additional styling. Super simple. Note that IDs are used to identify sticky elements, though they could easily be changed to classes instead.


## Links

Links are very simple, and are denoted [with an underline](#) to indicate clickability. They don't have any colors to prevent distration (though that could certainly be amended). The hover state provides a color shift and an easing function to indicate interactivity.

Note that the links in the navigation do not have the underline.



## Buttons

Buttons come in two variations, a default rectangular one and a slimmer call to action. The default can be used anywhere, whereas the slimmer round "pill" button should be used as "calls to action" ('CTA') where users are led down a path to either unerstand more about your app or sign up or pay for services. The pill is in lowercase to appear "friendlier" and lower pressure as well.

<div class="_styleguide-example">
  <button class="_button">Press Me!</button> <button class="_button-pill _button-thin">Press Me!</button>
</div>
~~~html 
  <button class="_button">Press Me!</button> <button class="_button-pill _button-thin">Press Me!</button>
~~~



</main>