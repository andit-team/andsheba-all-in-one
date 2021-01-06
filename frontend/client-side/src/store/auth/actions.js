import axios from 'axios'
const API = process.env.API

export async function setSocket ({commit},payload) {
    commit('setSockets',payload)
}
