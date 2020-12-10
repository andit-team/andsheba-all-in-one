import axios from 'axios'
import { Cookies } from 'quasar'

export const fetchPlans = async ({commit}) => {
    let response = await axios.get('http://localhost:5000/api/pro/plans' );
    if(response.data.error === false){
        commit('setPlans',response.data.data);
    }
}

export const registerPro = async ({}, pro) => {
    let response = await axios.post('http://localhost:5000/api/pro/signup', pro );
    if(response.data.error === false) {
        Cookies.set('token', response.data.token)
    }
    return {
        error: response.data.error,
        msg: response.data.msg
    }
}

export const loginPro = async ({}, pro) => {
    let response = await axios.post('http://localhost:5000/api/pro/login', pro );
    if(response.data.error === false) {
        Cookies.set('token', response.data.token)
    }
    return {
        error: response.data.error,
        msg: response.data.msg
    }
}

export const fetchPro = async ({commit}) => {
    let token = Cookies.get('token')
    let response = await axios.post('http://localhost:5000/api/pro/verify', {token} )
    if(response.data.error === false) {
        commit('setPro', response.data.data);
        return {
            error: false,
            data: response.data.data
        }
    }
    return {
        error: true
    }
}


export const addService = async ({}, service ) => {
    let token = Cookies.get('token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    let response = await axios.post('http://localhost:5000/api/pro/service', {...service}, { headers } )
    return {
        error: response.data.error,
        msg: response.data.msg
    }
}
