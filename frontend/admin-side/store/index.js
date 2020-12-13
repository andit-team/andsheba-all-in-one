import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import category from './category'
import subcategory from './subcategory'
import plan from './plan'
import service from './service'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      category,
      subcategory,
      plan,
      service,
    }
  })
}
export default createStore