/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

const authLink = setContext((_, { headers }) => {
  // get the authentication token from localstorage if it exists
  const token = localStorage.getItem('appIdToken')

  // return the headers to the context so httpLink can read them
  return {
      headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : null
      }
  }
})


const httpLink = new HttpLink({
  // TBD - Move this to ENV
  // URL to graphql server, 
  uri: 'https://resolved-firefly-43.hasura.app/v1/graphql'
})

// create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Argon);
// install the vue plugin
Vue.use(VueApollo)
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Amplify.configure(awsconfig);

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
