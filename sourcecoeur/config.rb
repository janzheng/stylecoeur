
# SITE DETAILS
set :site_title, "coeur"

# COEUR ASSETS
# copy assets over

coeur = "../"
# coeur = "../node_modules/coeur/" # << use this one to pull from node_modules

target = "source/coeur"

# what do you want copied?
styles = true
scripts = true
source = true    # fonts, layouts, partials, etc.

# copy_file "initializer.rb", "config/initializers/#{file_name}.rb"
# if styles || scripts || source
  # FileUtils.mkdir "#{target}"
# end
if styles
  FileUtils.mkdir_p "#{target}/stylecoeur"
  FileUtils.copy_entry "#{coeur}/stylecoeur", "#{target}/stylecoeur"
end
if scripts
  FileUtils.mkdir_p "#{target}/scriptcoeur"
  FileUtils.copy_entry "#{coeur}/scriptcoeur", "#{target}/scriptcoeur"
end
if source
  FileUtils.copy_entry "#{coeur}/sourcecoeur/layouts", "#{target}/../layouts"
  FileUtils.copy_entry "#{coeur}/sourcecoeur/partials", "#{target}/../partials"

  FileUtils.mkdir_p "#{target}/../fonts"
  FileUtils.mkdir_p "#{target}/../fonts/coeur"
  FileUtils.copy_entry "#{coeur}/sourcecoeur/fonts", "#{target}/../fonts/coeur/"

  FileUtils.mkdir_p "#{target}/../wireframes"
  FileUtils.copy_entry "#{coeur}/sourcecoeur/wireframes", "#{target}/../wireframes"
  FileUtils.copy_entry "#{coeur}/sourcecoeur", "#{target}/sourcecoeur"
end

# copy over the readme to be used in docs
# FileUtils.copy_file "readme.md", "source/_imported_readme.md.erb"





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




