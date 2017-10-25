---
title: Select & Copy
type: styleguide
layout: layout-styleguide
name: selectandcopy
section: scriptcoeur
<!-- status: --tbd -->
source: ../
---


<main markdown="1">

## Copy to Clipboard and Select

Here are some helpers for selecting and directly copying content to the user's clipboard.

- Just include the `selectcopy.js` file
- Compatibility is a bit rough for `document.execCommand("copy");`
- Use Select as a fallback
- Usability for just copying can be poor; users need to be notified something's been copied to the clipboard
- attach `_target-copy` and a target `data-target=""`. Clicking on the `_target-copy` container will copy the contents of `data-target`
- attach `_target-select` and a target `data-target=""` to select the target element

<div class="_styleguide-example" markdown="1">
  <script src="../javascripts/scriptcoeur/selectcopy.js" type="text/javascript"></script>
  <div id="text" class="_margin-bottom _padding _color-bg-ui">
    Here's some text you could copy.
  </div>

  <div class="_margin-bottom _padding _color-bg-ui">
    <label>Input something:</label>
    <input id="someInput" value="Some random text here" />
  </div>

  <div class="_target-copy _button --outline --short " data-target="#text">
    Copy Text
  </div>

  <div class="_target-copy _button --outline --short  _copy" data-target="#someInput">
    Copy Input
  </div>

  <div class="_target-select _button --outline --short  _select" data-target="#someInput">
    Select Input
  </div>
</div>
~~~html
<script src="../javascripts/scriptcoeur/selectcopy.js" type="text/javascript"></script>
<div id="text" class="_margin-bottom _padding _color-bg-ui">
  Here's some text you could copy.
</div>

<div class="_margin-bottom _padding _color-bg-ui">
  <label>Input something:</label>
  <input id="someInput" value="Some random text here" />
</div>

<div class="_target-copy _button --outline --short " data-target="#text">
  Copy Text
</div>

<div class="_target-copy _button --outline --short  _copy" data-target="#someInput">
  Copy Input
</div>

<div class="_target-select _button --outline --short  _select" data-target="#someInput">
  Select Input
</div>
~~~

</main>

