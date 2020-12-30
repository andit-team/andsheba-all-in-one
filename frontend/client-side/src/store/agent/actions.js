import axios from 'axios'
import { Cookies } from 'quasar'

export const registerAgent = async ({}, agent) => {
    let response = await axios.post(`${process.env.API_URL}/agent/signup`, agent );
    if(response.data.error === false) {
        Cookies.set('token', response.data.token)
    }
    return {
        error: response.data.error,
        msg: response.data.msg
    }
}

export const loginAgent = async ({}, agent) => {
    let response = await axios.post(`${process.env.API_URL}/agent/login`, agent );
    if(response.data.error === false) {
        Cookies.set('token', response.data.token)
    }
    return {
        error: response.data.error,
        msg: response.data.msg
    }
}

export const fetchAgent = async ({commit}) => {
    let token = Cookies.get('token')
    let response = await axios.post(`${process.env.API_URL}/agent/verify`, {token} )
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
    let token = Cookies.get('token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    let response = await axios.put(`${process.env.API_URL}/pro/service-status/${service.id}` , {status: service.status}, {headers})
    return response.data
}

export const fetchServices = async ({commit}) => {
    let token = Cookies.get('token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    let response = await axios.get(`${process.env.API_URL}/agent/service`,{ headers })
    if(response.data.error === false) {
        commit('setServices', response.data.data)
    }
}