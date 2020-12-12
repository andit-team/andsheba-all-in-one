import axios from 'axios'
const API = process.env.API

export async function login ({commit},payload) {

  const res = await axios.post(`${API}/admin/login`,payload)
  if(!res.data.error){
    commit('login', res.data.token)
  }

  return res.data
}
