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
    let pricing = JSON.parse ( JSON.stringify ( state.service.pricing.filter(question => question.title != "") ) )
    let faqs = state.service.faqs.filter(faq => faq.question != '')
    pricing.forEach(question => {
        question.answers = question.answers.filter(answer => answer.answer_title_or_unit != "" && answer.price != "")
    })

    let thumbImage = state.service.thumb_image && await uploadSingleImage(state.service.thumb_image)
    let galleryImages = []
    await state.service.service_images.map(async image => {
        let url = await uploadSingleImage(image)
        galleryImages.push(url)
    })

    let service = {
        title: state.service.name,
        category: state.service.category,
        sub_category: state.service.sub_category,
        tags: state.service.tags,

        description: state.service.description || '',
        faq: faqs,
        questions: pricing,

        thumb_img: thumbImage,
        gallery_images: galleryImages,
        address: state.service.address,
        division:  state.service.division.id,
        district: state.service.district.id,
        municipal: state.service.municipal ? state.service.municipal.id : '',
        ward: state.service.ward ? state.service.ward.id : '',
        upazila: state.service.upazila ? state.service.upazila.id : '',
        union:  state.service.union ? state.service.union.id : '',
        village: state.service.village ? state.service.village.id : '',
        residential_or_municipal: state.service.area_type.value
    }
    let response = await axios.post(`${process.env.API_URL}/pro/service`, {...service}, { headers } )
    return {
        error: response.data.error,
        msg: response.data.msg
    }
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


export const updateServiceLocal = async ({commit}, service) => {
    LocalStorage.set('service', service)
    commit('setService', service)
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


export const updateProfilePicture = async ({}, image) => {

}






function base64Data(ImageURL) {
    let block = ImageURL.split(";");
    return  block[1].split(",")[1];
}

async function uploadSingleImage(image) {
    const data = new FormData()
    data.append('image', base64Data(image))
    let url = "https://api.imgbb.com/1/upload?key=dbe026b9378783fd76fb76f8dea82edb";
    const res = await axios.post(url, data, {})
    if (res.data.success) {
       return res.data.data.image.url
    }
    return ''
}


