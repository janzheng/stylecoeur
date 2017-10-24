---
title: Cards
type: styleguide
layout: layout-styleguide
name: cards
section: simple
source: ../
---


<main markdown="1">

# Cards

`_cards.scss`

Cards are floating information boxes, similar to what is used on Google's material design, though without the strict usage rules. These are made to stand out, and a box-shadow effect makes them feel like they "pop" out of the screen.

Use these to draw attention to a box of special information, maybe even concluded with a call-to-action.


<div class="_styleguide-example">
  <div class="_grid-block">
    <div class="_card _color-bg-white ">
      <h3>Interesting Topic</h3>
      <div class="_padding-bottom"><i class="fa fa-bolt fa-2x"></i></div>
      <p class="_padding-none">This is fairly interesting to talk about. Hey look, there's a bolt. It's Harry Potter's icon! Or is it?
      </p>

      <p>Ready to check it out?</p>

      <span class="_button --thin --pill _margin-none">Find out now!</span>

    </div>
  </div>
</div>
~~~ html
<div class="_card _color-bg-ui">
  <h3>Interesting Topic</h3>
  <div class="_padding-bottom"><i class="fa fa-bolt fa-2x"></i></div>
  <p class="_padding-none">This is fairly interesting to talk about. Hey look, there's a bolt. It's Harry Potter's icon! Or is it?
  </p>

  <p>Ready to check it out?</p>

  <span class="_button --thin --pill _margin-none">Find out now!</span>

</div>
~~~



</main>