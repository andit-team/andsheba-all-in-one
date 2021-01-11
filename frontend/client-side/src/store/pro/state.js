export default function () {
    return {
        pro: {
            auth: false,
            name: ''
        },
        plans: [],
        token: '',
        services: [],
        service: {
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
        },
        orders: [],
        ordersStatus: '',
        order: null,
        dashboard: null
    }
}
