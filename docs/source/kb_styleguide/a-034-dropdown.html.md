---
title: Dropdowns
type: styleguide
layout: layout-coeur-knowbase
name: dropdowns
section: components
<!-- status: --draft -->
source: ../
---


<main markdown="1">

## Dropdowns

`_dropdown.scss` `scriptcoeur/dropdown.js`

- `._dropdown` element creates activates the dropdown
- `._dropdown-content` element immediately follows with content 
- width has to be set manually
- `--button-width` makes the menu exactly as wide as the button
- `--right` aligns menu with right side of button
- contents of a dropdown are absolute; it won't push the page downwards

- no JS required, __these options require JS__
  - `data-width="100px"` sets the dropdown width using js
  - uses the `hover` pseudoclass (might not work well w/ mobile), but can have `.--open` attached using js
  - `--delay` delays the opening of the menu for better ux. attached `--opening` during the delay with a simple animation example


<div class="_styleguide-example">

  <div>
    <button class="_button _dropdown" >Dropdown <i class="fa fa-angle-down"></i>
      <div class="_dropdown-container --button-width">
        <div class="_dropdown-content _padding _left _color-bg-ui">
          <div class="_bold _padding-bottom ">Dropdown Menu </div>
          <ul>
            <li><a href="#">option 1</a></li>
            <li><a href="#">option 2</a></li>
          </ul>
        </div>
      </div>
    </button>
    
    <button class="_button _dropdown" data-width="180px">Menu
      <div class="_dropdown-container --right">
        <div class="_dropdown-content _padding _left _color-bg-ui">
          <div class="_bold _padding-bottom " >Dropdown Menu </div>
          <ul>
            <li><a href="#">option 1</a></li>
            <li><a href="#">option 2</a></li>
          </ul>
        </div>
      </div>
    </button>

    <span class="_button --outline _dropdown --delay">
      <span class="_dropdown-delay-title">Delayed Menu</span>
      <div class="_dropdown-container">
        <div class="_dropdown-content _padding _left _color-bg-ui">
          <div class="_bold _padding-bottom " >Dropdown Menu </div>
          <ul>
            <li><a href="#">option 1</a></li>
            <li><a href="#">option 2</a></li>
          </ul>
        </div>
      </div>
    </span>

    <script src="../coeur/scriptcoeur/dropdown.js" type="text/javascript"></script>

  </div>


</div>
~~~html

<script src="../coeur/scriptcoeur/dropdown.js" type="text/javascript"></script>

<button class="_button _dropdown" >Dropdown <i class="fa fa-arrow-down"></i>
  <div class="_dropdown-container --button-width">
    <div class="_dropdown-content _padding _left _color-bg-ui">
      <div class="_bold _padding-bottom ">Dropdown Menu </div>
      <ul>
        <li><a href="#">option 1</a></li>
        <li><a href="#">option 2</a></li>
      </ul>
    </div>
  </div>
</button>

<button class="_button _dropdown" data-width="180px">Menu
  <div class="_dropdown-container --right">
    <div class="_dropdown-content _padding _left _color-bg-ui">
      <div class="_bold _padding-bottom ">Dropdown Menu </div>
      <ul>
        <li><a href="#">option 1</a></li>
        <li><a href="#">option 2</a></li>
      </ul>
    </div>
  </div>
</button>

<span class="_button --outline _dropdown --delay" >Delayed Menu
  <div class="_dropdown-container">
    <div class="_dropdown-content _padding _left _color-bg-ui">
      <div class="_bold _padding-bottom ">Dropdown Menu </div>
      <ul>
        <li><a href="#">option 1</a></li>
        <li><a href="#">option 2</a></li>
      </ul>
    </div>
  </div>
</span>
~~~


</main>

