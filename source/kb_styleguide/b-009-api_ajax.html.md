---
title: APIs
type: styleguide
layout: layout-knowbase
name: apis
section: scriptcoeur
<!-- status: --draft -->
source: ../
---

<main markdown="1">


## APIs

On static sites, handle API requests through jQuery. Try to use the new [jQuery Promises](http://api.jquery.com/jquery.ajax/) instead of older implementations. It's a lot easier to read!

#### Security & CORS

Cross-domain security is important, and you might run into issues. [Here they are, explained](http://restlet.com/company/blog/2015/12/15/understanding-and-using-cors/).

#### Contentful

Contentful is a headless CMS.




#### GraphCMS

Here's an example using GraphCMS, which runs on GraphQL. Interesting to note is that GQL requires you to `POST` in order to send out a query, and the server will then return a response with the data. 

<div class="_styleguide-example">

  <div class="graphcms-response"></div>
  <script>
    // ATLX graphCMS example
    // needs to POST in order for query to work

    var auth = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MDkwNTAxOTYsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqOThxbzJhbjZibmQwMTM2NG84ZnY0bDYiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqOTh4aXZ0ZTY5dzcwMTM1Nmh5czFjYnAifQ.okRpZjh4NtZBZbGpx9DheIqODVGs8OLhFlq8ZkeBfFk";

    var request = $.ajax({
      type: 'POST', //'GET',
      dataType: 'json',
      contentType: 'application/json',
      headers: {
        "authorization": auth,
      },
      data: '{"query": "query {allEvents {title}}"}',
      url: "https://api.graphcms.com/simple/v1/atlx",
      beforeSend: function( xhr ) {
        $('.graphcms-response').html('loading data...')
      }
    });

    request.done(function( data ) {
      console.log( "Done:", data);
      $('.graphcms-response').html(JSON.stringify(data));
    });

    request.fail(function( jqXHR, textStatus, errorThrown ) {
      console.log( "Fail:", jqXHR, textStatus, errorThrown);
    });

    request.always(function( data, textStatus, errorThrown ) {
      console.log( "Always:", data), textStatus, errorThrown;
    });

  </script>
</div>
~~~html
<div class="graphcms-response"></div>
<script>
  // ATLX graphCMS example
  // needs to POST in order for query to work

  var auth = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MDkwNTAxOTYsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqOThxbzJhbjZibmQwMTM2NG84ZnY0bDYiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqOTh4aXZ0ZTY5dzcwMTM1Nmh5czFjYnAifQ.okRpZjh4NtZBZbGpx9DheIqODVGs8OLhFlq8ZkeBfFk";

  var request = $.ajax({
    type: 'POST', //'GET',
    dataType: 'json',
    contentType: 'application/json',
    headers: {
      "authorization": auth,
    },
    data: '{"query": "query {allEvents {title}}"}',
    url: "https://api.graphcms.com/simple/v1/atlx",
    beforeSend: function( xhr ) {
      $('.graphcms-response').html('loading data...')
    }
  });

  request.done(function( data ) {
    console.log( "Done:", data);
    $('.graphcms-response').html(JSON.stringify(data));
  });

  request.fail(function( jqXHR, textStatus, errorThrown ) {
    console.log( "Fail:", jqXHR, textStatus, errorThrown);
  });

  request.always(function( data, textStatus, errorThrown ) {
    console.log( "Always:", data), textStatus, errorThrown;
  });

</script>
~~~
<!-- 
  curl -H "Authorization: bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MDkwNTAxOTYsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqOThxbzJhbjZibmQwMTM2NG84ZnY0bDYiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqOTh4aXZ0ZTY5dzcwMTM1Nmh5czFjYnAifQ.okRpZjh4NtZBZbGpx9DheIqODVGs8OLhFlq8ZkeBfFk" -H 'content-type: application/json' -X POST -d '
  {
   "query": "query {allRecords {title}}"
  }
  ' https://api.graphcms.com/simple/v1/ciz189ut5j9wl0185r42lvfzp


  curl -H 'content-type: application/json' -X POST -d '
  {
   "query": "query {allRecords {title}}"
  }
  ' https://api.graphcms.com/simple/v1/ciz189ut5j9wl0185r42lvfzp



  curl -H 'content-type: application/json' -X POST -d '
  {"query": "query {allEvents {title}}"}
  ' https://api.graphcms.com/simple/v1/atlx
 -->

</main>