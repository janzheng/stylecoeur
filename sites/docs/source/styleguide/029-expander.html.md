---
title: Expander
type: styleguide
layout: layout-coeur-knowbase
name: expander
section: simple
source: ../
---


<main markdown="1">

## Expander

`_expander.scss`

Expander is a simple open/close box. It's not intended to be an accordion, but an independent box that shows more information when requested.

- Good for showing info, but not as a box with interactive elements as the entire container is used to open/close
- Can use `addClass` instead of `toggleClass` and create a specific close button to close the box when open

<div class="_message --warning">
  Requires JS to trigger the open state. Alternately you can build a no-JS checkbox-based solution but I haven't done that
</div>


<div class="_styleguide-example">
  
  <div class="_expander">
    <div class="_expander-icon"> 
      <span class="_anim-right">&rarr;</span> 
    </div>
    <div class="_expander-content">
      <div class="_expander-title">
        Learn how we can bring your <strong>concept from idea to MVP</strong>
      </div>
      <p class="_padding-top">
        We can bring your startup or project idea from concept to a functional, minimally viable product or prototype. We will work with you through concept validation, to various fidelities of wireframes and prototypes. 
      </p>
      <p>
        We use tools like Sketch, Invision, and Axure to validate concepts, and use HTML, SCSS, React, or React Native to bring your concept to life.
      </p>
      <p> 
        Send us a message and <a href="#contact" data-offset-scroll="-2000">let us know how we can help.</a>
      </p>
    </div>
  </div>
  <script>
    $('._expander').on('click', function() {
      $(this).toggleClass('--open');
    });
  </script>
</div>
~~~html
<div class="_expander">
  <div class="_expander-icon"> 
    <span class="_anim-right">&rarr;</span> 
  </div>
  <div class="_expander-content">
    <div class="_expander-title">
      Learn how we can bring your <strong>concept from idea to MVP</strong>
    </div>
    <p class="_padding-top">
      We can bring your startup or project idea from concept to a functional, minimally viable product or prototype. We will work with you through concept validation, to various fidelities of wireframes and prototypes. 
    </p>
    <p>
      We use tools like Sketch, Invision, and Axure to validate concepts, and use HTML, SCSS, React, or React Native to bring your concept to life.
    </p>
    <p> 
      Send us a message and <a href="#contact" data-offset-scroll="-2000">let us know how we can help.</a>
    </p>
  </div>
</div>
<script>
  $('._expander').on('click', function() {
    $(this).toggleClass('--open');
  });
</script>
~~~

</main>

