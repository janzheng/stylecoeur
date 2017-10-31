---
title: Smooth Scroll
name: smoothScroll
type: styleguide
layout: layout-styleguide
section: scriptcoeur
<!-- status: --draft -->
source: ../
---

<main markdown="1">

## Smooth Scroll

<div class="_message --warning" markdown="1">
  add complex / targeted scrolling, horizontal scrolling; convert into reusable component
</div>


Smooth scroll intercepts anchor links and tags, and URL anchors (e.g. `http://mysite.com#anchor`) and scrolls the page smoothly to target (otherwise browsers just jump).

- requires JQuery
- method intercepts `href="#"` so `on` events on anchor links don't trigger for jQuery! Don't use `<a>` tags for buttons and non-links!
- `smoothScroll.js` is basic, automagic vertical scrolling w/ no intercepting, and applies scrolling to the body
- `smoothScrollMore.js` does vertical and horizontal scrolling, as well a custom scrolling target

<div class="_styleguide-example">
  <div>
    <a class="" href="#smooth">Basic but Smooth</a>
    <script src="../javascripts/scriptcoeur/smoothScroll.js" type="text/javascript"></script>
  </div>
  The basic scroller doesn't require any JQuery initialization, but lacks complexity. It also doesn't intercept anchor links
</div>
~~~html
<a class="" href="#smooth">Scroll soooo smooth</a>
<script src="../javascripts/scriptcoeur/smoothScroll.js" type="text/javascript"></script>
~~~

Scrolling to a specific target in a specific container:

<div class="_styleguide-example">
  <div class="_button --short --outline" onclick="verticalScrollTo(-50, '#smooth', 'html, body')">Targeted scroll</div>
</div>
~~~html
<div class="_button --short --outline" onclick="verticalScrollTo(0, '#smooth', 'html, body')">Targeted scroll</div>
~~~



<div class="" id="smooth" style="margin-top: 400px">
  So smooth.
</div>

</main>


