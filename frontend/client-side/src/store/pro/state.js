export default function () {
    return {
        pro: null,
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
            mapCenter: {
                lat: 22.845641,
                lng: 89.5403279
            },
            markerCenter: {
                lat: 22.845641,
                lng: 89.5403279
            },
            address: {
                address: "",
                location: {
                    lat: 22.845641,
                    lng: 89.5403279
                }
            },
            area_type: null,
            area_types: [
                {name: "পৌরসভা", value: 'municipal'},
                {name: "উপজেলা", value: 'upazila'},
            ],
            division: null,
            district: null,
            municipal: null,
            ward: null,
            upazila: null,
            union : null,
            village: null
        }
    }
}
