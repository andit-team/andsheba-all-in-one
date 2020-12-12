import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import category from './category'
import subcategory from './subcategory'
import plan from './plan'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      category,
      subcategory,
      plan,
    }
  })
}
export default createStore