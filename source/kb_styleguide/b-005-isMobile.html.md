---
title: IsMobile
type: styleguide
layout: layout-knowbase
name: ismobile
section: scriptcoeur
<!-- status: --draft -->
source: ../
---

<main markdown="1">

## isMobile

Mobile Sniffer and/or mobile checker. Not always accurate but paired with checking for responsive width, this is light and easy enough to approximate other libraries.

- pass `true` and isMobile performs sniffing

<div class="_styleguide-example">

  <script src="../javascripts/scriptcoeur/ismobile.js" type="text/javascript"></script>
  <div class=" _padding _color-bg-white">
    <div>Sniffer: <span class="isMobileMessage1"></span></div>
    <div>Non-Sniffer: <span class="isMobileMessage2"></span></div>
  </div>

  <script>
    $(document).ready(function() {
      if(isMobile(true)) {
        $('.isMobileMessage1').html('Your device is a mobile device!');
        $('.isMobileMessage1').addClass('_color-bg-success');
      } else {
        $('.isMobileMessage1').html('Your device isn’t a mobile device...!');
        $('.isMobileMessage1').addClass('_color-bg-warning');
      }

      if(isMobile()) {
        $('.isMobileMessage2').html('Your device is a mobile device!')
        $('.isMobileMessage2').addClass('_color-bg-success');
      } else {
        $('.isMobileMessage2').html('Your device isn’t a mobile device...!')
        $('.isMobileMessage2').addClass('_color-bg-warning');
      }
    });
  </script>

</div>
~~~html 
<script src="../javascripts/scriptcoeur/ismobile.js" type="text/javascript"></script>
<div class=" _padding _color-bg-white">
  <div>Sniffer: <span class="isMobileMessage1"></span></div>
    <div>Non-Sniffer: <span class="isMobileMessage2"></span></div>
  </div>
</div>

<script>
  $(document).ready(function() {
    if(isMobile(true)) {
      $('.isMobileMessage1').html('Your device is a mobile device!');
      $('.isMobileMessage1').addClass('_color-bg-success');
    } else {
      $('.isMobileMessage1').html('Your device isn’t a mobile device...!');
      $('.isMobileMessage1').addClass('_color-bg-warning');
    }

    if(isMobile()) {
      $('.isMobileMessage2').html('Your device is a mobile device!')
      $('.isMobileMessage2').addClass('_color-bg-success');
    } else {
      $('.isMobileMessage2').html('Your device isn’t a mobile device...!')
      $('.isMobileMessage2').addClass('_color-bg-warning');
    }
  });
</script>
~~~

</main>



