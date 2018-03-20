---
title: Adblock Detection
type: styleguide
layout: layout-coeur-knowbase
name: adblock
section: scriptcoeur
<!-- status: --draft -->
source: ../
---

<main markdown="1">



## Adblock Detection

Very basic method at [detectadblock.com](http://www.detectadblock.com/).
This matches the `ads.js?` rule, but you can match others from [EasyList](https://easylist.to/easylist/easylist.txt).



1. Create an `ads.js` file and put the following in there.

~~~ js
var e=document.createElement('div');
e.id='rIMfJLoGNRzs';
e.style.display='none';
document.body.appendChild(e);
~~~

The above basically creates an empty div. Lots of adblockers look for the "ads.js?" file name. Note the way the file is included.

2\. Check if `ads.js` was loaded

<div class="_styleguide-example">
  <div class="_message">
  </div>
  <script src="../coeur/scriptcoeur/ads.js?" type="text/javascript"></script>
  <script type="text/javascript">

  if(document.getElementById('rIMfJLoGNRzs')){
    console.log('Blocking Ads: No');
    $('._message').addClass('--success').html('You are not blocking ads');
  } else {
    console.log('Blocking Ads: Yes');
    $('._message').addClass('--warning').html('Ads are being blocked');
  }
  </script>
</div>
~~~ html
<div class="_message">
</div>

<script src="../coeur/scriptcoeur/ads.js?" type="text/javascript"></script>
<script type="text/javascript">

if(document.getElementById('rIMfJLoGNRzs')){
  console.log('Blocking Ads: No');
  $('._message').addClass('--success').html('You are not blocking ads');
} else {
  console.log('Blocking Ads: Yes');
  $('._message').addClass('--warning').html('Ads are being blocked');
}
~~~


</main>



