import axios from 'axios'
const API = process.env.API

export async function setSocket ({commit},payload) {
    console.log(payload)

    commit('setSockets', {payload})
}
