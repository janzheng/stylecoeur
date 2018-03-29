---
title: Stylecoeur Dev
type: styleguide
layout: layout-coeur-knowbase
name: developingStylecoeur
section: stylecoeur
<!-- status: --draft -->
source: ../../
submenu:
  - [Developing Stylecoeur, developing-stylecoeur]
  - [Styleguide Structure, styleguide-structure]
  - [Kramdown, kramdown]
  - [Syntax Highlighting, syntax-highlighting]
  - [Middleman, middleman]
  - [Deploying Middleman, deploying-middleman]
  - [Installing Plugins, installing-plugins]
  - [ERB, erb]
  - [Middleman Variables, middleman-variables]
  - [YAML &amp; Front Matter, yaml-amp-front-matter]
  - [File Naming, file-naming]
  - [Partials, partials]
  - [Layouts, layouts]
  - [Github, github]
  - [Build Tasks, build-tasks]
---

<main markdown="1">




## Developing Stylecoeur 

The documentation is written in a combination of ERB, Kramdown (variant of Markdown), and HTML, supported by SCSS.

- Middleman allows for quickly reusable partials, mixed in with markdown (kramdown flavor)
- Kramdown allows for inline html, scripts, and can mix and match with Middleman ruby on rails partials

This combination creates an environment that allows very quick static site development, which is helpful for launching proofs of concepts, user tests, styleguides, and landing pages.


#### Styleguide Structure

Numerical naming system

How the indexer works





#### Kramdown

Kramdown allows a combination of html and markdown. Just use `markdown="1"` in your html to enable markdown:

~~~html
<div class="" markdown="1">
~~~

Adding classes to styles

~~~html
< A nice blockquote
{: title="blockquote title" .class1 .class 2 #an-id}




#### Syntax Highlighting

Syntax Highlighting in the \_stylecoeur deployment of Middleman uses Pygments and Kramdown.

If you already have a Middleman project: Add gem "middleman-syntax" to your Gemfile and run `bundle install`.

In the `config.rb` file: `activate :syntax` or `activate :syntax, :line_numbers => true` Also make sure kramdown is active: `set :markdown_engine, :kramdown`

Some highlighting options:

- line_numbers
- start_line
- css_class
- wrap

Example:

~~~ ruby
def my_cool_method(message)
  puts message
end
~~~

Code example:

~~~
 ~~~ ruby
  def my_cool_method(message)
    puts message
  end
 ~~~
~~~

[More info on Github/middleman-syntax](https://github.com/middleman/middleman-syntax)


#### Middleman

Middleman combines ERB (a Ruby on Rails templating language) with YAML and a few other things. Takes a bit to get used to but it's nice.

To run Middleman locally, go to the `source/` folder and use the following commands:

~~~
bundle exec middleman server --port 4567
~~~

then preview on `http://localhost:4567` (:4567 is the default port). 
You can access a special middleman config page: `http://127.0.0.1:4567/__middleman`


Building / compiling the example builds it into locally viewable flat html files:

~~~
bundle exec middleman build
~~~

#### Deploying Middleman 

If you want to deploy Middleman as a static site, you can do that for free on Github. Deploying to Github uses the gem [middleman deploy](https://github.com/middleman-contrib/middleman-deploy).


Make sure you have the gem installed in the gemfile `gem 'middleman-deploy', '~> 2.0.0.pre.alpha'`. Note that I'm using an earlier one as the later ones are buggy. Don't forget to run `bundle install` in the console.


If deploying a site on Github, there's two ways: deploy the site files under the branch `gh-pages` or under the main branch's `/docs` folder (select in the settings page).

To deploy under `gh-pages`:

~~~ ruby
activate :deploy do |deploy|
  deploy.deploy_method = :git
  # Optional Settings
  deploy.remote   = 'git@github.com:username/project.git' # remote name or git url, default: origin
  deploy.branch   = 'gh-pages' # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  # deploy.commit_message = 'custom-message'      # commit message (can be empty), default: Automated
end
~~~

Sometimes Github caches things for long periods of time. Use the asset hash cache buster built into middleman:

~~~ ruby
activate :asset_hash # github cache buster
~~~

To deploy:

`bundle exec middleman build` - builds the flat html files
`bundle exec middleman deploy` - deploys using the rules

To deploy under `/docs` you actually don't need middleman-deploy. You can set the build script to build into a `/docs` folder by adding this line in `config.rb`: `set :build_dir, 'docs'` and just push the changes to the branch. But I prefer the cleanliness of using a separate branch.


#### Installing Plugins

Additional plugins are called Gems. Installing Gems is easy. Just add the gem to the `Gemfile`, for example: `gem 'middleman-deploy', '~> 2.0.0.pre.alpha'` and then run the following in the console: `bundle install` to make middleman install and recognize it.



#### ERB

ERB is the templating language.

Creating comments in ERB is unwieldy:

~~~ erb
<% 
=begin %>

  stuff you want commented out here

<% 
=end %>
~~~

Defining variables:

~~~ erb
<% $section_name = '' %>
~~~

Printing code or variable:

~~~ erb
<%= $section_name %>
~~~

Manipulating Middleman with loops example (for sidebar):

~~~ erb
  <% sitemap.resources.select { |r| r.data.type == 'styleguide' }
    .sort_by{|r| r.url }
    .each do |resource| 
  %>
    <% if $section_name != resource.data.section 
          $section_name = resource.data.section 
      %>
      <div class="_sidebar-section_title"> <%= $section_name %></div>
    <% end %>

    <div><a href="../<%= resource.path %>" class="<%= '--active' if current_page.data.name == resource.data.name %> <%= resource.data.status %>"><%= resource.data.title %></a></div>
  <% end %>
~~~

ERB uses Ruby, so refer to Rubydocs for the full features.


#### Middleman Variables

- `current_page.data` — accesses the front-matter of the current page
- using the `resource` loop / array
- using the config page for help / hint / docs
- handling array example

<div class="_color-inactive" markdown="1">

#### YAML &amp; Front Matter

- front matter
- source: structure / head
- configuring head
- accessing front matter

- front-matter flags
  - page.show_footer
  - page.show_nav
  - page.transition
  - etc. applied to the page

</div>


#### File Naming

Files are named in rendering order: `[filename].aaa.bbb.ccc` where the `ccc` is processed first, then `bbb`, and final output is in `aaa`. For example: `webpage.html.md` is a markdown file processed down into html, and `rubyfile.html.erb` is an ERB file processed into html. 

Regardless of naming convention, all files can have YAML front-matter (with the exception of layouts).


#### Partials

Partials are useful short reusable components. Very useful with `navigation` and other components that appear more than once, or to be organizationally dropped into another page (like a sidebar or changelog).

Usage:

~~~ erb 
<%= partial '/partials/_coeur-nav' %>
~~~ 

Note that the partial file has to have a leading underscore: `_nav.erb`


Partials can also take variables, as used in the Colors section. Usage:

- <% name = 'example' %>
- <% varName = 'example' %>
- <% swatch = 'example' %>

~~~ erb
<%= partial '/partials/coeur-swatch', 
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


#### Layouts

(regular and nested layouts w/ ruby)



#### Github

Pushing changes to Github is nothing special. Just add / commit / push your updates like normal.

- add: `github add . -A`
- commit: `github commit -m 'update message'` 
- push update to master: `github push origin master` 






<div class="_color-inactive" markdown="1">

#### Build Tasks

(need to implement Grunt or Gulp for slightly simpler building and deployment)

</div>








</main>

