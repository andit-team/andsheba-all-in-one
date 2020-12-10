import axios from 'axios'
const API = process.env.API

// Add new category
export function add ({commit}) {
  const token = this.state.auth.token
  commit('add', data)
}

// Fetch All from Database
export async function fetchAll ({commit}) {
  const response = await axios.get(`${API}/admin/categories-dropdown`)
  commit('fetchAll', response.data.data)
}

// Fetch One from Database
export async function fetchOne ({commit},payload) {
  const token = this.state.auth.token
  const response = await axios.get(`${API}/admin/category/`+payload,{headers: {'Authorization': `Authorization ${token}`}})
  commit('fetchOne', response.data.data)
}
