---
title: Syntax Highlighting
type: styleguide
layout: layout-styleguide
name: syntax
section: about
<!-- status: --draft -->
source: ../
---

<main markdown="1">

## Syntax Highlighting

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
</main>


