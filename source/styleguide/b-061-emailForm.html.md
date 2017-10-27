---
title: Email Form*
type: styleguide
layout: layout-styleguide
name: Email Form
section: scriptcoeur
<!-- status: --draft -->
source: ../
---

<main markdown="1">


## Email Form

Email forms using Google Script.

<div class="_styleguide-todo _message --warning _format-last-bottom_none" markdown="1">
  
- Finish the writeup
- jQuery validation
- ongoing testing of honeypot
- create two separate functions or classes for validation instead of having to copy everything

</div>

Here's the walkthrough: [Send email via Google w/o Server](https://www.npmjs.com/package/html-form-send-email-via-google-script-without-server)

##### TL;DR Summary

1. Set up a custom google excel sheet [clone example link here]
2. Set up a new script [notice about saving/duplicate etc.]
3. HTML script
4. Validation & Honeypot

#### Option 1: Simple Validation

`/scriptcoeur/email-form.js`

[Simple Validation]



#### Option 2: jQuery Validation

`/scriptcoeur/email-form-jquery.js`

Here's an example pulled from `http://janzheng.com`. This method uses jQuery Validation.

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

Code behind the form:

~~~html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>

<script>

  // 
  //  Form Sending Script
  //  https://www.npmjs.com/package/html-form-send-email-via-google-script-without-server
  // 

  var action;

  $(document).ready(function() {

    let rules = {
      name: {
        required: true,
      },
      email: {
        required: true,
      },
      shortMessage: {
        required: true,
      },
    };
    let messages = {
      name: {
        required: '(psst, what’s your name?)',
      },
      email: {
        required: '(oops, email please!)',
      },
      shortMessage: {
        required: '(what u wanna say?)',
      },
    };

    $('#form').submit(function(event){
      // event.preventDefault();
      action = event.target.action;
    }).validate({
    // $('#form').validate({
        // debug: true,
        rules,
        messages,
        submitHandler(form) {
          console.log('submitting...');
          // form.submit(false);

          var data = getFormData();
          if(data.fake || data.message ) {
            // console.log('fake! ', data)
            // return false; // honey
          } else {

            document.getElementById('form').style.display = 'none'; // hide form
            document.getElementById('loading').style.display = 'block';

            var url = action; // event.target.action;  //
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onreadystatechange = function() {
              console.log( xhr.status, xhr.statusText )
              console.log(xhr.responseText);
              document.getElementById('loading').style.display = 'none';
              document.getElementById('form').style.display = 'none'; // hide form
              document.getElementById('thankyou_message').style.display = 'block';
              return;
            };
            // url encode form data for sending as post data
            var encoded = Object.keys(data).map(function(k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
            }).join('&')
            xhr.send(encoded);
          }

        },
        invalidHandler(event, validator) { 
          console.log('form is wrong :(')
          var errors = validator.numberOfInvalids();
          if (errors) {
            var message = errors == 1
              ? 'You missed 1 field. It has been highlighted'
              : 'You missed ' + errors + ' fields. They have been highlighted';
            $("div.error span").html(message);
            $("div.error").show();
          } else {
            $("div.error").hide();
          }

          console.log(message)
          // props.onSubmit();
        },
      });

  });


  // get all data in form and return object
  function getFormData() {
    var elements = document.getElementById("form").elements; // all form elements
    var fields = Object.keys(elements).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });
    var data = {};
    fields.forEach(function(k){
      data[k] = elements[k].value;
      var str = ""; // declare empty string outside of loop to allow
                    // it to be appended to for each item in the loop
      if(elements[k].type === "checkbox"){ // special case for Edge's html collection
        str = str + elements[k].checked + ", "; // take the string and append 
                                                // the current checked value to 
                                                // the end of it, along with 
                                                // a comma and a space
        data[k] = str.slice(0, -2); // remove the last comma and space 
                                    // from the  string to make the output 
                                    // prettier in the spreadsheet
      }else if(elements[k].length){
        for(var i = 0; i < elements[k].length; i++){
          if(elements[k].item(i).checked){
            str = str + elements[k].item(i).value + ", "; // same as above
            data[k] = str.slice(0, -2);
          }
        }
      }
    });
    // console.log(data);
    return data;
  }

</script>
~~~


</main>


