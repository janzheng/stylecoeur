---
title: Using Middleman
type: styleguide
layout: layout-styleguide
name: usingMiddleman
section: about
status: --draft
source: ../
---

<main markdown="1">

## Using Middleman & Github

Middleman combines ERB (a Ruby on Rails templating language) with YAML and a few other things. Takes a bit to get used to but it's nice.

`bundle exec middleman server --port 4567` - default port is at 4567.

You can access a special middleman config page: `http://127.0.0.1:4567/__middleman`

`bundle exec middleman build` - builds the flat html files


#### Middleman Variables

- `current_page`
- using the `resource` loop / array
- using the config page for help / hints
- docs
- 

#### File Naming

Files are named in rendering order: `[filename].aaa.bbb.ccc` where the `ccc` is processed first, then `bbb`, and final output is in `aaa`. For example: `webpage.html.md` is a markdown file processed down into html, and `rubyfile.html.erb` is an ERB file processed into html. 

Regardless of naming convention, all files can have YAML front-matter (with the exception of layouts).


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

ERB uses Ruby, so refer to Rubydocs for the full things.



#### Partials

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



<div class="_color-inactive" markdown="1">

### YAML &amp; Front Matter

- front matter
- source: structure / head
- configuring head
- accessing front matter

- front-matter flags
  - page.show_footer
  - page.show_nav
  - page.transition
  - etc. applied to the page

<div class='_message --warning' markdown="1">

- handling arrays

</div>


#### Layouts

(regular and nested layouts w/ ruby)

</div>



#### Gems and Bundle

Installing Gems is easy. Just add the gem to the `Gemfile`: `gem 'middleman-deploy', '~> 2.0.0.pre.alpha'` and then run in the console: `bundle install` to make middleman recognize it.


#### Github

Nothing special. Just add / commit / push your updates.

- add: `github add . -A`
- commit: `github commit -m 'update message'` 
- push update to master: `github push origin master` 



#### Deployment

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






<div class="_color-inactive" markdown="1">

### Build Tasks

(need to implement Grunt or Gulp for slightly simpler building and deployment)

</div>

</main>

