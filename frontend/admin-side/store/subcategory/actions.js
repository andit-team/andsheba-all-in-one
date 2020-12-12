import axios from 'axios'
const API = process.env.API

// Add new sub_category
export async function addSubCategories ({commit},data) {
  const token = this.state.auth.token
  let response = await axios.post(`${API}/admin/category`,data,{headers: {'Authorization': `Authorization ${token}`}} );
  if(response.data.error === false){
      commit('add', data)
  }

  return response.data
  
}

// Fetch sub_category
export async function fetchSubCategories({commit}, parent){
  let response = await axios.get(`${API}/admin/categories-dropdown?parent=` + parent );
  if(response.data.error === false){
      commit('setSubCategories',response.data.data);
  }
}

// Delete sub_category
export async function deleteSubCategories({commit}, id){
  const token = this.state.auth.token
  let response = await axios.delete(`${API}/admin/category/` + id,{headers: {'Authorization': `Authorization ${token}`}} );
  if(response.data.error === false){
    commit('filterCategories',id);
    return 1
  }
  return 0
}