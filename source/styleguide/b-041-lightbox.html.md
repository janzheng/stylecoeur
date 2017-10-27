---
title: Lightbox
type: styleguide
layout: layout-styleguide
name: lightbox
section: scriptcoeur
<!-- status: --draft -->
source: ../
---

<main markdown="1">

## Lightbox

Lightboxes are media elements like images or videos that you can click on and which will zoom out onto the page. Lighbox uses the [Lity plugin](https://sorgalla.com/lity/).

Also check out the Gallery for a slightly different take (and plugin)

Include both the CSS and the JS for it to work.

<div class="_styleguide-example">
  <div>
    <a class="--border-none" href="../images/grumpy.jpg" data-lity data-lity-desc="Grumpy Cat">
      <img src="../images/grumpy_sm.jpg" alt="Grumpy Cat" />
    </a>
  </div>
  <a href="https://farm9.staticflickr.com/8642/16455005578_0fdfc6c3da_b.jpg" data-lity data-lity-desc="Photo of a flower">Image</a>
  <a href="#inline" data-lity>Inline</a>
  <a href="//www.youtube.com/watch?v=XSGBVzeBUbk" data-lity>iFrame Youtube</a>
  <a href="//vimeo.com/1084537" data-lity>iFrame Vimeo</a>
  <a href="//maps.google.com/maps?q=San+Francisco" data-lity>Google Maps</a>

  <link href="../javascripts/scriptcoeur/plugins/lity/lity.min.css?" rel="stylesheet">
  <script src="../javascripts/scriptcoeur/plugins/lity/lity.min.js" type="text/javascript"></script>
</div>
~~~html
<a href="https://farm9.staticflickr.com/8642/16455005578_0fdfc6c3da_b.jpg" data-lity data-lity-desc="Photo of a flower">Image</a>
<a href="#inline" data-lity>Inline</a>
<a href="//www.youtube.com/watch?v=XSGBVzeBUbk" data-lity>iFrame Youtube</a>
<a href="//vimeo.com/1084537" data-lity>iFrame Vimeo</a>
<a href="//maps.google.com/maps?q=San+Francisco" data-lity>Google Maps</a>
<link href="../javascripts/scriptcoeur/plugins/lity/lity.min.css?" rel="stylesheet">
<script src="../javascripts/scriptcoeur/plugins/lity/lity.min.js" type="text/javascript"></script>
~~~

</main>


