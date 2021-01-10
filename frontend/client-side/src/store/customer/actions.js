import axios from "axios";
import {Cookies} from "quasar";
import {uploadSingleImage} from "src/store/pro/actions";

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

export const fetchDashboard = async ({commit}) => {
    let token = Cookies.get('token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    let response = await axios.get(`${process.env.API_URL}/customer/dashboard`,{ headers })
    if(response.data.error === false) {
        commit('setDashboard', response.data)
    }
}

export const placeOrder = async ({}, order) => {
    let token = Cookies.get('token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    for(let i=0; i < order.images.length; i++) {
        let url = await uploadSingleImage(order.images[i])
        console.log(url)
        order.images[i] = url
    }
    let result = await axios.post(`${process.env.API_URL}/customer/place-order`, order, {headers})
    if( result.error ) {
        return {
            error: true,
            msg: "Request failed"
        }
    }
    return {
        error: result.data.error,
        msg: result.data.msg
    }
}

export const fetchOrders = async ({commit}, status) => {
    let token = Cookies.get('token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    let response = await axios.get(`${process.env.API_URL}/customer/orders`, {headers, params: {status: status || ''}})
    if(response.data.error === false) {
        commit('setOrders', response.data.data)
    }
}

export const fetchOrder = async ({commit}, id) => {
    let token = Cookies.get('token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    let response = await axios.get(`${process.env.API_URL}/customer/order`, {headers, params: {_id: id || ''}})
    if(response.data.error === false) {
        commit('setOrder', response.data.data)
        return false
    } else {
        return true
    }
}

export const updateOrder = async ({commit}, order) => {
    let token = Cookies.get('token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    let result = await axios.put(`${process.env.API_URL}/customer/order-status/${order._id}`, order, {headers})
    if( result.error ) {
        return {
            error: true,
            msg: "Request failed"
        }
    }
    return {
        error: result.data.error,
        msg: result.data.msg
    }
}