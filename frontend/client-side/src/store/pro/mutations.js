export const setPlans = (state, plans) => {
    state.plans = plans
}

export const setPro = (state, pro) => {
    state.pro = {
        ...state.pro,
        ...pro
    }
}

export const setServices = (state, services) => {
    state.services = services
}

export const setToken = (state, token) => {
    state.token = token
}


export const setService = (state, service ) => {
    state.service = {
        ...state.service,
        ...service
    }
}

export const clearService = (state) => {
    state.service = {
        name: null,
        category: null,
        sub_category: null,
        tags: [],
        description: null,
        faqs: [
            {
                question: "",
                answer: ""
            }
        ],
        pricing: [
            {
                title: "",
                question_type: "radio",
                answers: [
                    {answer_title_or_unit: '',price: ''}
                ],
            }
        ],
        thumb_image: null,
        service_images: [],
        address: null,
        area_type: null,
        division: null,
        district: null,
        municipal: null,
        ward: null,
        upazila: null,
        union : null,
        village: null
    }
}


export const setOrders = (state, orders) => {
    state.orders = orders
}

export const setOrder = (state, order) => {
    this.order = order
}
