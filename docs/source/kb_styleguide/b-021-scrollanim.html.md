---
title: Scroll Animations
type: styleguide
layout: layout-knowbase
name: scroll-animations
section: scriptcoeur
<!-- status: --draft -->
source: ../
---

<main markdown="1">

## Scroll & Content Animations

Scrollmagic can be used to trigger all kinds of scroll-based effects. Sticky nav is one example, but more scroll-based animations and content-reveal are also possible.


### Scroll Up Reveal

[todo: class triggers that reveal when scrolling up and reveal when scrolling down] 


### Intersection Observer

At some point the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) will probably production-ready. Today isn't that day.


### Content Reveal

One example of content reveal is the [Spotify Landing Page](https://www.spotify.com/us/home/) animations trigger on content as they enter the viewport.

- makes content feel "sexier" and "more alive"
- s page loads, some content perform a subtle animation
- content triggers once as it loads in, but doesn't "un-trigger" as you scroll back up
- additional content fades in as you keep scrolling down
- sometimes content fades in at slightly offset times as not to feel uniform

ScrollMagic Notes

- to only animate once, set `scene.reverse(false);`
- either use `setTween` for complicated JS animations, or `toggleClass` for a simpler CSS animation
- attaching an animation class will animate the content independently of scrolling position
- `._scroll_reveal` contains base hidden component styling
- attach `.--revealed` with js for revealed styling
- default styling is fade-in and slight transformation
- `--fade` only fades the object in (no transform)
- `_ease-xxslow` and `_ease-xxxslow` slows down the animations
- add `data-delay='200'` to add some delay time to mix it up

Or if you think this is too hacky, just use [scrollReveal](https://scrollrevealjs.org/)

<div class="_styleguide-example">

  <div class="_grid-two _color-bg-ui _margin-bottom _padding">
    <div class="_card _scrollReveal">
      Left box
    </div>
    <div class="_card _scrollReveal" data-delay="50">
      Right box / 50ms delay
    </div>
    <div class="_card _scrollReveal" data-delay="80">
      Left box 2 / 80ms delay
    </div>
    <div class="_card _scrollReveal" data-delay="220">
      Right box 2 / 220ms delay
    </div>
  </div>

  <div class="_grid-one _color-bg-ui _margin-bottom  _padding">
    <div class="_card _center-margin _scrollReveal --fade">
      Some kind of information here
    </div>
    <div class="_card _center-margin _scrollReveal --fade _ease-xxslow">
      Some more info / xxslow
    </div>
    <div class="_card _center-margin _scrollReveal _ease-xxxslow">
      Even more info / xxxslow
    </div>
  </div>

  <div class="_grid-two _color-bg-ui _margin-bottom _padding">
    <div class="_card _scrollReveal --fade ">
      Left box / fade
    </div>
    <div class="_card _scrollReveal --fade " data-delay="50">
      Right box / fade
    </div>
    <div class="_card _scrollReveal --fade " data-delay="80">
      Left box 2 / fade
    </div>
    <div class="_card _scrollReveal --fade " data-delay="220">
      Right box 2 / fade
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.js"></script>

  <script src="../javascripts/scriptcoeur/scrollreveal.js" type="text/javascript"></script>
</div>
~~~html

  <div class="_grid-two _color-bg-ui _margin-bottom _padding">
    <div class="_card _scrollReveal">
      Left box
    </div>
    <div class="_card _scrollReveal">
      Right box
    </div>
    <div class="_card _scrollReveal">
      Left box 2 
    </div>
    <div class="_card _scrollReveal">
      Right box 2 
    </div>
  </div>

  <div class="_grid-one _color-bg-ui _margin-bottom  _padding">
    <div class="_card _center-margin _scrollReveal">
      Some kind of information here
    </div>
    <div class="_card _center-margin _scrollReveal">
      Some more kind of information here
    </div>
    <div class="_card _center-margin _scrollReveal">
      Even more of some kind of information here
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.js"></script>

  <script src="../javascripts/scriptcoeur/scrollreveal.js" type="text/javascript"></script>
~~~



### Content Animation

Here's another wacky example of combining scrolling and animations. Performance isn't exactly optimized, but it's an example of what can be done.


<div class="_styleguide-example _color-bg-transparent">
  <div class="teeth-collection">
  </div>

  <!-- <div class="_tooth _tooth-svg">{% include tooth.svg %}</div> -->
  <div class="_tooth _tooth-img">
    <img class="_tooth-img" src="../images/tooth.png" />
  </div>

  <div class="_teeth-rain">
  </div>


  <div class="hero">
    <div class="grid-container gr-one ">
      <div class="bg-teeth">

        <div class="_teeth-field">
        </div>

      </div>

      <section class="tooth-example" style="height: 800px; overflow-y: scroll">

      </section>
    </div>
  </div>



  <!-- external -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.js"></script>


  <script>

  // teeth!!!

  // home-page hero teeth grid

  var teethFieldController = new ScrollMagic.Controller();
  var teethScene1, teethScene2;

  function getRand(high, low = 0) {
    return Math.floor(Math.random() * high) + low;
  }


  function generateTeethField() {

    // tooth-field 
    /*  ----------------------------------------------------------------------------- */
    // large background-grid of teeth, positioned and rotated differently (instead of using a gif)
    // can animate slightly on scroll for eerie effect

    // garbage collect at start
    $('._teethField').remove(); // remove dom elems
    if(teethScene1) teethScene1.destroy();
    if(teethScene2) teethScene1.destroy();
    // remove scenes

    const vGap = 12, cGap = 36;
    const windowWidth = $(window).width();
    const _tooth = $('._tooth'); // the tooth to clone
    const scale = 0.3;
    var z = -1;
    var fieldCols = Math.floor(windowWidth / ( $(_tooth).width() * scale + cGap )) + 1 , 
        fieldRows = 7;
    // console.log(fieldCols);


    for(c=0; c<fieldCols; c++) {
      var left = c * ($(_tooth).width() * scale + cGap);

      for(r=0; r<fieldRows; r++) {
        var obj = $(_tooth).clone().removeClass('_tooth').addClass('_teethField');
        var rotation = z;// * 45;
        var styles = {
          left : left,
          top: r * ($(_tooth).height() * scale + vGap),
          transform: `rotate(${rotation}deg) scale(${scale}) `,
        };

        var colName = 'teethCol-' + (z+2);
        obj.addClass(colName);
        obj.css(styles);
        obj.attr('id', 'teethField-'+c+'-'+r);
        $('._teeth-field').append(obj);
        z = z * -1;

      }
      z = z * -1;
    }

    // if(!isMobile) {
      // moved out of the loop and using a class for two col types to save memory
      teethScene1 = new ScrollMagic.Scene({triggerElement: '.teethCol-1', duration: $(window).height() + 600, offset: -0 - ( $(_tooth).width() * scale + cGap )})
        // .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
        .setTween( '.teethCol-1 *', {rotation: -80, opacity: 0.8})
        .addTo(teethFieldController); 

      teethScene2 = new ScrollMagic.Scene({triggerElement: '.teethCol-3', duration: $(window).height() + 600, offset: -0 - ( $(_tooth).width() * scale + cGap )})
        // .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
        .setTween( '.teethCol-3 *', {rotation: 180, opacity: 0.7})
        .addTo(teethFieldController); 


      teethRainScenes.push(teethScene1);
      teethRainScenes.push(teethScene2);
    // }
  }

  // tooth-rain 
  /*  ----------------------------------------------------------------------------- */
  // fun use of random numbers to generate positions, rotations, and travel speed


  // # teeth depends on screen size
  /*
      css breakpoints

      $width_site_min: 360px; // absolute minimum site width
      $width_xs_min: 0px !default; 
      $width_xs_max: 767px !default;

      $width_magic: 660px !default; // somehow this seems to be the magical breaking point

      // "tablet"
      $width_sm_min: 768px !default;
      $width_sm_max: 991px !default;

      // "desktop"
      $width_md_min: 992px !default;
      $width_md_max: 1199px !default;

      // "wide"
      $width_lg_min: 1200px !default;
  */

  var _width; // start width for weird jquery scroll / resize issue
  var teethRainScenes = [];
  var teethRainController = new ScrollMagic.Controller();

  function generateTeethRain() {

    // reset the scenes and dom
    if(teethRainScenes.length > 0) {
      teethRainScenes.forEach(function(s) {
        s.destroy();
      })
      $('._teethRain').each(function() {
        $(this).remove();
      });

      teethRainScenes = []
    }


    const windowWidth = $(window).width();
    var toothCount = 0, teeth = [];
    const _tooth = $('._tooth'); // the tooth to clone
    const boundX_min = 40, boundX_max = $(window).width() - 200,
          boundY_min = $('.tooth-example').offset().top, boundY_max = $('body').height() - $('.footer').height();

    if (windowWidth > 992) {
      toothCount = 9;
    } else {
      toothCount = 5;
    }
    // if (isMobile) {
    //   toothCount = 3;
    // }


    console.log(boundX_min, boundX_max, boundY_min, boundY_max)

    // construct teeth objects
    for(i=0; i<toothCount; i++) {
      var tooth = {
        left: getRand(boundX_max, boundX_min),
        top: getRand(boundY_max, boundY_min), //boundY_max - boundY_min * Math.log(1-Math.random(0,1))/(-3), // Math.log(1-getRand(0,1))/(-6), //boundY_max, boundY_min
        rotY: getRand(360, 120) * (Math.abs(i - toothCount/2) / (i - toothCount/2) ), // latter ensure half go one way, half the other
        opacity: Math.random() * 0.16 + 0.008,
        scroll_rot: getRand(360, 120) * (Math.abs(i - toothCount/2) / (i - toothCount/2) ),
        scroll_y: Math.abs(Math.exp(Math.random(0,1000)) - Math.random(0,2)) * 1200 //getRand(3000, 400), // wild randall teeth fall up
      }
      teeth.push(tooth);

      // console.log('top?' , boundY_min + Math.log(1-Math.random(0,1))/(-2) * boundY_max ) 
      // console.log(tooth);

      // create dom objects
      var obj = $(_tooth).clone();
      obj.removeClass('_tooth').addClass('_teethRain');
      var styles = {
        left : tooth.left,
        top: tooth.top,
        transform: `rotateY(${tooth.rotY})`,
        opacity: tooth.opacity
      };
      obj.css(styles);
      obj.attr('id', 'tooth-'+i);
      // console.log(obj)
      // add it!
      $('._teeth-rain').append(obj);


      // if(!isMobile) {
      teethRainController.update();

      var teethRainScene = new ScrollMagic.Scene({triggerElement: '#' + obj.attr('id'), duration: 3500, triggerHook: 'onEnter', offset: 0})
        .setTween( '#' + obj.attr('id') + ' *', {rotation: tooth.scroll_rot, y: -tooth.scroll_y, ease: Linear.easeNone})
        .addTo(teethRainController); 

      teethRainScenes.push(teethRainScene);
      // }
    }


  }


  // jquery scroll triggers resize when window width stays the same
  function resize() {
    if($(window).width() != _width) {
      // $('.js-test').append('<div>[Resize: '+$(window).width()+']</div>')
      regen();
      _width = $(window).width();
    }
  }


  function regen() {
    // if(!isMobile) {
      // $('.js-test').append('<div>Regen:'+_width+'</div>')
      generateTeethRain();
      generateTeethField();
    // }
  }


  $(document).ready(function() {
    var windowHeight = $(window).height();
    _width = $(window).width();

    // teeth animations
    regen();
  });

  jQuery(window).on('resize', _.throttle(resize, 2000));
  </script>
</div>
~~~html
<div class="teeth-collection">
  </div>

  <!-- <div class="_tooth _tooth-svg">{% include tooth.svg %}</div> -->
  <div class="_tooth _tooth-img">
    <img class="_tooth-img" src="../images/tooth.png" />
  </div>

  <div class="_teeth-rain">
  </div>


  <div class="hero">
    <div class="grid-container gr-one ">
      <div class="bg-teeth">

        <div class="_teeth-field">
        </div>

      </div>

      <section class="tooth-example" style="height: 800px; overflow-y: scroll">

      </section>
    </div>
  </div>



  <!-- external -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.js"></script>


  <script>

  // teeth!!!

  // home-page hero teeth grid

  var teethFieldController = new ScrollMagic.Controller();
  var teethScene1, teethScene2;

  function getRand(high, low = 0) {
    return Math.floor(Math.random() * high) + low;
  }


  function generateTeethField() {

    // tooth-field 
    /*  ----------------------------------------------------------------------------- */
    // large background-grid of teeth, positioned and rotated differently (instead of using a gif)
    // can animate slightly on scroll for eerie effect

    // garbage collect at start
    $('._teethField').remove(); // remove dom elems
    if(teethScene1) teethScene1.destroy();
    if(teethScene2) teethScene1.destroy();
    // remove scenes

    const vGap = 12, cGap = 36;
    const windowWidth = $(window).width();
    const _tooth = $('._tooth'); // the tooth to clone
    const scale = 0.3;
    var z = -1;
    var fieldCols = Math.floor(windowWidth / ( $(_tooth).width() * scale + cGap )) + 1 , 
        fieldRows = 7;
    // console.log(fieldCols);


    for(c=0; c<fieldCols; c++) {
      var left = c * ($(_tooth).width() * scale + cGap);

      for(r=0; r<fieldRows; r++) {
        var obj = $(_tooth).clone().removeClass('_tooth').addClass('_teethField');
        var rotation = z;// * 45;
        var styles = {
          left : left,
          top: r * ($(_tooth).height() * scale + vGap),
          transform: `rotate(${rotation}deg) scale(${scale}) `,
        };

        var colName = 'teethCol-' + (z+2);
        obj.addClass(colName);
        obj.css(styles);
        obj.attr('id', 'teethField-'+c+'-'+r);
        $('._teeth-field').append(obj);
        z = z * -1;

      }
      z = z * -1;
    }

    // if(!isMobile) {
      // moved out of the loop and using a class for two col types to save memory
      teethScene1 = new ScrollMagic.Scene({triggerElement: '.teethCol-1', duration: $(window).height() + 600, offset: -0 - ( $(_tooth).width() * scale + cGap )})
        // .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
        .setTween( '.teethCol-1 *', {rotation: -80, opacity: 0.8})
        .addTo(teethFieldController); 

      teethScene2 = new ScrollMagic.Scene({triggerElement: '.teethCol-3', duration: $(window).height() + 600, offset: -0 - ( $(_tooth).width() * scale + cGap )})
        // .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
        .setTween( '.teethCol-3 *', {rotation: 180, opacity: 0.7})
        .addTo(teethFieldController); 


      teethRainScenes.push(teethScene1);
      teethRainScenes.push(teethScene2);
    // }
  }

  // tooth-rain 
  /*  ----------------------------------------------------------------------------- */
  // fun use of random numbers to generate positions, rotations, and travel speed


  // # teeth depends on screen size
  /*
      css breakpoints

      $width_site_min: 360px; // absolute minimum site width
      $width_xs_min: 0px !default; 
      $width_xs_max: 767px !default;

      $width_magic: 660px !default; // somehow this seems to be the magical breaking point

      // "tablet"
      $width_sm_min: 768px !default;
      $width_sm_max: 991px !default;

      // "desktop"
      $width_md_min: 992px !default;
      $width_md_max: 1199px !default;

      // "wide"
      $width_lg_min: 1200px !default;
  */

  var _width; // start width for weird jquery scroll / resize issue
  var teethRainScenes = [];
  var teethRainController = new ScrollMagic.Controller();

  function generateTeethRain() {

    // reset the scenes and dom
    if(teethRainScenes.length > 0) {
      teethRainScenes.forEach(function(s) {
        s.destroy();
      })
      $('._teethRain').each(function() {
        $(this).remove();
      });

      teethRainScenes = []
    }


    const windowWidth = $(window).width();
    var toothCount = 0, teeth = [];
    const _tooth = $('._tooth'); // the tooth to clone
    const boundX_min = 40, boundX_max = $(window).width() - 200,
          boundY_min = $('.tooth-example').offset().top, boundY_max = $('body').height() - $('.footer').height();

    if (windowWidth > 992) {
      toothCount = 9;
    } else {
      toothCount = 5;
    }
    // if (isMobile) {
    //   toothCount = 3;
    // }


    console.log(boundX_min, boundX_max, boundY_min, boundY_max)

    // construct teeth objects
    for(i=0; i<toothCount; i++) {
      var tooth = {
        left: getRand(boundX_max, boundX_min),
        top: getRand(boundY_max, boundY_min), //boundY_max - boundY_min * Math.log(1-Math.random(0,1))/(-3), // Math.log(1-getRand(0,1))/(-6), //boundY_max, boundY_min
        rotY: getRand(360, 120) * (Math.abs(i - toothCount/2) / (i - toothCount/2) ), // latter ensure half go one way, half the other
        opacity: Math.random() * 0.16 + 0.008,
        scroll_rot: getRand(360, 120) * (Math.abs(i - toothCount/2) / (i - toothCount/2) ),
        scroll_y: Math.abs(Math.exp(Math.random(0,1000)) - Math.random(0,2)) * 1200 //getRand(3000, 400), // wild randall teeth fall up
      }
      teeth.push(tooth);

      // console.log('top?' , boundY_min + Math.log(1-Math.random(0,1))/(-2) * boundY_max ) 
      // console.log(tooth);

      // create dom objects
      var obj = $(_tooth).clone();
      obj.removeClass('_tooth').addClass('_teethRain');
      var styles = {
        left : tooth.left,
        top: tooth.top,
        transform: `rotateY(${tooth.rotY})`,
        opacity: tooth.opacity
      };
      obj.css(styles);
      obj.attr('id', 'tooth-'+i);
      // console.log(obj)
      // add it!
      $('._teeth-rain').append(obj);


      // if(!isMobile) {
      teethRainController.update();

      var teethRainScene = new ScrollMagic.Scene({triggerElement: '#' + obj.attr('id'), duration: 3500, triggerHook: 'onEnter', offset: 0})
        .setTween( '#' + obj.attr('id') + ' *', {rotation: tooth.scroll_rot, y: -tooth.scroll_y, ease: Linear.easeNone})
        .addTo(teethRainController); 

      teethRainScenes.push(teethRainScene);
      // }
    }


  }


  // jquery scroll triggers resize when window width stays the same
  function resize() {
    if($(window).width() != _width) {
      // $('.js-test').append('<div>[Resize: '+$(window).width()+']</div>')
      regen();
      _width = $(window).width();
    }
  }


  function regen() {
    // if(!isMobile) {
      // $('.js-test').append('<div>Regen:'+_width+'</div>')
      generateTeethRain();
      generateTeethField();
    // }
  }


  $(document).ready(function() {
    var windowHeight = $(window).height();
    _width = $(window).width();

    // teeth animations
    regen();
  });

  jQuery(window).on('resize', _.throttle(resize, 2000));
  </script>
~~~

</main>

