---
title: Clearfix
type: styleguide
layout: layout-knowbase
name: clearfix
section: fundamental
source: ../
---

<main markdown="1">
  
## Clearfix

Clearfix can sometimes be useful 'fixing' layouts that are positioned.

Just add `.clearfix` to an element for clearfix. Easy Peazy.

Here's what clearfix does: if you have some elements that are float positioned (e.g. `float: left`), the floated elements might extend beyond its container.

<div class="_styleguide-example" markdown="1">


With clearfix: 

<div class="_color-bg-ui clearfix _padding">
  <img class="_float-left _padding-right"
  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/image.png"> 
  Stylecoeur is a personal cheat sheet and boilerplate to make prototyping or development both quick and look professional. It's my own alternative to Bootstrap. It prioritizes development speed over reliability and load times.
</div>

No clearfix—the content goes outside the container and will screw with all the elements under it: 
{: ._padding-top}

<div class="_color-bg-ui _padding">
  <img class="_float-left _padding-right"
  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/image.png"> 
  Stylecoeur is a personal cheat sheet and boilerplate to make prototyping or development both quick and look professional. It's my own alternative to Bootstrap. It prioritizes development speed over reliability and load times.
</div>

Here is more content that a lack of clearfix will mess with.


</div>


</main>