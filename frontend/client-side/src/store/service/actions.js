import axios from 'axios'
import {LocalStorage, SessionStorage} from "quasar";

export const fetchCategories = async ({commit}) => {
    let response = await axios.get(`${process.env.API_URL}/admin/categories-dropdown?parent=` );
    if(response.data.error === false){
        commit('setCategories',response.data.data);
    }
}
export const fetchSubCategories = async ({commit}, parent) => {
    let response = await axios.get(`${process.env.API_URL}/admin/categories-dropdown?parent=${parent}` );
    if(response.data.error === false){
        commit('setSubCategories',response.data.data);
    }
}


export const fetchServices = async ({commit}, params) => {
    let response = await axios.get(`${process.env.API_URL}/customer/search` , {params: params } );
    if(response.data.error === false){
        commit('setServices',response.data.data);
    } else {
        commit('setServices',[]);
    }
}

export const fetchService = async ({commit}, id) => {
    let response = await axios.get(`${process.env.API_URL}/customer/search/${id}` );
    console.log(response)
    if(response.data.error === false){
        commit('setService',response.data.data);
    }
}


export const fetchSearch = async ({}, key) => {
    let response = await axios.post(`${process.env.API_URL}/customer/autocomplete-homepage`, {key})
    if(!response.data.error) {
        return response.data.data
    }
    return []
}

export const updateAnswersLocal = ({}, answers) => {
    LocalStorage.set('answers', answers)
}

export const updateServiceImagesLocal = ({}, images) => {
    SessionStorage.set('service_images', images)
}