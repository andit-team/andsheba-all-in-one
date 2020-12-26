import axios from 'axios'

export const fetchDivisions = async ({commit}) => {
    let response = await axios.get(`${process.env.API_URL}/geo/get-divisions` );
    if(response.data.error === false){
        commit('setDivisions',response.data.data);
    }
}

export const fetchDistricts = async ({commit}, division_id) => {
    let response = await axios.get(`${process.env.API_URL}/geo/get-districts?division_id=${division_id}` );
    if(response.data.error === false){
        commit('setDistricts',response.data.data);
    }
}

export const fetchMunicipals = async ({commit}, district_id) => {
    let response = await axios.get(`${process.env.API_URL}/geo/get-municipals?district_id=${district_id}` );
    if(response.data.error === false){
        commit('setMunicipals',response.data.data);
    }
}
export const fetchWards = async ({commit}, municipal_id) => {
    let response = await axios.get(`${process.env.API_URL}/geo/get-wards?municipal_id=${municipal_id}` );
    if(response.data.error === false){
        commit('setWards',response.data.data);
    }
}



export const fetchUpazilas = async ({commit}, district_id) => {
    let response = await axios.get(`${process.env.API_URL}/geo/get-upazilas?district_id=${district_id}` );
    console.log(response)
    if(response.data.error === false){
        commit('setUpazilas',response.data.data);
    }
}


export const fetchUnion = async ({commit}, upazila_id) => {
    let response = await axios.get(`${process.env.API_URL}/geo/get-unions?upazilla_id=${upazila_id}` );
    if(response.data.error === false){
        commit('setUnions',response.data.data);
    }
}


export const fetchVillages = async ({commit}, union_id) => {
    let response = await axios.get(`${process.env.API_URL}/geo/get-villages?union_id=${union_id}` );
    if(response.data.error === false){
        commit('setVillages',response.data.data);
    }
}