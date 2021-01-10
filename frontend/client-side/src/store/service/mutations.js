import {LocalStorage} from "quasar";

export const setCategories = (state, categories ) => {
    state.categories = categories
}
export const setSubCategories = (state, sub_categories ) => {
    state.sub_categories = sub_categories
}

export const setService = (state, service ) => {
    state.service = service;

    let p_service = LocalStorage.getItem('answers');
    let p_answers = []
    if( p_service && p_service.service_id === service._id ) {
        p_answers = p_service.answers
    }


    let answers = service.questions.map(question => {

        if(question.question_type === 'checkbox') {
            let answers = question.answers.map( answer => {
                for(let i = 0;i < p_answers.length; i++) {
                    if(p_answers[i]._id === question._id) {
                        for( let j = 0 ; j < p_answers[i].answers.length; j++ ) {
                            if(p_answers[i].answers[j]._id === answer._id) {
                                return p_answers[i].answers[j]
                            }
                        }
                    }
                }
                return {
                    _id: answer._id,
                    value: false
                }
            })
            return {
                _id: question._id,
                answers: answers
            }
        } else if(question.question_type === 'unit' && question.answers.length > 0) {
            for(let i = 0;i < p_answers.length; i++) {
                if(p_answers[i]._id === question._id) {
                    return p_answers[i]
                }
            }
            return {
                _id: question._id,
                unit_type: question.answers[0].answer_title_or_unit,
                unit: "",
                price: question.answers[0].price
            }
        } else {
            for(let i = 0;i < p_answers.length; i++) {
                if(p_answers[i]._id === question._id) {
                    return p_answers[i]
                }
            }
            return {
                _id: question._id,
                value: ''
            }
        }
    })
    state.answers = answers
}

export const setServices = (state, services ) => {
    state.services = services
}


export const setCart = (state, cart )=> {
    state.cart = {
        ...state.cart,
        ...cart
    }
}