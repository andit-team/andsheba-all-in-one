import axios from 'axios'
const API = process.env.API

export async function login ({commit}) {
  const response = await axios.post(`${API}/admin/login`,{
    mobile: "+8801780320711",
    password: "12345678"
})
  commit('login', response.data.token)
}
