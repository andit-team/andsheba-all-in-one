import axios from 'axios'
const API = process.env.API


// Fetch all
export async function fetchAll({commit}, parent){
  const token = this.state.auth.token
  let response = await axios.get(`${API}/admin/customers`,{headers: {'Authorization': `Authorization ${token}`}});
  if(response.data.error === false){
      commit('setServices',response.data.data);
  }
}

// Fetch one
export async function fetchOne({commit}, id){
  const token = this.state.auth.token
  let response = await axios.get(`${API}/admin/customer/`+id,{headers: {'Authorization': `Authorization ${token}`}});
  if(response.data.error === false){
      commit('setService',response.data.data);
  }
}

// Status update
export async function updateStatus({commit,dispatch}, {id, status}){
  const token = this.state.auth.token
  let response = await axios.put(`${API}/admin/customer-status/`+id,{status},{headers: {'Authorization': `Authorization ${token}`}});
  if(response.data.error === false){
    dispatch('fetchAll');
    return 1
  }else{
    return 0
  }
}
