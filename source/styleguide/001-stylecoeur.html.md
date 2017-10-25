---
title: Stylecoeur
type: styleguide
layout: layout-styleguide
name: stylecoeur
section: about
source: ../
---

<main markdown="1">

## Philosophy

The idea behind this style guide and the 'framework' is to bring together a group of useful tools to make prototyping or development both quick and look professional. This is a speed-first, readability-second approach, which lends to easy prototyping and spitting out new good-looking pages. It might not work as well as an enterprise app.

Everything is put together to be as quickly understandable and deployable as possible, hence the modified "BEM" styling. These are implemented as loose rules-of-thumb, and not hard rules.


### Core Philosophy

Stylecoeur isn't for everyone. It's for prototyping.

- Production Speed is King!
- (Product speed > Performance)
- Less complex is better, use helpers as much as possible
- Style Guide and scriptcoeur is a collection of examples
- Use as much open source as possible
- Don't reinvent the wheel
- The Core will ALWAYS change
- This documentation will ALWAYS be behind (even changelog)
- Use the code as documentation
- Extensive use of grids. [Modern browsers only]



## Stylecoeur

The base framework is called `stylecoeur` and offers a wide variety of core SCSS systems to build on, like responsive variables, colors, buttons, and so on.

The base file is `stylecoeur/index.scss` and links together all the various parts, while the main settings file is `stylecoeur/_heart.scss`.

There are three different types of subsections: `stylecoeur/arteries` provide the core dependencies, like typography, color, animation mixins, and grids. The second subsection is `stylecoeur/vessels` and provides helpers like links, cards, and buttons. The third subsection is the more vanilla `stylecoeur/components` and is meant to provide a very basic framework of useful components like footer, nav, and sidebar; most of which will probably be overridden in the final versions of a project.

- Use variables for definitions and context. Definition: $color-green. Context: $color-success.
- Focus on context variables like `$color-success` as as much as you can, as the color for success could easily be swapped from green to blue without changing the color everywhere.
- Sometimes styles are easier implemented in CSS as @extends, and other times they're more quickly implemented in HTML as classes. This is why options exist for "._helperClass" so the helpers like margins and paddings can be easily added to the HTML.
- Maintain Modularity. Helpers and components should be as reusable as possible
- Every variable should be defined at the top, like colors, borders, and radii, need to be defined at top for context. This makes them a lot easier to find and redefine later


## Middleman & Kramdown

- Middleman allows for quickly reusable partials, mixed in with markdown (kramdown flavor)
- Kramdown allows for inline html, scripts, and can mix and match with Middleman ruby on rails partials

This combination creates an environment that allows very quick static site development, which is helpful for launching proofs of concepts, user tests, styleguides, and landing pages



#### Other Resources

- Tympanus Codrops
  - Good for ideas, inspiration, and implementation
- Tympanus [Blueprints](https://tympanus.net/codrops/category/blueprints/)
  - Multi-level side nav w/ nice transitions
    - Great for more complex sidenavs, admin sidenavs
  - [Stacked Navigation](https://tympanus.net/Blueprints/PageStackNavigation/)
    - Looks and feels like a menu / foldering system
  - [Zoom slider](https://tympanus.net/Blueprints/ZoomSlider/)
    - Landing page, product view, transitions; cool for shopping grids too
  - [Shopping Grid w/ Filters](https://tympanus.net/Blueprints/FilterableProductGrid/)
    - cool slider within products, filters, masonry
  - [Product Comparison](https://tympanus.net/Blueprints/ProductComparison/)
  - [Grid Gallery](https://tympanus.net/Blueprints/GridGallery/)
    - Combines a product grid with a gallery (cool for shopping, food menu, etc.)
  - [Split Layout](https://tympanus.net/Blueprints/SplitLayout/)
    - Cool idea with showing vertical strips and cool animation
  - [On Scroll effects](https://tympanus.net/Blueprints/OnScrollEffectLayout/)
  - [View mode switch](https://tympanus.net/Blueprints/ViewModeSwitch/)
    - Grid v. List views
  - [Animated Header](https://tympanus.net/Blueprints/AnimatedHeader/)
    - Header nav shrinks a bit when scrolled down
  - [Tooltip Menu](https://tympanus.net/Blueprints/TooltipMenu/)
    - Like a 'dropdown' but can appear above if more space above
  - [Responsive Prod Grid](https://tympanus.net/Blueprints/ProductGridLayout/)
    - I like the hover effects for each product item
  - [Slide-out massive nav menu](https://tympanus.net/Blueprints/HorizontalSlideOutMenu/#)
  - [Vertical Timeline](https://tympanus.net/Blueprints/VerticalTimeline/)
  - [Fixed Background Scrolling](https://tympanus.net/Blueprints/ScrollingLayout/)
  - [Background Slideshow](https://tympanus.net/Blueprints/BackgroundSlideshow/)
  - [Slide/Push Off-Canvas Menus](https://tympanus.net/Blueprints/SlidePushMenus/)
  - [Quotes Rotator](https://tympanus.net/Blueprints/QuotesRotator/)
  - [Nested Accordion](https://tympanus.net/Blueprints/NestedAccordion/)
  - [Vertical Icon Menu](https://tympanus.net/Blueprints/VerticalIconMenu/#)
  - [Horizontal Dropdown Mega Menu](https://tympanus.net/Blueprints/HorizontalDropDownMenu/)
</main>


