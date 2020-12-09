import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import category from './category'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      category,
    }
  })
}
export default createStore