import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import category from './category'
import subcategory from './subcategory'
import plan from './plan'
import service from './service'
import customer from './customer'
import pro from './pro'
import agent from './agent'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      category,
      subcategory,
      plan,
      service,
      customer,
      pro,
      agent,
    }
  })
}
export default createStore