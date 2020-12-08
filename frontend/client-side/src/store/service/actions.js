import axios from 'axios'

export const fetchCategories = async ({commit}) => {
    let response = await axios.get('http://localhost:5000/api/admin/categories-dropdown?parent=' );
    if(response.data.error === false){
        commit('setCategories',response.data.data);
    }
}
export const fetchSubCategories = async ({commit}, parent) => {
    let response = await axios.get('http://localhost:5000/api/admin/categories-dropdown?parent=' + parent );
    if(response.data.error === false){
        commit('setSubCategories',response.data.data);
    }
}
