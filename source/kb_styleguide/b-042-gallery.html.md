---
title: Gallery
type: styleguide
layout: layout-styleguide
name: gallery
section: scriptcoeur
<!-- status: --draft -->
source: ../
---

<main markdown="1">

## Gallery

<div class="_styleguide-todo _message --warning" markdown="1">
  can't figure out why zoom animation isn't working
</div>

Photoswipe is very extensible but a pain to get started. [Photoswipe Docs](http://photoswipe.com/ http://photoswipe.com/documentation/getting-started.html)

The `gallery.js` script initializes and builds the Photoswipe component. Photoswipe provides a better experience if it knows the image size. Animation tip on unknown image sizes: [github](https://github.com/dimsemenov/PhotoSwipe/issues/796)

Photoswipe needs a lot of components to work:

- custom html template (needs to be copied; included at bottom)
- `scriptcoeur/gallery.js` custom initialization script
- `scriptcoeur/plugins/photoswipe/photoswipe.css` - plugin default css
- `scriptcoeur/plugins/photoswipe/photoswipe.min.js` - plugin js
- `scriptcoeur/plugins/photoswipe/photoswipe-ui-default.min.js` - plugin UI js
- `scriptcoeur/plugins/photoswipe/default-skin/default-skin.css` - plugin default skin

If thumbnail aspect ratio does not match large image, do not define msrc property for slide objects and enable opacity transition option (showHideOpacity:true, getThumbBoundsFn:false). You can set these in the calling script for `gallery.js`

Check out Lightbox for something simpler. 


<div class="_styleguide-example">

  <!-- actual gallery -->
  <div id="photos-1" class="_gallery _grid-two" itemscope itemtype="http://schema.org/ImageGallery">

    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" >
      <a class="--border-none" href="../images/grumpy.jpg" itemprop="contentUrl" data-size="973x1200">
        <img src="../images/grumpy_sm.jpg" itemprop="thumbnail"  />
      </a>
      <figcaption itemprop="caption description">This is one grumpy cat.</figcaption>
    </figure>

    <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" >
      <a class="--border-none" href="../images/grumpy.jpg" itemprop="contentUrl" data-size="973x1200">
        <img src="../images/grumpy_sm.jpg" itemprop="thumbnail"  />
      </a>
      <figcaption itemprop="caption description">This is also a grumpy cat.</figcaption>
    </figure>

  </div>

  <!-- initialization script -->
  <script src="../javascripts/scriptcoeur/gallery.js" type="text/javascript"></script>

  <link href="../javascripts/scriptcoeur/plugins/photoswipe/photoswipe.css" rel="stylesheet">

  <script type="text/javascript" src="../javascripts/scriptcoeur/plugins/photoswipe/photoswipe.min.js"></script>
  <script type="text/javascript" src="../javascripts/scriptcoeur/plugins/photoswipe/photoswipe-ui-default.min.js"></script>

  <link href="../javascripts/scriptcoeur/plugins/photoswipe/default-skin/default-skin.css" rel="stylesheet">


  <!-- launching script -->
  <script>
    $(document).ready(function() {
      initPhotoSwipeFromDOM('._gallery', {noAnimation: false});
    });
  </script>


  <!-- Root element of PhotoSwipe. Must have class pswp. -->
  <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

    <!-- Background of PhotoSwipe. 
         It's a separate element as animating opacity is faster than rgba(). -->
    <div class="pswp__bg"></div>

    <!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">

      <!-- Container that holds slides. 
          PhotoSwipe keeps only 3 of them in the DOM to save memory.
          Don't modify these 3 pswp__item elements, data is added later on. -->
      <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
      </div>

      <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
      <div class="pswp__ui pswp__ui--hidden">

        <div class="pswp__top-bar">

            <!--  Controls are self-explanatory. Order can be changed. -->

            <div class="pswp__counter"></div>

            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

            <button class="pswp__button pswp__button--share" title="Share"></button>

            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

            <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
            <!-- element will get class pswp__preloader--active when preloader is running -->
            <div class="pswp__preloader">
                <div class="pswp__preloader__icn">
                  <div class="pswp__preloader__cut">
                    <div class="pswp__preloader__donut"></div>
                  </div>
                </div>
            </div>
        </div>

        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div> 
        </div>

        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
        </button>

        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
        </button>

        <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
        </div>

      </div>

    </div>

  </div>

</div>
<!-- end example -->
~~~html

<!-- actual gallery -->
<div id="photos-1" class="_gallery _grid-three" itemscope itemtype="http://schema.org/ImageGallery">

  <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" >
    <a class="--border-none" href="../images/grumpy.jpg" itemprop="contentUrl" data-size="973x1200">
      <img src="../images/grumpy_sm.jpg" itemprop="thumbnail"  />
    </a>
    <figcaption itemprop="caption description">This is one grumpy cat.</figcaption>
  </figure>

  <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" >
    <a class="--border-none" href="../images/grumpy.jpg" itemprop="contentUrl" data-size="973x1200">
      <img src="../images/grumpy_sm.jpg" itemprop="thumbnail"  />
    </a>
    <figcaption itemprop="caption description">This is also a grumpy cat.</figcaption>
  </figure>

</div>

<!-- plugin includes -->
<link href="../javascripts/scriptcoeur/plugins/photoswipe/photoswipe.css" rel="stylesheet">
<script type="text/javascript" src="../javascripts/scriptcoeur/plugins/photoswipe/photoswipe.min.js"></script>
<script type="text/javascript" src="../javascripts/scriptcoeur/plugins/photoswipe/photoswipe-ui-default.min.js"></script>
<link href="../javascripts/scriptcoeur/plugins/photoswipe/default-skin/default-skin.css" rel="stylesheet">


<!-- init + launch -->
<script src="../javascripts/scriptcoeur/gallery.js" type="text/javascript"></script>
<script>
  $(document).ready(function() {
    initPhotoSwipeFromDOM('._gallery', {noAnimation: false});
  });
</script>


<!-- PhotoSwipe Template. Must have class pswp. -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

  <!-- Background of PhotoSwipe. 
       It's a separate element as animating opacity is faster than rgba(). -->
  <div class="pswp__bg"></div>

  <!-- Slides wrapper with overflow:hidden. -->
  <div class="pswp__scroll-wrap">

    <!-- Container that holds slides. 
        PhotoSwipe keeps only 3 of them in the DOM to save memory.
        Don't modify these 3 pswp__item elements, data is added later on. -->
    <div class="pswp__container">
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
    </div>

    <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
    <div class="pswp__ui pswp__ui--hidden">

      <div class="pswp__top-bar">

          <!--  Controls are self-explanatory. Order can be changed. -->

          <div class="pswp__counter"></div>

          <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

          <button class="pswp__button pswp__button--share" title="Share"></button>

          <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

          <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

          <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
          <!-- element will get class pswp__preloader--active when preloader is running -->
          <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
          </div>
      </div>

      <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
          <div class="pswp__share-tooltip"></div> 
      </div>

      <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
      </button>

      <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
      </button>

      <div class="pswp__caption">
          <div class="pswp__caption__center"></div>
      </div>

    </div>

  </div>

</div>

~~~

</main>







