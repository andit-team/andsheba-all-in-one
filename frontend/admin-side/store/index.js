import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import category from './category'
import subcategory from './subcategory'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      category,
      subcategory,
    }
  })
}
export default createStore