# [stylecore]

Core extensible collection of useful SCSS modules. Not a framework, just a bunch of ideas tied together.

## Overview

### What this is

If you have a ton of projects that use very similar styles, why reinvent the wheel? Create a reusable collection of SCSS modules (you can loosely call it a 'framework') to save yourself some time. This is NOT a framework. It's a collection of useful modules, and a starting point for you to build out your own framework.

The idea is to centralize all your styles to reduce the amount of work. This will also help you standardize naming conventions. I prefer my own simplified version of BEM syntax: [http://getbem.com/introduction/](http://getbem.com/introduction/)

Each project will import stylecore, then implement its own styles on top of the core.




### How to use it / Installing

Use it out of the box (I'm using it for my projects) or add/remove whatever you want. Clone this project into a folder, and create an alias to this folder in your SCSS folder. I prefer creating a symlinked / aliased external 'stylecore' folder where you can then cherry-pick whatever components you'd like to include.

Using the command-line interface, go to your new project's SCSS folder, then:

Creating a symlink file: ```ln -s ~/path/to/stylecore_folder/stylecore.scss _stylecore.scss```

Note how the name is changed to ```_stylecore.scss``` to conform to SCSS naming standards, but it doesn't really matter.

Creating a symlink folder in CLI: ```
ln -s ~/path/to/stylecore_folder stylecore ```

I prefer the latter option, because you can now import the folder as a whole:
```@import 'stylecore/stylecore.scss';```

or pick specific compontents ```@import 'stylecore/components/form';```



## Naming Convention

Naming convention is inspired BEM and exists to keep all elements and components organzied.


### Naming
- ```element``` Element class name like ".form_one" or ".message_cta" 
- ```_component``` Styling component like Button, Form, etc. denoted with a leading underscore
- ```_component_name_one``` Long multi-word names uses underscore 
- ```_component--attribute``` Attributes are descriptors of the element or the component, like a 'container' or  'element--intro' to describe a certain part
- ```--state``` States describe the component or element, and are "floating" - in BEM these are ```.button--state-success``` but I prefer separating state from the element or component. This way you can reuse the --state flag for different elements and components, like ```._form --success``` and ```._button --success```


### HTML

- ```<Element class="element _component_name --state_1 --state_2 />```

### Tips
- using the `-` dash to separate names and descriptors helps with double-click selecting the entire name, whereas underscores are included in the selection, dashes are not. The original BEM syntax ```.my-component__list-item``` is annoying b/c double clicking the component name selects the wrong parts of the name. Instead, give it the name of ```.my_component--list_item``` allows you to select the right parts with a simple double-click
- In your SCSS, avoid the use of &--state as much as possible, as these are hard to search for with cmd-f
- Keep reusability and extensibility in mind




