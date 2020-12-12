import axios from 'axios'
const API = process.env.API

// Add new category
export async function addCategories ({commit},data) {
  const token = this.state.auth.token
  let response = await axios.post(`${API}/admin/category`,data,{headers: {'Authorization': `Authorization ${token}`}} );
  console.log(response)
  if(response.data.error === false){
      commit('add', data)
  }
  return response.data
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

// Delete sub_category
export async function deleteCategories({commit}, id){
  const token = this.state.auth.token
  let response = await axios.delete(`${API}/admin/category/` + id,{headers: {'Authorization': `Authorization ${token}`}} );
  if(response.data.error === false){
    commit('filterCategories',id);
    return 1
  }
  return 0
}