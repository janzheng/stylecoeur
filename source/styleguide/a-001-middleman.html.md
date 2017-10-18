---
title: Using Middleman
type: styleguide
layout: layout-styleguide
name: using-middleman
section: middleman
status: --tbd
source: ../../
---

<main markdown="1">

## Using Middleman

Middleman combines ERB (a Ruby on Rails templating language) with YAML and a few other things. Takes a bit to get used to



### File Naming

Files are named in rendering order: `[filename].aaa.bbb.ccc` where the `ccc` is processed first, then `bbb`, and final output is in `aaa`. For example: `webpage.html.md` is a markdown file processed down into html, and `rubyfile.html.erb` is an ERB file processed into html. 

Regardless of naming convention, all files can have YAML front-matter (with the exception of layouts).


### ERB

Comments in ERB look like this:

~~~ erb
<% 
=begin %>

  stuff you want commented out here

<% 
=end %>
~~~



### YAML

- front matter
- source: structure / head
- configuring head
- accessing front matter


### Partials

Partials are useful short reusable components. Very useful with `navigation` and other components that appear more than once, or to be organizationally dropped into another page (like a sidebar or changelog).

Usage:

~~~ erb 
<%= partial '/partials/nav' %>
~~~ 

Note that the partial file has to have a leading underscore: `_nav.erb`


Partials can also take variables, as used in the Colors section. Usage:

~~~ erb
<%= partial '/partials/swatch', 
    :locals => { :name => 'Blue', :varName => 'blue', :swatch => '#366EA6' } %>
~~~

~~~ erb
<div class="_swatch ">
  <div class="_swatch-color <%= "_color-bg-#{varName}" %>"></div>
  <div class="_swatch-description">
    <div><strong><%= name %></strong></div>
    <div class="_font-mono">$color-<%= varName %></div>
    <div class="_font-mono"><%= swatch %></div>
  </div>
</div>
~~~



### Loops

### Layouts

(regular and nested layouts w/ ruby)

### Gems and Bundle

Talk about gemfile and bundle install

### Deployment

- Github
- Deploy script



<div class="_color-inactive" markdown="1">

### Build Tasks

(need to implement Grunt or Gulp for slightly simpler building and deployment)

</div>

</main>