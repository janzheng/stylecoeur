---
title: Local Storage
type: styleguide
layout: layout-coeur-knowbase
name: localStorage
section: scriptcoeur
<!-- status: --draft -->
source: ../../
---

<main markdown="1">

## Local Storage

Local Storage refers to storing information locally in a browser, either using localStorage or Cookies.

- It's best to check if one or the other exists; sometimes neither does
- Provides limited usefulness, excels at testing fake APIs
- Stores content between sessions for an "almost database" experience
- [JS Cookie](https://github.com/js-cookie/js-cookie) is included in the /plugins/ folder and takes care of all these scenarios


<div class="_styleguide-example">
<script src="../coeur/scriptcoeur/plugins/js.cookie.js" type="text/javascript"></script>

<div>localStorageExample: <span id="output">asdads</span></div>

<script>
  Cookies.set('localStorageExample', { foo: 'bar' });
  const local = Cookies.getJSON('localStorageExample');
  console.log(local.foo)
  $(document).ready(function() {
    $('#output').html(JSON.stringify(local))
  });
</script>

</div>
~~~
<script src="../coeur/scriptcoeur/plugins/js.cookie.js" type="text/javascript"></script>

<script>
  Cookies.set('localStorageExample', { foo: 'bar' });
  const local = Cookies.getJSON('localStorageExample');
  console.log(local.foo)
  $(document).ready(function() {
    $('#output').html(JSON.stringify(local))
  });
</script>

<div>localStorageExample: <span id="output"></span></div>
~~~

</main>

