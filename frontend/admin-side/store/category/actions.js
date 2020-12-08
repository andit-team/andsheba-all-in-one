const API = process.env.API

// Add new category
export function add ({commit}) {
  
  commit('add', data)
}

// Fetch from Database
export async function fetch ({commit}) {
  const response = await axios.get(`${API}/admin/category-get-all`)
  commit('fetch', response.data)
}
