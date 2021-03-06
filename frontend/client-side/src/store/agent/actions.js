import axios from 'axios'
import { Cookies } from 'quasar'

export const registerAgent = async ({}, agent) => {
    let response = await axios.post(`${process.env.API_URL}/agent/signup`, agent );
    if(response.data.error === false) {
        Cookies.set('andsheba_token', response.data.token)
    }
    return {
        error: response.data.error,
        msg: response.data.msg
    }
}

export const loginAgent = async ({}, agent) => {
    let response = await axios.post(`${process.env.API_URL}/agent/login`, agent );
    if(response.data.error === false) {
        Cookies.set('andsheba_token', response.data.token)
    }
    return {
        error: response.data.error,
        msg: response.data.msg
    }
}

export const fetchAgent = async ({commit}) => {
    
    let token = Cookies.get('andsheba_token')
    let response = await axios.post(`${process.env.API_URL}/agent/verify`, {token} )
    console.log(response)
    if(response.data.error === false) {
        commit('setAgent', response.data.data)
        return {
            error: false,
            data: response.data.data
        }
    }
    return {
        error: true
    }
}

export const updateStatus = async ({}, service) => {
    let token = Cookies.get('andsheba_token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    let response = await axios.put(`${process.env.API_URL}/pro/service-status/${service.id}` , {status: service.status}, {headers})
    return response.data
}

export const fetchServices = async ({commit}) => {
    let token = Cookies.get('andsheba_token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    let response = await axios.get(`${process.env.API_URL}/agent/service`,{ headers })
    if(response.data.error === false) {
        commit('setServices', response.data.data)
        return response.data.error
    }
}

// Fetch Orders
export const fetchOrders = async ({commit}) => {
    let token = Cookies.get('andsheba_token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    let response = await axios.get(`${process.env.API_URL}/agent/orders?status`,{ headers })
    if(response.data.error === false) {
        commit('setOrders', response.data.data)
    }
}

// Fetch Order
export const fetchOrder = async ({commit},id) => {
    let token = Cookies.get('andsheba_token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    let response = await axios.get(`${process.env.API_URL}/agent/order?_id=${id}`,{ headers })
    if(response.data.error === false) {
        commit('setOrder', response.data.data)
    }
}

// Fetch Dashboard data
export const fetchDashboard = async ({commit},id) => {
    let token = Cookies.get('andsheba_token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    let response = await axios.get(`${process.env.API_URL}/agent/dashboard`,{ headers })
    if(response.data.error === false) {
        commit('setDashData', response.data.data)
    }
}

export const updateProfile = async ({}, pro) => {
    let token = Cookies.get('andsheba_token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    let response = await axios.put(`${process.env.API_URL}/agent/profile`, {...pro}, { headers } )
    return {
        error: response.data.error,
        msg: response.data.msg
    }
}
