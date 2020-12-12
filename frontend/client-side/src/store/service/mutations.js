export const setCategories = (state, categories ) => {
    state.categories = categories
}
export const setSubCategories = (state, sub_categories ) => {
    state.sub_categories = sub_categories
}

export const setService = (state, service ) => {
    state.service = service;
    let answers = service.questions.map(question => {
        if(question.question_type === 'checkbox') {
            let answer =question.answers.map(answer => {
                return false
            })
            return answer
        } else {
            return ""
        }
    })
    state.answers = answers
}

export const setServices = (state, services ) => {
    state.services = services
}

