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


export const fetchToken = ({commit}) => {
    commit('setToken', Cookies.get('token'))
}
