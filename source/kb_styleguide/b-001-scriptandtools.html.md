---
title: Scripts, Tools, Resources
type: styleguide
layout: layout-knowbase
name: scriptsandtools
section: scriptcoeur
<!-- status: --draft -->
source: ../
---

<main markdown="1">

## Scriptcoeur

Find a way to include source or CDN include scripts here, ex lodash. 
{: ._message .--warning }

Add content: chrome plugins: colorzilla, whatfont, onetab, restlet, grammarly, spectrum, full page screen capture, GA debug, React developer tools, UsePanda
reading list / sources of inspiration: usepanda, sidebar, designernews, hacker news, Medium / Daily Digest (freecodecamp), Product Hunt, CodePen mailing list, 
tutorials/inspiration/ux guides: alistapart.com, tympanus.net, Smashing Magazine
{: ._message .--warning }


Some components require JS to work properly. Examples are provided to each component in separate js files, under the `_scriptcoeur` folder.

- Focus on production speed
- Use as much open source as possible
- Don't reinvent the wheel

Almost everything makes extensive usage of jQuery, so it's included in scriptcoeur `scriptcoeur/plugins/jquery.min.js`.



### Usage

Easiest way is to just include the js file in html and call the corresponding function (This is quick for development), but you can also integrate it into your own code (copypasta).

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


## Plugins & Tools

Some of these are tools, others are plugins. Plugins can be found at `scriptcoeur/plugins/[pluginName]` and may be required for some of the scripts. To keep things together, both CSS and JS files should be under the same plugin folder.


#### Tricks

<div class="_grid-three _margin-bottom" >

