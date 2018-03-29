
# SITE CONFIG DETAILS
set :site_title, "coeur <3"
set :use_default_head, true
set :use_default_nav, true
set :content_path, "./"


# COEUR ASSETS
# copy coeur assets to this project

# what do you want synced to coeur?

styles = true
scripts = true
source = true    # fonts, layouts, partials, etc.

coeur = "../../node_modules/coeur" # << use this one to pull from node_modules 

# if _src "flag" was set when running npm script, we don't pull from node_modules
# (this is used to rebuild the base coeur project docs)
# http://rubyforadmins.com/passing-arguments-to-script
unless ARGV.empty?
  for arg in ARGV
    if arg == "_src"
      coeur = "../../"
    end
  end
end

target = "source/assets/coeur"



# copy_file "initializer.rb", "config/initializers/#{file_name}.rb"
# if styles || scripts || source
  # FileUtils.mkdir "#{target}"
# end
if styles
  # puts "copying stylecoeur..."
  FileUtils.mkdir_p "source/assets"
  FileUtils.mkdir_p "#{target}/stylecoeur"
  FileUtils.copy_entry "#{coeur}/stylecoeur", "#{target}/stylecoeur"
end
if scripts
  # puts "copying scriptcoeur..."
  FileUtils.mkdir_p "source/assets"
  FileUtils.mkdir_p "#{target}/scriptcoeur"
  FileUtils.copy_entry "#{coeur}/scriptcoeur", "#{target}/scriptcoeur"
end
if source
  # puts "copying sourcecoeur..."
  FileUtils.copy_entry "#{coeur}/sourcecoeur/layouts", "#{target}/../../layouts"
  FileUtils.copy_entry "#{coeur}/sourcecoeur/partials", "#{target}/../../partials"

  FileUtils.mkdir_p "source/assets"
  FileUtils.mkdir_p "source/assets/fonts"
  FileUtils.copy_entry "#{coeur}/sourcecoeur/fonts", "#{target}/../fonts/"

  FileUtils.mkdir_p "#{target}/../wireframes"
  FileUtils.copy_entry "#{coeur}/sourcecoeur/wireframes", "#{target}/../wireframes"
end

# Copy over the project readme to be available in the docs
FileUtils.copy_file "../../readme.md", "source/_imported_readme.md.erb"





###
# Page options, layouts, aliases and proxies
###


# instead of markdown
require "kramdown"
set :markdown_engine, ::Tilt::KramdownTemplate
set :markdown_engine, :kramdown


# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false



set :build_dir, 'build'
set :partials_dir, 'partials'
set :fonts_dir, 'fonts'


# activate the extension for pw protect
activate :gibberish do |gibberish|
# set the default password
  gibberish.password = 'gibberish'

# encrypt a page with the default password
  gibberish.encrypt 'foo.html'

# encrypt a page with a different password
  # gibberish.encrypt 'bar.html', 'p@55w0rd'

# encrypt at set of pages with the default password
  # gibberish.encrypt 'seKrit/**/**'

# encrypt at set of pages with a different password
  # gibberish.encrypt 'kayne/**/**', 'i can hold my liquor'
end


# activate :asset_hash # github cache buster; sometimes messes up deployment


# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

activate :syntax, :line_numbers => true

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"

  # blog.permalink = "{year}/{month}/{day}/{title}.html"
  # Matcher for blog source files
  # blog.sources = "posts/{year}-{month}-{day}-{title}.html"
  blog.sources = "posts/{title}, styleguide"
  # blog.taglink = "tags/{tag}.html"
  # blog.layout = "layout"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  # blog.default_extension = ".markdown"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"
end





# https://github.com/manastech/middleman-search
# activate :search do |search|
#   search.resources = ['styleguide/', 'index.html', 'landing.html']
#   # search.index_path = 'search/lunr-index.json' # defaults to `search.json`
#   # search.lunr_dirs = ['source/vendor/lunr-custom/'] # optional alternate paths where to look for lunr js files
#   # search.language = 'es' # defaults to 'en'
#   search.fields = {
#     title:   {boost: 100, store: true, required: true},
#     content: {boost: 50},
#     # url:     {index: false, store: true},
#     # author:  {boost: 30}
#   }
# end


activate :deploy do |deploy|
  deploy.deploy_method = :git
  # Optional Settings
  deploy.remote   = 'origin' # remote name or git url, default: origin
  deploy.branch   = 'gh-pages' # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  # deploy.commit_message = 'custom-message'      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
end

page "/feed.xml", layout: false
# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end




