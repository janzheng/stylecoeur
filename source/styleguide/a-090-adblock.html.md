---
title: Adblock Detection
type: styleguide
layout: layout-styleguide
name: adblock
section: scriptcoeur
<!-- status: --tbd -->
source: ../
---

<main markdown="1">



## Adblock Detection

Very basic method at [detectadblock.com](http://www.detectadblock.com/).
This matches the `ads.js?` rule, but you can match others from [EasyList](https://easylist.to/easylist/easylist.txt).

<div class="_message">
</div>


1. Create an `ads.js` file and put the following in there.

~~~ js
var e=document.createElement('div');
e.id='rIMfJLoGNRzs';
e.style.display='none';
document.body.appendChild(e);
~~~

    Basically creates an empty div. Lots of adblockers look for the "ads.js?" file name. Note the way the file is included.

2\. Check if `ads.js` was loaded

~~~ html
<script src="../javascripts/scriptcoeur/ads.js?" type="text/javascript"></script>
<script type="text/javascript">

if(document.getElementById('rIMfJLoGNRzs')){
  alert('Blocking Ads: No');
} else {
  alert('Blocking Ads: Yes');
}

</script>
~~~


</main>


<script src="../javascripts/scriptcoeur/ads.js?" type="text/javascript"></script>
<script type="text/javascript">

if(document.getElementById('rIMfJLoGNRzs')){
  console.log('Blocking Ads: No');
  $('._message').addClass('--success').html('You are not blocking ads');
} else {
  console.log('Blocking Ads: Yes');
  $('._message').addClass('--warning').html('Ads are being blocked');
}

</script>


