


# _stylecoeur

Core extensible collection of useful SCSS modules. Not a framework, just a bunch of loose concepts, ideas, and useful SCSS tied together. Like duct tape.



## Overview

### What is this?

If you have a ton of projects that use very similar styles, why reinvent the wheel? Create a reusable collection of SCSS modules (you can loosely call it a 'framework') to save yourself some time. This is NOT a framework. It's a collection of useful modules, and a starting point for you to build out your own framework.

The idea is to centralize all your styles to reduce the amount of work. This will also help you standardize naming conventions. I prefer my own simplified version of BEM syntax: [http://getbem.com/introduction/](http://getbem.com/introduction/)

Each project will import stylecoeur using symlink, then implement its own local styles on top of the core.




### Using this resource

Use it out of the box (I'm using it for all my projects) or add/remove whatever you want. Clone this project into a folder, and create a symlink to this folder in your SCSS folder. I prefer creating a symlinked / aliased external 'stylecoeur' folder where you can then cherry-pick whatever components you'd like to include. Don't forget that @importing a folder in SCSS automatically imports the index.scss file, if one exists. NOTE: right-click to create an alias doesn't always work. Use the CLI instead

Using the command-line interface, go to your new project's SCSS folder, then:

Creating a symlink file: ```ln -s ~/path/to/stylecoeur_folder/styles/index.scss _stylecoeur.scss```

Note how the name is changed to ```_stylecoeur.scss``` to conform to SCSS naming standards, but it doesn't really matter.

Creating a symlink folder in CLI. Navigate to the project's stylesheet folder: 

~~~ 
ln -s ~/path/to/styles/stylecoeur_folder stylecoeur
  ln -s /Users/janzheng/Desktop/projects/stylecoeur/styles stylecoeur
~~~


I prefer the latter option, because you can now import the folder as a whole:
```@import 'stylecoeur/stylecoeur.scss';```

or pick specific compontents ```@import 'stylecoeur/components/form';```

(Symlinks are simpler than using an npm module, since not all projects might even use npm or such)



### Middleman Styleguide

The documentation is written in a combination of ERB, Kramdown (variant of Markdown), and HTML, supported by SCSS.
Go to the source/ folder and use the following commands. Note that the source example uses a symlink itself.

~~~
bundle exec middleman server
~~~

then preview on `http://localhost:4567`


Compiling the example:

~~~
bundle exec middleman build
~~~

If you want to deploy Middleman as a straight-up site, you can do that for free on Github.

Deploying to Github uses [middleman deploy](https://github.com/middleman-contrib/middleman-deploy):

~~~
  bundle exec middleman build [--clean]
  bundle exec middleman deploy [--build-before]
~~~

`config.rb` file:
~~~
activate :deploy do |deploy|
  deploy.deploy_method = :git
  # Optional Settings
  # deploy.remote   = 'custom-remote' # remote name or git url, default: origin
  # deploy.branch   = 'custom-branch' # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  # deploy.commit_message = 'custom-message'      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
end
~~~


### Todos

Grids: 
- look at popular sites and recreate the top 20 popular layouts in grids
- create a new grids section for all those things, and share it online
  - mobile and desktop

Client Onboarding Process:
- Client acquisition questions
  - $ / size / etc.
- contract
- work orders
- invoices
- client notes + tracking


Design Process:
- Content, IA, Branding
- design goals, business goals, constraints
- accessibility + usability + human factors
  - where / how / who are using it
- track work + thoughts in progress, thoughts, screenshots, and how you got here
  - esp. w/ test-driven design
  - inputs + outputs
- BA-type work
  - wireframes
  - business requirements
  - component inputs + outputs (I/Os)


Other ideas to explore:
- Clearfix
- Progressive image loading
- Masonry
- scroll-fade-in-load effect (wordpress thing)
- tinyjpg
- google forms contact hack
- smooth scroll
- horizontal + vertical scroll
- ad block detect?



-- Vertical Tabs

[home] [design process] [functional] [styleguide] []

- design:
  - process
  - requirements

- functional 
  - implementation
  - test-driven components
    - design & development
    - inputs and outputs
  - react components
  - data model
  - api

- github update trick adding version: ?=v0.1








