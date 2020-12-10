import axios from 'axios'
const API = process.env.API

// Add new sub_category
export async function addSubCategories ({commit},data) {
  const token = this.state.auth.token
  let response = await axios.post(`${API}/admin/category`,data,{headers: {'Authorization': `Authorization ${token}`}} );
  if(response.data.error === false){
      commit('add', data)
  }
  
}

// Fetch sub_category
export const fetchSubCategories = async ({commit}, parent) => {
  let response = await axios.get(`${API}/admin/categories-dropdown?parent=` + parent );
  if(response.data.error === false){
      commit('setSubCategories',response.data.data);
  }
}