<div class="_card " markdown="1">
__[Fluid Typography](
https://www.smashingmagazine.com/2016/05/fluid-typography)__

Typography that scales with the window.
</div>

<div class="_card " markdown="1">
__[Animated Lines](
https://tympanus.net/codrops/2016/10/12/animated-decorative-lines/)__

Animated decorative grid lines
</div>

</div>



#### Creative

<div class="_grid-three _margin-bottom" >



<div class="_card" markdown="1">
__[Web Gradients](https://webgradients.com/)__

Make gradients easier
</div>

<div class="_card" markdown="1">
__[Froala Design Blocks](https://www.froala.com/design-blocks/)__

Page template ideas
</div>

<div class="_card" markdown="1">
__[Canva](https://www.canva.com/)__

Colors, colors, colors
</div>

<div class="_card" markdown="1">
__[UnDraw](https://undraw.co/)__

Illustrations &amp; Icons
</div>

<div class="_card" markdown="1">
__[Instagram CSS](https://picturepan2.github.io/instagram.css/)__

CSS-based image filters
</div>

<div class="_card" markdown="1">
__[Designbetter.co](https://www.designbetter.co/design-systems-handbook/introducing-design-systems)__

Design Systems handbook
</div>

<div class="_card" markdown="1">
__[Hemingway](http://www.hemingwayapp.com/)__

Copywriting Helper
</div>

<div class="_card" markdown="1">
__[SVG OMG](https://jakearchibald.github.io/svgomg/)__

Minimizes SVG files.
</div>

<div class="_card" markdown="1">
__[tinyJPG](http://tinyjpg.com/)__

Minimizes JPG and PNG files by a lot.
</div>

<div class="_card" markdown="1">
__[Video Smaller](http://www.videosmaller.com/)__

Video Compression
</div>

<div class="_card" markdown="1">
__[Color Hunt](http://colorhunt.co/)__

Color Palette Discovery
</div>

<div class="_card" markdown="1">
__[Surge Host](https://surge.sh/pricing)__

Static site host w/ password protection
</div>

<div class="_card" markdown="1">
__[Wordmark](https://wordmark.it/)__

Fast font browser
</div>

<div class="_card" markdown="1">
__[Better Placeholder](https://betterplaceholder.com/)__

Custom image placeholder
</div>





</div>







#### Code & Dev

<div class="_grid-three _margin-bottom" >




<div class="_card" markdown="1">
__[Micron JS](https://webkul.github.io/micron/)__

Micro-interaction library
</div>



<div class="_card " markdown="1">
__[30Secs of Code](https://github.com/Chalarangelo/30-seconds-of-code)__

Easily understood code examples
</div>

<div class="_card " markdown="1">
__[Hey Meta](http://www.heymeta.com/)__

Helps w/ Meta headers
</div>


<div class="_card " markdown="1">
__[PopMotion](https://popmotion.io/)__

Animation &amp; motion engine.
</div>

<div class="_card " markdown="1">
__[ListJS](https://listjs.com/)__

List sort &amp; filter plugin.
</div>


<div class="_card " markdown="1">
__[Storybook UI](https://storybook.js.org/)__

UI dev environment (for React).
</div>


<div class="_card " markdown="1">
__[unCSS](https://github.com/giakki/uncss)__

Removes unused CSS selectors.
</div>


<div class="_card " markdown="1">
__[Webpage Test](https://www.webpagetest.org/)__

Test page load speed.
</div>


<div class="_card " markdown="1">
__[a11yproject](https://a11yproject.com/)__

Accessibility guideline
</div>

<div class="_card " markdown="1">
__[CSS Tricks A11y](https://css-tricks.com/accessibility-testing-tools/)__

Accessibility app list.
</div>


<div class="_card " markdown="1">
__[tota11y](http://khan.github.io/tota11y/)__

Accessibility audit bookmarklet.
</div>


<div class="_card " markdown="1">
__[A11y](https://addyosmani.com/a11y/)__

Accessibility audit + testing.
</div>



<div class="_card " markdown="1">
__[Backstop JS](https://github.com/garris/BackstopJS)__

Visual regression testing.
</div>



<div class="_card " markdown="1">
__[Frontend Checklist](https://frontendchecklist.io)__

Basic, useful front-end checklist.
</div>



<div class="_card " markdown="1">
__[Flow](https://flow.org/)__

Static Type Checker.
<!-- <script src="https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js"></script> -->
</div>



<div class="_card " markdown="1">
__[Mo JS](http://mojs.io/)__

Motion for the web.
<!-- <script src="https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js"></script> -->
</div>


<div class="_card " markdown="1">
__[lodash](https://lodash.com/)__

Useful JS helpers.
<!-- <script src="https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js"></script> -->
</div>

<div class="_card " markdown="1">
__[Slick](http://kenwheeler.github.io/slick/)__

Simple carousel plugin.
</div>

<div class="_card " markdown="1">
__[Barba JS](http://barbajs.org/)__

Fluid static page transitions
</div>

<div class="_card" markdown="1">
__[Transfonter](https://transfonter.org/)__

Converts fonts into web fonts, w/ CSS
</div>

<div class="_card" markdown="1">
__[Stripe](https://stripe.com/)__

Integrated Payments API. Helper: [Stripe Connect](https://stripe.com/connect)
</div>

<div class="_card" markdown="1">
__[Paypal](https://paypal.com/)__

Less-integrated payment. Can connect [Venmo now](https://help.venmo.com/hc/en-us/articles/217042888-How-It-Works).
</div>

<div class="_card" markdown="1">
__[Rough JS](https://roughjs.com/)__

Creates a sketchy-look for components.
</div>

<div class="_card" markdown="1">
__[Basic Scroll](https://basicscroll.electerious.com/)__

Scroller / CSS Var changer.
</div>

<div class="_card" markdown="1">
__[Rellax JS](https://dixonandmoe.com/rellax/)__

Parallax scroller.
</div>

<div class="_card" markdown="1">
__[Anime JS](https://anime.js/)__

JS Animation Engine.
</div>

<div class="_card" markdown="1">
__[ScrollMonitor](https://github.com/stutrek/scrollMonitor)__

Element scroll watcher.
</div>

<div class="_card" markdown="1">
__[Twilio](https://www.twilio.com)__

SMS, Phone, Chat API.
</div>

<div class="_card" markdown="1">
__[Pusher](https://pusher.com/chatkit)__

Push updates and Chat
</div>

<div class="_card" markdown="1">
__[FeathersJS](https://feathersjs.com/)__

REST and realtime API layer.
</div>


<div class="_card" markdown="1">
__[ElectronJS](https://electronjs.org)__

HTML/JS/CSS for Desktop apps 
</div>


<div class="_card" markdown="1">
__[BoardgameIO](https://github.com/google/boardgame.io)__

State management for turn-based games
</div>



</div>






#### Teamwork

<div class="_grid-three _margin-bottom" >

<div class="_card " markdown="1">
__[Slack](https://slack.com/)__

Real time chat room for teams. Can get distracting.
</div>

<div class="_card" markdown="1">
__[Realtime Board](http://realtimeboard.com)__

Real-time collaborative white board.
</div>

<div class="_card" markdown="1">
__[Appear.in](https://appear.in)__

Free browser video/audio chat
</div>

</div>





#### Other


<div class="_grid-three _margin-bottom" >

<div class="_card" markdown="1">
__[Appear.in](https://appear.in)__

Free browser video/audio chat
</div>

<div class="_card" markdown="1">
__[Plus Codes](https://plus.codes)__

Non-address "addresses" for anyone
</div>

<div class="_card" markdown="1">
__[TransferWise](https://transferwise.com/us/)__

Cheap international money transfer system
</div>

<div class="_card" markdown="1">
__[ButterCal](https://buttercal.com/)__

Simple Scheduling
</div>

<div class="_card" markdown="1">
__[Ticket Tailor](https://www.tickettailor.com/)__

Simple ticketing integration
</div>



</div>




</main>

