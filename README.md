


# coeur

#### The Heart of Design Systems


Core extensible collection of useful SCSS modules. Not a framework, just a bunch of loose concepts, ideas, and useful SCSS tied together. Like duct tape.

For quick design and prototyping iterations. This shortcut is not a replacement for creativity.

[Check it out in action](http://janzheng.com/stylecoeur)



## Overview

If you reuse design processes and UI patterns over and over, why reinvent the wheel? Save yourself time and create a toolbox of reusable components. Every designer should have their own collection. You may use this for your projects, or use this as a starting point for your own.


#### Philosophy

The idea is to centralize thought, processes and learning from previous projects for the betterment of future projects. Standardizations, conventions, and checklists will reduce the amount of work, deduplicate thought, and reduce for future projects. [Surgeons use checklists to save lives](http://www.npr.org/templates/story/story.php?storyId=122226184), so let's learn from them.






## Using stylecoeur

The style guide is very modular, so only link the SCSS components you need to keep the file size down. Either include the entire thing or select what you want to import. Remember that they depend on each other to work.

-  `@import '_styles/'` to automatically import the `index.scss` file which contains all parts, or 
- individually import each part like `@import 'neck';` or
- import each module separately `@import 'neck-code';`


#### Copying Files

__Preferred Method:__ Copy the full `styles` folder over to a new project. If the core changes, just make sure to copy over the newest version. Eventually there might be a build task to ensure it stays up to date. This method is preferred, as changes to the core won't affect the build. Copy over whatever JS files you need and/or link to them.

#### Symlinked Project

Creating a symlink will give control of editing the core, but changes ripple across projects if they're all symlinked. [right-click to create an alias doesn't work with the compiler] Using the command-line interface, go to your new project's SCSS folder, then:

1. Create a direct symlink file: 

~~~
ln -s ~/path/to/stylecoeur_folder/styles/index.scss _stylecoeur.
~~~

Note how the name is changed to `_stylecoeur.scss` to conform to SCSS naming standards, but it doesn't really matter.

2. Or create a symlink to the folder in CLI. Navigate to the project's stylesheet folder: 

~~~ 
ln -s ~/path/to/styles/stylecoeur_folder stylecoeur
ln -s /Users/janzheng/Desktop/projects/stylecoeur/styles stylecoeur
~~~

I prefer the latter option, because you can now import the folder as a whole:

~~~
@import 'stylecoeur/stylecoeur.scss';
~~~

or pick specific compontents 

~~~
@import 'stylecoeur/components/form';
~~~

(Symlinks are simpler than using an npm module, since projects like static sites might not use symlinks)



### Middleman Style Guide

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


