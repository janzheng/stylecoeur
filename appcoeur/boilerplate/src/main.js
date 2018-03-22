// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable */

// 1
import { ApolloClient } from 'apollo-client'

import 'tachyons'
import Vue from 'vue'

import VueApollo from 'vue-apollo'
import router from './router'

// outside JQuery events
import vOutsideEvents from 'vue-outside-events'

// Apollo 2.0
import { HttpLink, createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'; // old
// subscriptions
import { getOperationAST } from 'graphql';
import { ApolloLink } from 'apollo-client-preset';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';


// LOCAL 

import { GC_USER_ID, GC_AUTH_TOKEN, GC_API_URI, GC_SUBSCRIPTION_URI } from './constants/settings'
import App from './App'
import { store } from './store/' // vuex store


Vue.use(vOutsideEvents)
Vue.use(VueApollo)

Vue.config.productionTip = false



//
//    APOLLO stuff
// 

// V2 - from the React-Apollo tutorial and other bits
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjaq2lk9p3obh0170gwl9ugsb'}) // > graphcool info (gives simple endpoint)


const authorizationLink = new ApolloLink((operation, next) => {
  let token = localStorage.getItem(GC_AUTH_TOKEN)
  token = token ? `Bearer ${token}` : null;

  operation.setContext({
    headers: {
      authorization: token
    }
  });

  return next(operation);
});

const wsLink = new WebSocketLink({
  uri: GC_SUBSCRIPTION_URI,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localStorage.getItem(GC_AUTH_TOKEN)
    }
  }
});

const link = ApolloLink.split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  authorizationLink.concat(httpLink)
)

const apolloClient = new ApolloClient({
  link: link, // v2
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__), // old: new InMemoryCache()
  connectToDevTools: true
})



const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

let userId = localStorage.getItem(GC_USER_ID)





// Instantiate Main Vue boilerplate test app
new Vue({
  el: '#app',
  apolloProvider,
  store, // vuex store
  router,
  data: {
    userId
  },
  render: h => h(App)
  // template: '<App/>',
  // components: { App }
})





