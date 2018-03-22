
## VueCoeur Boilerplate


Built from the Vue-Apollo tutorial. Refer to the https://www.howtographql.com/vue-apollo/1-getting-started/ or the `vue-apollo` starter app under \_lessons


- Boilerplate for Vue apps; example uses graph.cool and Apollo

Added: 
  - for intercepting JQuery events: https://github.com/nchutchind/vue-outside-events
    - https://nchutchind.github.io/vue-outside-events/dist/vue-outside-events.min.js
  - vuex — state management: https://vuex.vuejs.org
  - sass-loader
  - data validation: https://github.com/monterail/vuelidate

Examples:
  - https://github.com/PierBover/vuex-apollo-example-project


### Running / Developing / Deploying

- `npm run dev`
- `npm run build`
- `npm run local` — custom; builds a "local" version able to deploy to any static site; relative






## Vue Apollo Tutorial

- try to keep the server the same as in the react-apollo tutorial!


### GraphCool GQL

Setting up Graphcool and data on a clean build

- https://www.howtographql.com/vue-apollo/1-getting-started
- npm install -g graphcool
- graphcool init --schema https://graphqlbin.com/hn-starter.graphql --name Hackernews
- graphcool playground — runs the playground site
- graphcool endpoints
- graphcool console 
- graphcool pull
- graphcool push
- graphcool status
- graphcool email-password template
  - CLI server directory: (their graphcool-framework is wrong, it's just graphcool)
    graphcool add-template graphcool/templates/auth/email-password

#### Setup


- https://console.graph.cool/react-apollo-tutorial/playground
- graph.cool example db: https://console.graph.cool/react-apollo-tutorial/schema/types
- error on init: https://www.graph.cool/forum/t/migrate-schema-name-options-in-graphcool-init/1514
- install graph cool: npm install -g graphcool | graphcool init server | graphcool playground
- set up endpoint from Graphcool (> graphcool info)
- npm install -g vue-cli



### Deployment

Options: 
- surge.sh
- Github Pages

https://www.howtographql.com/vue-apollo/10-deploying/
Extra chapter on deploying on Surge.sh:
- npm install -g surge
- npm run build
- cd dist
- surge

deploy to: janz_test.surge.sh

conflicting graphql versions, check: npm list | grep graphql

install the same version of graphql as the one in react-apollo devDependencies list, for example, for react-apollo 1.4.15, just npm install graphql@0.11.7

yarn add graphql@0.10.5 --dev

dynamic routing intercept: https://surge.sh/help/adding-a-200-page-for-client-side-routing
- added a 200.html, and a new new HtmlWebpackPlugin to webpack.prod to build it
- https://surge.sh/help/adding-a-200-page-for-client-side-routing
- https://nchutchind.github.io/vue-outside-events/dist/vue-outside-events.min.js
- added a "local" build for static, local routes / file://
- running from file:// creates Access-Control-Allow-Origin problems; need to be uploaded to at least Github Pages



