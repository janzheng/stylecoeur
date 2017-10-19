---
layout: layout-main
---



<summary class="_width-content-max _padding-2" markdown="1">

# \_stylecoeur

### We are only as good as our tools.

This is your toolkit.
Be fast, be efficient, and stop reinventing stuff.

> This is my toolkit. There are many like it, but this one is mine. My toolkit is my best friend. It is my life. I must master it as I must master my life. Without me, my toolkit is useless. Without my toolkit, I am useless.

This is not a framework, just a bunch of loose concepts, ideas, SCSS, tools and Javascript bundled together. 

Like a toolkit. Made of duct tape.

<div class="_margin-bottom-2">
  <div class="_buttonGroup --outline">
    <a class="_button --short" target="_blank" href="./system.html">Design System</a>
    <a class="_button --short" target="_blank" href="./styleguide.html">Style Guide</a>
    <a class="_button --short" target="_blank" href="./notes.html">Notes &amp; Todos</a>
  </div>
</div>

</summary>



<article class="_width-content-max-narrow _margin-center">


<main markdown="1">

## Overview

If you have a ton of projects that use very similar styles, why reinvent the wheel? Create a reusable collection of SCSS modules (you can loosely call it a 'framework') to save yourself some time. This is NOT a framework. It's a collection of useful modules, and a starting point for you to build out your own framework.

The idea is to centralize all your styles to reduce the amount of work. This will also help you standardize naming conventions. I prefer my own simplified version of BEM syntax: [http://getbem.com/introduction/](http://getbem.com/introduction/)

Each project will import stylecoeur, then implement its own styles on top of the core.



### Usage

The style guide is very modular, so only link the SCSS components you need.


#### Static Copy

__Preferred Usage.__ Copy the full `styles` folder over to a new project. If the core changes, just make sure to copy the newest one over. Eventually there might be a build task to ensure it stays up to date. This method is preferred, as it prevents accidental changes to the core.

#### Symlink

Create a symlink to this project from your project, which gives you control of editing the core. This is powerful but dangerous, since changes might ripple across projects. Don't forget that @importing a folder in SCSS automatically imports the index.scss file, if one exists. NOTE: right-click to create an alias doesn't always work, so use the CLI instead.

Using the command-line interface, go to your new project's SCSS folder, then:

Creating a symlink file: 

~~~
ln -s ~/path/to/stylecoeur_folder/styles/index.scss _stylecoeur.
~~~

Note how the name is changed to ```_stylecoeur.scss``` to conform to SCSS naming standards, but it doesn't really matter.

Creating a symlink folder in CLI. Navigate to the project's stylesheet folder: 

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

(Symlinks are simpler than using an npm module, since not all projects might even use npm or such)





### Running the Guide

The documentation is written in a combination of ERB, Kramdown (variant of Markdown), and HTML, supported by SCSS.
Go to the source/ folder and use the following commands. Note that the source example uses a symlink itself. The site is built on top of [Middleman](http://middlemanapp.com)

~~~
bundle exec middleman server
~~~

then preview on `http://localhost:4567`


Compiling the example:

~~~
bundle exec middleman build
~~~

Happy frameworking. I mean tool kitting.


</main>

</article>




