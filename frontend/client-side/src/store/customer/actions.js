import axios from "axios";
import {Cookies} from "quasar";

export const registerCustomer = async ({}, customer) => {
    let response = await axios.post(`${process.env.API_URL}/customer/signup`, customer );
    console.log(response)
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
