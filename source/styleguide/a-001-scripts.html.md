---
title: Scripts
type: styleguide
layout: layout-styleguide
name: scripts
section: scriptcoeur
<!-- status: --tbd -->
source: ../
---

<main markdown="1">

## Scriptcoeur

Some components require JS to work properly. Examples are provided to each component in separate js files, under the `_scriptcoeur` folder.


### Usage

Easiest way is to just include the js file in html and call the corresponding function (This is quick for development), but you can also integrate it into your own code.

~~~html
<script src="../javascripts/scriptcoeur/sticky.js" type="text/javascript"></script>
<script>
$(document).ready(function() {
  var triggerElement = "._sidebar-trigger", target = "._sidebar", targetClass = "--pinned";
  _sticky(triggerElement, target, targetClass);
});
</script>
~~~

</main>



<main class="_styleguide-tools" markdown="1">


## 3rd Party Tools


These useful tools will require external, 3rd-party tools. They need to be included separately. Some of them have examples here.


#### Tricks

<div class="_grid-three" >

<div class="_card " markdown="1">
__[Fluid Typography](
https://www.smashingmagazine.com/2016/05/fluid-typography)__

Typography that scales with the window.
</div>

</div>




#### Page-Building Tools

<div class="_grid-three" >


<div class="_card " markdown="1">
__[Barba JS](http://barbajs.org/)__

Fluid static page transitions
</div>

<div class="_card " markdown="1">
__[SVG OMG](https://jakearchibald.github.io/svgomg/)__

Minimizes SVG files.
</div>

<div class="_card" markdown="1">
__[tinyJPG](http://tinyjpg.com/)__

Minimizes JPG and PNG files by a lot.
</div>

<div class="_card" markdown="1">
__[Transfonter](https://transfonter.org/)__

Minimizes JPG and PNG files by a lot.
</div>

<div class="_card" markdown="1">
__[Stripe](https://stripe.com/)__

Integrated Payments API. Helper: [Stripe Connect](https://stripe.com/connect)
</div>

<div class="_card" markdown="1">
__[Paypal](https://paypal.com/)__

Less-integrated payment. Can connect [Venmo now](https://help.venmo.com/hc/en-us/articles/217042888-How-It-Works)
</div>

</div>






#### Teamwork

<div class="_grid-three" >

<div class="_card " markdown="1">
__[Slack](https://slack.com/)__

Real time chat room for teams. Can get distracting.
</div>

<div class="_card" markdown="1">
__[Realtime Board](http://realtimeboard.com)__

Real-time collaborative white board.
</div>

</div>




</main>

