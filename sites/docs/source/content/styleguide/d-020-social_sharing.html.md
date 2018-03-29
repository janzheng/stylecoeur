---
title: Social Sharing
type: styleguide
layout: layout-coeur-knowbase
name: social_sharing
section: external
source: ../../
---

<main markdown="1">

## Social Sharing

The following meta tags make a site look good when it's shared over social media (Facebook, Twitter).

General Rules
- Facebook's recommendation of a minimum dimension of 1200x630 pixels and an aspect ratio of 1.91:1, 
- Twitter's file size requires < 1MB.
- Specifying the width and height using twitter:image:width and twitter:image:height helps us more accurately preserve the aspect ratio of the image when resizing.
    - I’d recommend to add og:image:widthand og:image:height as both help facebook to get the size of the og:image when a link is shared the first time.

    If both values are large enough, facebook will reserve the space for the large preview image, even if the facebook user shared the link faster than the image could be fetched.

    If both values are not set, facebook will fall back to the smaller og:image in such cases.
    - ```<meta name="twitter:image:width" content= "..." />
<meta name="twitter:image:height" content= "..." />```

Here's an example social sharing and meta tags from the verge:

~~~ html
    <meta name="description" content="The Mars company has sponsored hundreds of scientific studies to show cocoa is good for you." />

    <link rel="canonical" href="https://www.vox.com/science-and-health/2017/10/18/15995478/chocolate-health-benefits-heart-disease" />
    <meta property="og:description" content="The Mars company has sponsored hundreds of scientific studies to show cocoa is good for you." />

    <meta property="fb:app_id" content="549923288395304" />
    <meta property="og:image" content="https://cdn.vox-cdn.com/thumbor/qQ4JlbWuexXOCViD9lAHRQn7kaw=/0x0:2000x1047/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/9456457/chocolate_lede.jpg" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:site_name" content="Vox" />
    <meta property="og:title" content="Inside the candy industry’s campaign to convince us chocolate is a health food" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://www.vox.com/science-and-health/2017/10/18/15995478/chocolate-health-benefits-heart-disease" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://www.vox.com/science-and-health/2017/10/18/15995478/chocolate-health-benefits-heart-disease" />
    <meta name="twitter:title" content="Inside the candy industry’s campaign to convince us chocolate is a health food" />
    <meta name="twitter:description" content="The Mars company has sponsored hundreds of scientific studies to show cocoa is good for you." />
    <meta name="twitter:image" content="https://cdn.vox-cdn.com/thumbor/qQ4JlbWuexXOCViD9lAHRQn7kaw=/0x0:2000x1047/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/9456457/chocolate_lede.jpg" />
    <meta name="twitter:site" content="voxdotcom" />

~~~


Here's another few tricks: [CSS Tricks](https://css-tricks.com/essential-meta-tags-social-media/)

Mega list: [http://gethead.info/](http://gethead.info/)

FB Debugger: https://developers.facebook.com/tools/debug/sharing/

Twitter validator: https://cards-dev.twitter.com/validator



## Facebook
 
Here's how sharing links on facebook works. To get Facebook shared links to appear nicely, you need the following set of tags. It's helpful to setup an image just for sharing on facebook (or social media in general)





~~~ html
<meta property="og:url"                content="http://myurl.com" />
<meta property="og:title"              content="Webite Name" />
<meta property="og:type"               content="website" />
<meta property="og:description"        content="This is a fancy description" />
<meta property="og:image" content="http://myurl.com/images/image_fb.png" />
~~~
 
 
- [Facebook Sharing Docs](https://developers.facebook.com/docs/sharing/webmasters/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/sharing/?q=atlantalindyexchange.com)


## Twitter

~~~html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://www.vox.com/science-and-health/2017/10/18/15995478/chocolate-health-benefits-heart-disease" />
<meta name="twitter:title" content="Inside the candy industry’s campaign to convince us chocolate is a health food" />
<meta name="twitter:description" content="The Mars company has sponsored hundreds of scientific studies to show cocoa is good for you." />
<meta name="twitter:image" content="https://cdn.vox-cdn.com/thumbor/qQ4JlbWuexXOCViD9lAHRQn7kaw=/0x0:2000x1047/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/9456457/chocolate_lede.jpg" />
<meta name="twitter:site" content="voxdotcom" />
~~~

## Apple Messages

## Foursquare

## Slack

## 

</main>


