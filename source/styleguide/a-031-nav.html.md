---
title: Navigation
type: styleguide
layout: layout-styleguide
name: navigation*
section: components
<!-- status: --tbd -->
source: ../
---


<main markdown="1">

## Navigation

`_nav.scss` 

#### Standard Navigation

<div class="_styleguide-todo _format-last-bottom_none _message --warning" markdown="1">
Todo: Sticky menu example, Mobile Menu btn (hamburger / x, with animation and off-canvas), dropdown and overlay menus

</div>

- Combine with `dropdowns` for dropdown functionality
- Nav can be combined with [`scriptcoeur/sticky`](./a-010-sticky.html) for a sticky menu
- `--simple` makes the menu lighter.
- Don't use `<a href="#">` tags. They're not semantic and creates mouse conflicts.

<div class="_styleguide-example" markdown="1">

  <nav class="_nav _padding _color-bg-white _margin-bottom">
    <div class="_grid-one-three _align-vertically">
      <a href="#">Logo</a>
      <div class="_right">
        <a class="_margin-right" href="#intro">Features</a>
        <a class="_margin-right" href="#pricing">Pricing</a>
        <a href="#">Login</a>
        <span class="_button --short --outline _dropdown --right _margin-bottom-none-i _margin-left " >Account <i class="fa fa-angle-down"></i>
          <div class="_dropdown-container --button-width" style="top: 40px">
            <div class="_dropdown-content _padding _left _color-bg-ui">
              <ul>
                <li class="_padding-bottom"><a href="#">option 1</a></li>
                <li><a href="#">option 2</a></li>
              </ul>
            </div>
          </div>
        </span>
      </div>
    </div>
  </nav>

</div>
~~~ html
<nav class="_nav _padding _color-bg-white _margin-bottom">
  <div class="_grid-one-three _align-vertically">
    <a href="#">Logo</a>
    <div class="_right">
      <a class="_margin-right" href="#intro">Features</a>
      <a class="_margin-right" href="#pricing">Pricing</a>
      <a href="#">Login</a>
      <span class="_button --short --outline _dropdown --right _margin-bottom-none-i _margin-left " >Account <i class="fa fa-angle-down"></i>
        <div class="_dropdown-container --button-width" style="top: 40px">
          <div class="_dropdown-content _padding _left _color-bg-ui">
            <ul>
              <li class="_padding-bottom"><a href="#">option 1</a></li>
              <li><a href="#">option 2</a></li>
            </ul>
          </div>
        </div>
      </span>
    </div>
  </div>
</nav>
~~~

#### Sticky Navigation

Sticky Nav is provided as a shortcut here, but it's basically just combining nav with the sticky elements.


<div class="_styleguide-example" markdown="1">

  <div class="_nav-trigger"></div>
  <nav class="_nav _nav-stick _padding _color-bg-white _margin-bottom">
    <div class="_grid-one-three _align-vertically">
      <a href="#">300 px travel</a>
      <div class="_right">
        <a class="_margin-right" href="#intro">Features</a>
        <a class="_margin-right" href="#pricing">Pricing</a>
        <a href="#">Login</a>
        <span class="_button --short --outline _dropdown --right _margin-bottom-none-i _margin-left " >Account <i class="fa fa-angle-down"></i>
          <div class="_dropdown-container --button-width" style="top: 40px">
            <div class="_dropdown-content _padding _left _color-bg-ui">
              <ul>
                <li class="_padding-bottom"><a href="#">option 1</a></li>
                <li><a href="#">option 2</a></li>
              </ul>
            </div>
          </div>
        </span>
      </div>
    </div>
  </nav>

  <!-- external -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
  <!-- optional external -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.js"></script> 


  <!-- script -->
  <script src="../javascripts/scriptcoeur/sticky.js" type="text/javascript"></script>

  <script>
  $(document).ready(function() {
    var triggerElement = "._nav-trigger", 
        target = "._nav-stick", 
        targetClass = "";
        duration = 300;
        isPinned = true;
    _sticky(triggerElement, target, targetClass, duration, isPinned);
  });
  </script>

</div>
~~~html
<div class="_nav-trigger"></div>
<nav class="_nav _nav-stick _padding _color-bg-white _margin-bottom">
  <div class="_grid-one-three _align-vertically">
    <a href="#">300 px travel</a>
    <div class="_right">
      <a class="_margin-right" href="#intro">Features</a>
      <a class="_margin-right" href="#pricing">Pricing</a>
      <a href="#">Login</a>
      <span class="_button --short --outline _dropdown --right _margin-bottom-none-i _margin-left " >Account <i class="fa fa-angle-down"></i>
        <div class="_dropdown-container --button-width" style="top: 40px">
          <div class="_dropdown-content _padding _left _color-bg-ui">
            <ul>
              <li class="_padding-bottom"><a href="#">option 1</a></li>
              <li><a href="#">option 2</a></li>
            </ul>
          </div>
        </div>
      </span>
    </div>
  </div>
</nav>

<!-- external -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
<!-- optional external -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.js"></script> 


<!-- script -->
<script src="../javascripts/scriptcoeur/sticky.js" type="text/javascript"></script>

<script>
$(document).ready(function() {
  var triggerElement = "._nav-trigger", 
      target = "._nav-stick", 
      targetClass = "";
      duration = 300;
      isPinned = true;
  _sticky(triggerElement, target, targetClass, duration, isPinned);
});
</script>
~~~


#### Side Navigation

- Side nav has both __responsive height and width__ restrictions
- Mobile limits will affix the nav to top
- Sliding nav can be added with `--slide` to the `nav` element
- Sliding main content can also have `--slide` attached

<div class="_styleguide-example" markdown="1">

  <div class="_nav-sidenav-container">
    <nav class="--slide">
      <div>
        Logo
      </div>
      <div class="_nav-links">
        <a href="#">Link One</a>
        <a href="#">Link Two</a>
        <a href="#">Link Three</a>
      </div>
    </nav>
    <div class="--slide _padding-left-sm_up">
      Main Content Here
    </div>
  </div>

</div>
~~~ html
<div class="_nav-sidenav-container">
  <nav class="--slide">
    <div>
      Logo
    </div>
    <div class="_nav-links">
      <a href="#">Link One</a>
      <a href="#">Link Two</a>
      <a href="#">Link Three</a>
    </div>
  </nav>
  <div class="--slide _padding-left-sm_up">
    Main Content Here
  </div>
</div>
~~~


#### Nav Menus

Menus that open/close on click or tap. These are offt-criticized for having discoverability and accessibility problems.

- open / close on page nav
- dropdown nav
- off canvas nav
- animation example / push content sideways

[not implemented yet]



</main>

