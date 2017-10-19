---
title: Email Form
type: styleguide
layout: layout-styleguide
name: Email Form
section: scriptcoeur
status: --tbd
source: ../
---

<main markdown="1">

## Email Form

Email forms using Google Script.

Here's the walkthrough: [Send email via Google w/o Server](https://www.npmjs.com/package/html-form-send-email-via-google-script-without-server)



Here's an example pulled from `http://janzheng.com`


<div class="_styleguide-example">
  <div id="contact" class="_padding-2 ">
    <form id="form" action="https://script.google.com/macros/s/AKfycby01BhE83Qmd8ARcKdviWgZjsY1aPxLDs3p9qAMLMt0GTwUKtXx/exec">

      <div>
        <div class="">
          <h4 class=" _inline">Hello,</h4>
          my name is 
          <input id="name" class="_form-input _inline " type="text" name="name" placeholder="coolest name ever" required/> 
        </div>
        <div class="">
          at 

          <input id="email" class="_form-input _inline _margin-right-none-i" type="text" name="email" placeholder="awesome@email.com" /> 

          and <input id="shortMessage" class=" _form-input _inline _margin-right-none-i" type="text" name="shortMessage" placeholder="I think..." required/>
        </div>

        <div class="_form-fake">
          fake <input id="fake" class=" _form-input _inline _margin-right-none-i" type="text" name="fake" placeholder="umm..."/>
        </div>

        <div class="_padding-top" >
          <textarea rows="2" id="message" class="_form-input"  type="text" name="message" placeholder="leave a message *" ></textarea>
        </div>

      </div>

      <div class="_align-vertically _align-bottom" >
        <button class="_margin-top _button-short">send away!</button>
      </div>

    </form>
    
    <div style="display:none;" id="loading">
      Sending...
    </div>

    <div style="display:none;" id="thankyou_message">
      Thanks for sending me a message, I will get back to you as soon as I can!
    </div>
  </div>
</div>
~~~html 
  <div id="contact" class="_padding-2 ">
    <form id="form" action="https://script.google.com/macros/s/[google script]/exec">

      <div>
        <div class="">
          <h4 class=" _inline">Hello,</h4>
          my name is 
          <input id="name" class="_form-input _inline " type="text" name="name" placeholder="coolest name ever" required/> 
        </div>
        <div class="">
          at 

          <input id="email" class="_form-input _inline _margin-right-none-i" type="text" name="email" placeholder="awesome@email.com" /> 

          and <input id="shortMessage" class=" _form-input _inline _margin-right-none-i" type="text" name="shortMessage" placeholder="I think..." required/>
        </div>

        <div class="_form-fake">
          fake <input id="fake" class=" _form-input _inline _margin-right-none-i" type="text" name="fake" placeholder="umm..."/>
        </div>

        <div class="_padding-top" >
          <textarea rows="2" id="message" class="_form-input"  type="text" name="message" placeholder="leave a message *" ></textarea>
        </div>

      </div>

      <div class="_align-vertically _align-bottom" >
        <button class="_margin-top _button-short">send away!</button>
      </div>

    </form>
    
    <div style="display:none;" id="loading">
      Sending...
    </div>

    <div style="display:none;" id="thankyou_message">
      Thanks for sending me a message, I will get back to you as soon as I can!
    </div>
  </div>
~~~


</main>


