---
title: Infobox
type: styleguide
layout: layout-styleguide
name: infobox
section: simple
source: ../
---


<main markdown="1">

## Infoboxes

`_infobox.scss`

Stackable Information Boxes good for marketing pages, dashboards, etc.

- `_anim-right` can be added for a hover animation

<div class="_styleguide-example">
  <div class="_infobox _color-bg-white _grid-one _margin-top-2">
    <a href="#" class="_infobox-content ">
      <h5 class="_padding-none">Branding &amp; Design <span class="_anim-right">&rarr;</span></h5>
      Branding, User experience design, information architecture ... 
    </a>
    <a href="#" class="_infobox-content ">
      <h5 class="_padding-none">Internet Services <span class="_anim-right">&rarr;</span></h5>
      Backups, migrations, site maintenance ...
    </a>
    <a href="#" class="_infobox-content ">
      <h5 class="_padding-none">Development Services <span class="_anim-right">&rarr;</span></h5>
      Custom sites, React, Angular, iOS, Android ...
    </a>
    <a href="#" class="_infobox-content ">
      <h5 class="_padding-none">Media &amp; Content Development <span class="_anim-right">&rarr;</span></h5>
      508 document conversion, SEO, social media marketing ...
    </a>
  </div>

  <div class="_infobox _grid-two _margin-top _margin-bottom _color-bg-white">
    <a href="#" class="_infobox-content _padding-2-i _align-center">
      <div>
        Expand your career: <strong> join our team <span class="_anim-right">&rarr;</span> </strong>
      </div>
    </a>
    <a href="#" class="_infobox-content _padding-2-i _align-center">
      <div>
        Take a look at <strong> our blog <span class="_anim-right">&rarr;</span> </strong>
      </div>
    </a>
  </div>

  <div class="_infobox _color-bg-white _grid-two _margin-top-2">
    <div class="_infobox-content _padding-2-i --hover-none ">
     <h5>Branding &amp; Design</h5>
      <p class="_font-small">
        Our team has specialized in organic search engine placement and pay-per-click management since the onset of web search.
      </p>
      <ul class="_padding-none _font-small">
        <li>Branding</li>
        <li>User Experience Design</li>
        <li>Information Architecture</li>
        <li>Service Design</li>
      </ul>
    </div>

    <div class="_infobox-content _padding-2-i  --hover-none ">
      <h5>Internet Services</h5>
      <p class="_font-small">
        We partner with several large hosting facilities to provide hosting and personalized technical support
      </p>
      <ul class="_padding-none _font-small">
        <li>Backups &amp; Migrations</li>
        <li>Site Maintenance</li>
        <li>Managed Hosting</li>
        <li>Dev Ops</li>
      </ul>
    </div>

    <div class="_infobox-content _padding-2-i --hover-none ">
      <h5>Development Services</h5>
      <ul class="_padding-none _font-small">
        <li>Hand-crafted responsive custom websites &amp; landing pages</li>
        <li>Web Apps &amp; single page apps</li>
        <li>Accessible, 508 compliant, Mandate 376 and VPAT / GPAT government sites</li>
        <li>Wordpress &amp; Shopify Sites</li>
        <li>React, React Native &amp; Angular</li>
        <li>iOS + Android development</li>
        <li>Microservices &amp; API development</li>
        <li>Server &amp; Database architecture consulting</li>
        <li>Web Portal &amp; Intranet Development</li>
        <li>Custom intranet portals</li>
        <li>Software Integration (PeopleSoft, Microsoft, Oracle)</li>
      </ul>

    </div>

    <div class="_infobox-content _padding-2-i --hover-none">
      <h5>Media &amp; Content Development</h5>
      <p class="_font-small">
        Our team has specialized in organic search engine placement and pay-per-click management since the onset of web search.
      </p>
      <ul class="_padding-none _font-small">
        <li>Document Conversion for 508 compliance</li>
        <li>Web Video Production</li>
        <li>SEO</li>
        <li>Social media marketing</li>
      </ul>
    </div>
  </div>
