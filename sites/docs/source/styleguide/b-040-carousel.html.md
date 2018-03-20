---
title: Carousel
type: styleguide
layout: layout-coeur-knowbase
name: carousel
section: scriptcoeur
<!-- status: --draft -->
source: ../
---

<main markdown="1">

## Carousel

Carousels are generally a bad idea for important information and calls to action as things tend to get buried. They are good for random playful content though. 

- uses [Slick](http://kenwheeler.github.io/slick/)
- `--grid` shows the containing elements in a grid above mobile sizes; good for icons and smaller elements
- does NOT work with `display: grid` wrapped around the element, even in a template!
- only works within block elements; buggy w/ `display: grid` anywhere in a containing element


<div class="_styleguide-example">
  <link rel="stylesheet" type="text/css" href="../coeur/scriptcoeur/plugins/slick/slick.css"/>
  <link rel="stylesheet" type="text/css" href="../coeur/scriptcoeur/plugins/slick/slick-theme.css"/>
  <script type="text/javascript" src="../coeur/scriptcoeur/plugins/slick/slick.min.js"></script>

  <section class="_content _color-bg-active _margin-top _padding-bottom  _margin-bottom" >
    <div class="_carousel basic">
      <div> 
        Company Name 
      </div>
      <div> 
        Company Name 2
      </div>
      <div> 
        Company Name 3
      </div>
    </div>
  </section>

  Try resizing the browser to mobile for --grid:

  <section class="_content _color-bg-silver-lighter _margin-top _padding-bottom " >
    <div class="_carousel carouselgrid  --grid">
      <div> 
        Company Name 
      </div>
      <div> 
        Company Name 2
      </div>
      <div> 
        Company Name 3
      </div>
      <div> 
        Company Name 4
      </div>
      <div> 
        Company Name 5
      </div>
    </div>
  </section>

  <script>
    var carousel = $(".basic");
    var carouselgrid = $(".carouselgrid");
    var timer;

    carousel.slick();

    function initCarouselGrid() {
      window.clearInterval(timer);

      if( $(window).width() < 768) 
      { // ensure mobile, or we display everything     
        carouselgrid.slick({
          autoplay: true,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        });
        
      } else {
        carouselgrid.slick('unslick');
      }
    }
    $(document).ready(function() {
      initCarouselGrid();
    });
    $( "html" ).change(function() {
      initCarouselGrid();
    });

    jQuery(window).on('resize', _.throttle(initCarouselGrid, 500));

  </script>
</div>




</main>


