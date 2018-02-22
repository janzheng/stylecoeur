---
title: Cards
type: styleguide
layout: layout-knowbase
name: cards
section: simple
source: ../
---


<main markdown="1">

## Cards

`_cards.scss`


Cards are floating information boxes, similar to what is used on Google's material design, though without the strict usage rules. These are made to stand out, and a box-shadow effect makes them feel like they "pop" out of the screen.

Good source of info: [Cards Best Practices](https://medium.com/@CanvasFlip/best-practices-for-designing-cards-a19f53cab052)

<div class="_styleguide-example">
  <div class="_card _color-bg-white ">
    <h3>Interesting Topic</h3>
    <p class="_padding-none">This is fairly interesting to talk about
    </p>
    <span class="_button --short --outline _margin-none">Find out now!</span>
  </div>
</div>
~~~ html
<div class="_card _color-bg-white ">
  <h3>Interesting Topic</h3>
  <p class="_padding-none">This is fairly interesting to talk about
  </p>
  <span class="_button --short --outline _margin-none">Find out now!</span>
</div>
~~~


<div class="_styleguide-example">
  
  <div class="_grid-two _margin-top-2">
    <a href="#" class="_card-fun-item" style="background-image: url('../images/grumpy.jpg')">
      <div>
        <div class="_card-fun-title"><span>Grumpy Cat</span></div>
        <div class="_card-fun-tags"><span>merf.</span></div>
      </div>
    </a>

    <a href="#" class="_card-fun-item" style="background-image: url('../images/grumpy.jpg')">
      <div>
        <div class="_card-fun-title"><span>Grumpy Cat</span></div>
        <div class="_card-fun-tags"><span>merf.</span></div>
      </div>
    </a>

    <a href="#" class="_card-fun-item" style="background-image: url('../images/grumpy.jpg')">
      <div>
        <div class="_card-fun-title"><span>Grumpy Cat</span></div>
        <div class="_card-fun-tags"><span>merf.</span></div>
      </div>
    </a>
    
  </div>

</div>
~~~html

  <div class="_grid-two _margin-top-2">
    <a href="#" class="_card-fun-item" style="background-image: url('../images/grumpy.jpg')">
      <div>
        <div class="_card-fun-title"><span>Grumpy Cat</span></div>
        <div class="_card-fun-tags"><span>merf.</span></div>
      </div>
    </a>
    
    <a href="#" class="_card-fun-item" style="background-image: url('../images/grumpy.jpg')">
      <div>
        <div class="_card-fun-title"><span>Grumpy Cat</span></div>
        <div class="_card-fun-tags"><span>merf.</span></div>
      </div>
    </a>

    <a href="#" class="_card-fun-item" style="background-image: url('../images/grumpy.jpg')">
      <div>
        <div class="_card-fun-title"><span>Grumpy Cat</span></div>
        <div class="_card-fun-tags"><span>merf.</span></div>
      </div>
    </a>
    
  </div>
~~~


</main>