import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import pro from './pro'
import auth from './auth'
import service from './service'
import customer from './customer'
import location from './location'
import agent from './agent'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      pro,
      auth,
      service,
      customer,
      location,
      agent
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
