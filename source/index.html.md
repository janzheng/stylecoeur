---
layout: main
---



<summary markdown="1">

# _stylecoeur

Core extensible collection of useful SCSS modules. Not a framework, just a bunch of loose concepts, ideas, and useful SCSS tied together. Like duct tape.

</summary>



<article class="_gr-one-three">

<nav class="_sidebar">
  <div><a href="/landing.html">Example Page</a></div>
  <div><a href="/styleguide.html">Style Guide</a></div>
</nav>


<main markdown="1">

## Overview

### What this is

If you have a ton of projects that use very similar styles, why reinvent the wheel? Create a reusable collection of SCSS modules (you can loosely call it a 'framework') to save yourself some time. This is NOT a framework. It's a collection of useful modules, and a starting point for you to build out your own framework.

The idea is to centralize all your styles to reduce the amount of work. This will also help you standardize naming conventions. I prefer my own simplified version of BEM syntax: [http://getbem.com/introduction/](http://getbem.com/introduction/)

Each project will import stylecoeur, then implement its own styles on top of the core.




### Using this resource

Use it out of the box (I'm using it for my projects) or add/remove whatever you want. Clone this project into a folder, and create a symlink to this folder in your SCSS folder. I prefer creating a symlinked / aliased external 'stylecoeur' folder where you can then cherry-pick whatever components you'd like to include. Don't forget that @importing a folder in SCSS automatically imports the index.scss file, if one exists. NOTE: right-click to create an alias doesn't always work. Use the CLI instead

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




## Naming Convention

Naming convention is inspired BEM and exists to keep all elements and components organzied. These are not hard and fast rules, and they may even be broken sometimes... but it's good to have some semblance of organization.


### Naming
- ```element``` Element class name like ".form_one" or ".message_cta" 
- ```_component``` Styling component like Button, Form, etc. denoted with a leading underscore
- ```_component_name_one``` Long multi-word names uses underscore 
- ```_component--attribute``` Attributes are descriptors of the element or the component, like a 'container' or  'element--intro' to describe a certain part. Sometimes naming can feel 'flipped' for example a sub-footer would be named 'footer--sub'
- ```_component-minor-cascading-attribute``` Cascading attributes are denoted with a simple dash. ```._color-bg-yellow``` defines a color component, the effect (bg), and yellow, or ```._font-sans``` defines a font component, sans-serif. I guess this follows the French way of following a noun with adjectives. (It's my preference!)
- ```--state``` States describe the component or element, and are "floating" - in BEM these are ```.button--state-success``` but I prefer separating state from the element or component. This way you can reuse the --state flag for different elements and components, like ```._form --success``` and ```._button --success```


### HTML

- ```<Element class="element _component_name --state_1 --state_2 />```

### Tips
- using the `-` dash to separate names and descriptors helps with double-click selecting the entire name, whereas underscores are included in the selection, dashes are not. The original BEM syntax ```.my-component__list-item``` is annoying b/c double clicking the component name selects the wrong parts of the name. Instead, give it the name of ```.my_component--list_item``` allows you to select the right parts with a simple double-click
- In your SCSS, avoid the use of &--state as much as possible, as these are hard to search for with cmd-f
- Keep reusability and extensibility in mind


</main>

</article>




