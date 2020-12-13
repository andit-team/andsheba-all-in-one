import axios from 'axios'
const API = process.env.API


// Fetch sub_category
export async function fetchAll({commit}, parent){
  const token = this.state.auth.token
  let response = await axios.get(`${API}/admin/services`,{headers: {'Authorization': `Authorization ${token}`}});
  if(response.data.error === false){
      commit('setServices',response.data.data);
  }
}
