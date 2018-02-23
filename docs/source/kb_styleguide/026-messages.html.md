---
title: Messages
type: styleguide
layout: layout-coeur-knowbase
name: messages
section: simple
source: ../
---


<main markdown="1">

## Messages

`_message.scss`

Messages (sometimes called 'toast') are usually simple messages to indicate system status, like "Upload Completed!" or system errors. They are usually just one or at most two lines of text, but you can certainly have more. The idea is that it quickly tells the user what's going on.


<div class="_styleguide-example">
  <div class="_message">
    This is a quick system message!
  </div>
  <div class="_message">
    Messages (sometimes called 'toast') are usually simple messages to indicate system status, like "Upload Completed!" or system errors. They are usually just one or at most two lines of text.
  </div>
  <div class="_message --danger">
    This is a danger message!
  </div>
  <div class="_message --warning">
    This is a warning message!
  </div>
  <div class="_message --success">
    This is a success message!
  </div>
  <div class="_content _color-bg-white">
    <a href="#" class="_message _block _margin-none-i --border">
      This is a brazen message. Find out more <span class="_anim-right">&rarr;</span>
    </a>
  </div>
</div>
~~~html
<div class="_message">
    This is a quick system message!
  </div>
  <div class="_message">
    Messages (sometimes called 'toast') are usually simple messages to indicate system status, like "Upload Completed!" or system errors. They are usually just one or at most two lines of text.
  </div>
  <div class="_message --danger">
    This is a danger message!
  </div>
  <div class="_message --warning">
    This is a warning message!
  </div>
  <div class="_message --success">
    This is a success message!
  </div>
  <div class="_content _color-bg-white">
    <a href="#" class="_message _block _margin-none-i --border">
      This is a brazen message. Find out more <span class="_anim-right">&rarr;</span>
    </a>
  </div>
~~~


</main>