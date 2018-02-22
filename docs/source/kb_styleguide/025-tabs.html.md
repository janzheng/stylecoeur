---
title: Tabs
type: styleguide
layout: layout-knowbase
name: tabs
section: simple
source: ../
---


<main markdown="1">

## Tabs

`_tabs.scss`

Tabs are essentially buttons or menu items that shows some information and hides others. The JS implementation is not included as it's fairly straightforward, but will depend on the framework. Class helper flags are provided to make the development earlier however.

- Left two examples use `href='#tabName'` 
- Right two examples use data attributes `data-tab='tabOne'` 

<div class="_styleguide-example _margin-bottom-2">
  <div class="_tabs --border _margin-top-none-i">
    <a href="#tabOne" class=" _tabs-item">Tab One</a>
    <a href="#tabTwo" class=" _tabs-item --active">Tab Two</a>
    <button class="_tabs-item --short --outline _margin-none" data-tab='tabThree'>Tab Three</button>
    <button class="_tabs-item --short --outline _margin-none" data-tab='tabFour'>Tab Four</button>
  </div>
  <div>
    <div class="tabOne _tabs-content">Content for tab one</div>
    <div class="tabTwo _tabs-content --selected">Content for tab two</div>
    <div class="tabThree _tabs-content">Content for tab three</div>
    <div class="tabFour _tabs-content">Content for tab four</div>
  </div>
</div>
~~~ html
<div class="_styleguide-example _margin-bottom-2">
  <div class="_tabs --border _margin-top-none-i">
    <a href="#tabOne" class=" _tabs-item">Tab One</a>
    <a href="#tabTwo" class=" _tabs-item --active">Tab Two</a>
    <button class="_tabs-item --short --outline _margin-none" data-tab='tabThree'>Tab Three</button>
    <button class="_tabs-item --short --outline _margin-none" data-tab='tabFour'>Tab Four</button>
  </div>

  <div>
    <div class="tabOne _tabs-content">Content for tab one</div>
    <div class="tabTwo _tabs-content --selected">Content for tab two</div>
    <div class="tabThree _tabs-content">Content for tab three</div>
    <div class="tabFour _tabs-content">Content for tab four</div>
  </div>
</div>

<script>
  $('._tabs-item').on('click', function() {
    let target = $(this).data("tab") || $(this).prop("hash").substr(1);
    // set nav
    $('._tabs-item').removeClass('--active');
    $(this).addClass('--active');

    // set content
    $('._tabs-content').removeClass('--selected');
    $('._tabs-content.' +target).addClass('--selected');

  });
</script>
~~~


There are several ways to implement tabs, including using no JS with radio `<input>` elements. However, I opted for using link tags, as you can set a hash in the URL, and eventually open up the specific tag later by sharing the URL with hash (this part is not implemented). Keep in mind that tab hashes might clash with nav hashes, so don't go too crazy.

By default, tab navigation items are considered unselected. Attach an `--active` class to a `_tabs-item` to indicate selected state. Add `--border` for a border.

Helpers have also been provided for tab content. Add `_tab-content` to each tab of content. By default, every `_tab-content` item will be hidden. Add a `--selected` class to the selected `_tab-content` to display the seleted content tab. 

Here is a sample implementation with jQuery. All I am doing is adding the `--active` and `--selected` flag by looking up the hash value from the nav item.


<script>
  $('._tabs-item').on('click', function() {
    let target = $(this).data("tab") || $(this).prop("hash").substr(1);
    // set nav
    $('._tabs-item').removeClass('--active');
    $(this).addClass('--active');

    // set content
    $('._tabs-content').removeClass('--selected');
    $('._tabs-content.' +target).addClass('--selected');

  });
</script>

</main>

