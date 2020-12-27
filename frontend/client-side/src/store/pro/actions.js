import axios from 'axios'
import { Cookies } from 'quasar'
import { LocalStorage } from 'quasar'

export const fetchPlans = async ({commit}) => {
    let response = await axios.get(`${process.env.API_URL}/pro/plans` );
    if(response.data.error === false){
        commit('setPlans',response.data.data);
    }
}

export const registerPro = async ({}, pro) => {
    let response = await axios.post(`${process.env.API_URL}/pro/signup`, pro );
    if(response.data.error === false) {
        Cookies.set('token', response.data.token)
    }
    return {
        error: response.data.error,
        msg: response.data.msg
    }
}

export const loginPro = async ({}, pro) => {
    let response = await axios.post(`${process.env.API_URL}/pro/login`, pro );
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
    let response = await axios.post(`${process.env.API_URL}/pro/verify`, {token} )
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


export const addService = async ({state} ) => {
    let token = Cookies.get('token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    console.log(state.service)


    // let response = await axios.post(`${process.env.API_URL}/pro/service`, {...service}, { headers } )
    // return {
    //     error: response.data.error,
    //     msg: response.data.msg
    // }
}

export const fetchServices = async ({commit}) => {
    let token = Cookies.get('token')
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Authorization ${token}`
    }
    let response = await axios.get(`${process.env.API_URL}/pro/services`,{ headers })
    if(response.data.error === false) {
        commit('setServices', response.data.data)
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


export const updateServiceLocal = async ({}, service) => {
    LocalStorage.set('service', service)
}

export const fetchServiceLocal = async ({commit}) => {
    if(LocalStorage.has('service') ) {
        commit('setService', LocalStorage.getItem('service'))
    } else {
        let result = await axios.get('https://ipapi.co/json/')
        let address = {
            address: result.data.city + ", " + result.data.country_name,
            location: {
                lat: result.data.latitude,
                lng: result.data.longitude
            }
        }
        commit('setService', {address})
    }
}


function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;
    let byteCharacters = atob(b64Data);
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);
        let byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        let byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }
    let blob = new Blob(byteArrays, {type: contentType});
    return blob;
}