</div>
~~~html
<div class="_infobox _color-bg-white _grid-one _margin-top-2">
  <a href="#" class="_infobox-content ">
    <h5 class="_padding-none">Branding &amp; Design <span class="_anim-right">&rarr;</span></h5>
    Branding, User experience design, information architecture ... 
  </a>
  <a href="#" class="_infobox-content ">
    <h5 class="_padding-none">Internet Services <span class="_anim-right">&rarr;</span></h5>
    Backups, migrations, site maintenance ...
  </a>
  <a href="#" class="_infobox-content ">
    <h5 class="_padding-none">Development Services <span class="_anim-right">&rarr;</span></h5>
    Custom sites, React, Angular, iOS, Android ...
  </a>
  <a href="#" class="_infobox-content ">
    <h5 class="_padding-none">Media &amp; Content Development <span class="_anim-right">&rarr;</span></h5>
    508 document conversion, SEO, social media marketing ...
  </a>
</div>









<div class="_infobox _grid-two _margin-top _margin-bottom _color-bg-white">
  <a href="#" class="_infobox-content _padding-2-i _align-center">
    <div>
      Expand your career, <strong> join our team <span class="_anim-right">&rarr;</span> </strong>
    </div>
  </a>
  <a href="#" class="_infobox-content _padding-2-i _align-center">
    <div>
      Take a look at <strong> our blog <span class="_anim-right">&rarr;</span> </strong>
    </div>
  </a>
</div>









<div class="_infobox _color-bg-white _grid-two _margin-top-2">
  <div class="_infobox-content _padding-2-i --hover-none ">
   <h5>Branding &amp; Design</h5>
    <p class="_font-small">
      Our team has specialized in organic search engine placement and pay-per-click management since the onset of web search.
    </p>
    <ul class="_padding-none _font-small">
      <li>Branding</li>
      <li>User Experience Design</li>
      <li>Information Architecture</li>
      <li>Service Design</li>
    </ul>
  </div>

  <div class="_infobox-content _padding-2-i  --hover-none ">
    <h5>Internet Services</h5>
    <p class="_font-small">
      We partner with several large hosting facilities to provide hosting and personalized technical support
    </p>
    <ul class="_padding-none _font-small">
      <li>Backups &amp; Migrations</li>
      <li>Site Maintenance</li>
      <li>Managed Hosting</li>
      <li>Dev Ops</li>
    </ul>
  </div>

  <div class="_infobox-content _padding-2-i --hover-none ">
    <h5>Development Services</h5>
    <ul class="_padding-none _font-small">
      <li>Hand-crafted responsive custom websites &amp; landing pages</li>
      <li>Web Apps &amp; single page apps</li>
      <li>Accessible, 508 compliant, Mandate 376 and VPAT / GPAT government sites</li>
      <li>Wordpress &amp; Shopify Sites</li>
      <li>React, React Native &amp; Angular</li>
      <li>iOS + Android development</li>
      <li>Microservices &amp; API development</li>
      <li>Server &amp; Database architecture consulting</li>
      <li>Web Portal &amp; Intranet Development</li>
      <li>Custom intranet portals</li>
      <li>Software Integration (PeopleSoft, Microsoft, Oracle)</li>
    </ul>

  </div>

  <div class="_infobox-content _padding-2-i --hover-none">
    <h5>Media &amp; Content Development</h5>
    <p class="_font-small">
      Our team has specialized in organic search engine placement and pay-per-click management since the onset of web search.
    </p>
    <ul class="_padding-none _font-small">
      <li>Document Conversion for 508 compliance</li>
      <li>Web Video Production</li>
      <li>SEO</li>
      <li>Social media marketing</li>
    </ul>
  </div>
</div>
~~~


</main>