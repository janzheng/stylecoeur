---
title: Toggles
type: styleguide
layout: layout-styleguide
name: toggleswitch
section: simple
source: ../
---


<main markdown="1">

## Toggle Switch Buttons

`_toggle.scss`

Toggle buttons are essentially checkboxes with an associated text (e.g. on or off, enabled or disabled). I've chosen to implement a JS-free toggle button (as opposed to Bootstrap's JS-heavy implementation)

Left position means "off", and right position means "on". Make sure the labels always describe the current state (e.g. "Disabled") and not future (e.g. "Turn On") as that gets confusing quickly.  


<div class="_styleguide-example">
  <div class="_margin-bottom-2">
    <div class="_margin-bottom">
      <label class="_toggle">
        <input id="toggle-1" type="checkbox">
        <span class="_toggle-slider"></span>
        <label for="toggle-1" class="_off">Disabled</label>
        <label for="toggle-1" class="_on">Enabled</label>
      </label>
    </div>
    <div class="_margin-bottom">
      <label class="_toggle --pill">
        <input id="toggle-2" type="checkbox">
        <span class="_toggle-slider"></span>
        <label for="toggle-2" class="_off">Off</label>
        <label for="toggle-2" class="_on">On</label>
      </label>
    </div>
  </div>
</div>
~~~
  <label class="_toggle">
    <input type="checkbox">
    <span class="_toggle-slider"></span>
    <label class="_off">Disabled</label>
    <label class="_on">Enabled</label>
  </label>

  <label class="_toggle --pill">
    <input type="checkbox">
    <span class="_toggle-slider"></span>
    <label class="_off">Off</label>
    <label class="_on">On</label>
  </label>
~~~



</main>

