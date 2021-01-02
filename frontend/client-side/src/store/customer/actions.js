import axios from "axios";
import {Cookies} from "quasar";

export const registerCustomer = async ({}, customer) => {
    let response = await axios.post(`${process.env.API_URL}/customer/signup`, customer );
    if(response.data.error === false) {
        Cookies.set('token', response.data.token)
    }
    return {
        error: response.data.error,
        msg: response.data.msg
    }
}

export const loginCustomer = async ({}, customer) => {
    let response = await axios.post(`${process.env.API_URL}/customer/login`, customer );
    if(response.data.error === false) {
        Cookies.set('token', response.data.token)
    }
    return {
        error: response.data.error,
        msg: response.data.msg
    }
}

export const fetchCustomer = async ({commit, state}) => {
    if(!state.customer.isVerified) {
        let token = Cookies.get('token')
        let response = await axios.post(`${process.env.API_URL}/customer/verify`, {token} )
        if(response.data.error === false) {
            commit('setCustomer', {
                isVerified: true,
                ...response.data.data
            });
            return true
        }
    } else {
        return true
    }
    return false
}

export const updateCustomer = async ({commit}, customer) => {
    let token = Cookies.get('token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    let response = await axios.put(`${process.env.API_URL}/customer/update`, customer, {headers})
    if(response.data.error === false) {
        commit('setCustomer', customer)
        return {
            error: false,
            msg: "User updated Successfully"
        }
    }
    return {
        error: true,
        msg: response.data.msg
    }
}
