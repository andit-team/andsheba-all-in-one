import axios from 'axios'
const API = process.env.API


// Fetch all
export async function fetchAll({commit}, data){
  const token = this.state.auth.token
  let response = await axios.get(`${API}/admin/agents?status=${data}`,{headers: {'Authorization': `Authorization ${token}`}});
  console.log(response)
  if(response.data.error === false){
      commit('setAgents',response.data.data);
  }
}

// Fetch one
export async function fetchOne({commit}, id){
  const token = this.state.auth.token
  let response = await axios.get(`${API}/admin/agent?_id=`+id,{headers: {'Authorization': `Authorization ${token}`}});
  if(response.data.error === false){
      commit('setAgent',response.data.data);
  }
}

// Status update
export async function updateStatus({commit,dispatch}, {id, data}){
  const token = this.state.auth.token
  let response = await axios.put(`${API}/admin/agent/`+id,{data},{headers: {'Authorization': `Authorization ${token}`}});
  if(response.data.error === false){
    dispatch('fetchAll');
    return 1
  }else{
    return 0
  }
}
