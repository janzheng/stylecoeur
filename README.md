# [stylecore]
Core extensible collection of useful SCSS modules

## Overview

### What this is

If you have a ton of projects that use very similar styles, why reinvent the wheel? Create a reusable collection of SCSS modules (you can loosely call it a 'framework') to save yourself some time. This is NOT a framework. It's a collection of useful modules, and a starting point for you to build out your own framework.

The idea is to centralize all your styles to reduce the amount of work. This will also help you standardize naming conventions. I prefer my own simplified version of BEM syntax: [http://getbem.com/introduction/](http://getbem.com/introduction/)


### How to use

Use it out of the box (I'm using it for my projects) or add/remove whatever you want. Clone this project into a folder, and create an alias to this folder in your SCSS folder. I prefer creating a symlinked / aliased external 'stylecore' folder where you can then cherry-pick whatever components you'd like to include.

Using the command-line interface, go to your new project's SCSS folder, then:

Creating a symlink file:
ln -s ~/path/to/stylecore_folder/stylecore.scss _stylecore.scss

Note how the name is changed to '_stylecore.scss' to conform to SCSS naming standards, but it doesn't really matter.

Creating a symlink folder in CLI: ```
ln -s ~/path/to/stylecore_folder stylecore ```

I prefer the latter option, because you can now import the folder as a whole:
```@import 'stylecore/stylecore.scss';```

or pick specific compontents ```@import 'stylecore/components/form';```



## Naming Convention


