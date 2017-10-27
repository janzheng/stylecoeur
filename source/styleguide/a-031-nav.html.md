---
title: Navigation
type: styleguide
layout: layout-styleguide
name: navigation*
section: components
<!-- status: --draft -->
source: ../
submenu:
  - [standard, standard-navigation]
  - [sticky, sticky-navigation]
  - [bottom, bottom-navigation]
  - [side nav, side-navigation]
  - [off-canvas, off-canvas-navigation]
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

<div class="_message --warning" markdown="1">
  Requires js file: `scriptcoeur/sticky.js`
</div>

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


#### Bottom Navigation

These replicate mobile app menus, but they're pretty much the same as sticky nav. You can activate the bottom nav once users have scrolled into an area

<div class="_message --warning" markdown="1">
  Requires js file: `scriptcoeur/sticky.js`
</div>


<div class="_styleguide-example" markdown="1">

  <div class="_nav-trigger-bottom"></div>
  <nav class="_nav _nav-bottom _padding _color-bg-white _margin-bottom">
    <div class="_grid-one-three _align-vertically">
      <a href="#">300 px travel</a>
      <div class="_right">
        <a class="_margin-right" href="#intro">Features</a>
        <a class="_margin-right" href="#pricing">Pricing</a>
        <a href="#">Login</a>
        <span class="_button --short --outline _dropdown --right _margin-bottom-none-i _margin-left " >Account <i class="fa fa-angle-down"></i>
          <div class="_dropdown-container --button-width" style="top: -100px">
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
    var triggerElement = "._nav-trigger-bottom", 
        target = "._nav-bottom", 
        targetClass = "";
        duration = 300;
        isPinned = true;
    _sticky(triggerElement, target, targetClass, duration, isPinned, "onEnter", $('._nav-bottom').outerHeight());
  });
  </script>

</div>
~~~html
<div class="_nav-trigger-bottom"></div>
<nav class="_nav _nav-bottom _padding _color-bg-white _margin-bottom">
  <div class="_grid-one-three _align-vertically">
    <a href="#">300 px travel</a>
    <div class="_right">
      <a class="_margin-right" href="#intro">Features</a>
      <a class="_margin-right" href="#pricing">Pricing</a>
      <a href="#">Login</a>
      <span class="_button --short --outline _dropdown --right _margin-bottom-none-i _margin-left " >Account <i class="fa fa-angle-down"></i>
        <div class="_dropdown-container --button-width" style="top: -100px">
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
  var triggerElement = "._nav-trigger-bottom", 
      target = "._nav-bottom", 
      targetClass = "";
      duration = 300;
      isPinned = true;
  _sticky(triggerElement, target, targetClass, duration, isPinned, "onEnter", $('._nav-bottom').outerHeight());
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

#### Off-Canvas Navigation

These are usually triggered by hamburger icons for mobile views, but there are all kinds. These can be similar to side navigation that may slide in from a direction, push the main content, or appear as an overlay. The overlay uses the `modal` example.

<div class="_message --warning" markdown="1">
  Requires js file: `scriptcoeur/nav.js`
</div>


- Directions added with `--right` and `--left`
- Specify `data-push` attribute to indicate which container to push when the panel opens

<div class="_styleguide-example" markdown="1">

  <span id="offcanvas-slide" class="_button --short --outline" onclick="openOffcanvas($('#offcanvas-1'))">Slide Right</span>
  <span id="offcanvas-push" class="_button --short --outline" onclick="openOffcanvas($('#offcanvas-2'))">Push Left</span>
  <span id="overlay" class="_button --short --outline" onclick="openModal($('#offcanvas-2'))"><i class="fa fa-bars"></i> Screen Overlay</span>

  <div id="offcanvas-1" class="_nav-offcanvas --right _color-bg-ui-light _padding" data-width='250'>
    <nav class="">
      <div>
        Logo
      </div>
      <div class="">
        <div><a href="#">Link One</a></div>
        <div><a href="#">Link Two</a></div>
        <div><a href="#">Link Three</a></div>
      </div>
    </nav>
  </div>

  <div id="offcanvas-2" class="_nav-offcanvas --left _color-bg-ui-light _padding" data-width='250' data-push='._styleguide-content'>
    <nav class="">
      <div>
        Logo
      </div>
      <div class="">
        <div><a href="#">Link One</a></div>
        <div><a href="#">Link Two</a></div>
        <div><a href="#">Link Three</a></div>
      </div>
    </nav>
  </div>

  <div class="_modal-popup-container "  >
    <div class="_modal _modal-effect-slideUp">
      <div class="_modal-content">
        <div class="_modal-close" onclick="closeModal()"><i class="fa fa-close"></i></div>
        <div class="_modal-wrapper">
          <h3>Menu Crap</h3>
          <p>This is an example of a popup menu. It's pretty much a modal, so it reuses the modal code.</p>
        </div>
      </div>
    </div>
    <div class="_modal-overlay" onclick="closeModal()"></div>

  </div>


  <script src="../javascripts/scriptcoeur/nav.js" type="text/javascript"></script>

  <script>
    function openModal() {
      $('._modal-popup-container').addClass('--open');
      $('html').addClass('_modal-html');
      $('._modal').addClass('--open');
    }

    function closeModal() {
      $('._modal-popup-container').removeClass('--open');
      $('html').removeClass('_modal-html');
      $('._modal').removeClass('--open');
    }
  </script>

</div>
~~~html
<span id="offcanvas-slide" class="_button --short --outline">Slide Right</span> <span id="offcanvas-push" class="_button --short --outline">Push Left</span>

<div id="offcanvas-1" class="_nav-offcanvas --right _color-bg-ui-light _padding" data-width='250'>
  <nav class="">
    <div>
      Logo
    </div>
    <div class="">
      <div><a href="#">Link One</a></div>
      <div><a href="#">Link Two</a></div>
      <div><a href="#">Link Three</a></div>
    </div>
  </nav>
</div>

<div id="offcanvas-2" class="_nav-offcanvas --left _color-bg-ui-light _padding" data-width='250' data-push='._styleguide-content'>
  <nav class="">
    <div>
      Logo
    </div>
    <div class="">
      <div><a href="#">Link One</a></div>
      <div><a href="#">Link Two</a></div>
      <div><a href="#">Link Three</a></div>
    </div>
  </nav>
</div>


<script src="../javascripts/scriptcoeur/nav.js" type="text/javascript"></script>

<script>

  $(document).ready(function() {
    $('#offcanvas-slide').on('click', function() {
      openOffcanvas($('#offcanvas-1'))
    });
    $('#offcanvas-push').on('click', function() {
      openOffcanvas($('#offcanvas-2'))
    });
  })
</script>

~~~



</main>

