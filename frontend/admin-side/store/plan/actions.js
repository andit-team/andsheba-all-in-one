import axios from 'axios'
const API = process.env.API

// Add new plans
export async function addPlan ({commit},data) {
  const token = this.state.auth.token
  let response = await axios.post(`${API}/admin/plan`,data,{headers: {'Authorization': `Authorization ${token}`}} );
  if(response.data.error === false){
      commit('add', data)
  }

  return response.data
  
}

// Fetch plans
export async function fetchPlans({commit}){
  let response = await axios.get(`${API}/admin/plans` );
  if(response.data.error === false){
      commit('setPlans',response.data.data);
  }
}

// Delete plans
export async function deletePlans({commit}, id){
  const token = this.state.auth.token
  let response = await axios.delete(`${API}/admin/plan/` + id,{headers: {'Authorization': `Authorization ${token}`}} );
  if(response.data.error === false){
    commit('filterPlans',id);
    return 1
  }
  return 0
}