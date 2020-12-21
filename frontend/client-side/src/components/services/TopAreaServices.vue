<template>
    <div class="question_area">
        <div class="container q-px-lg">
            <div class="title q-px-md"> আপনার এলাকার জনপ্রিয় সেবা সমূহ</div>
            <VueSlickCarousel v-bind="slideSetting" class="q-mb-lg">
                <div v-for="(service, index) in services" :key="index">
                    <ServiceCard :service="service"/>
                </div>
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import ServiceCard from "components/homepage/items/ServiceCard";

export default {
    name: "TopAreaServices",
    components: {VueSlickCarousel, ServiceCard},
    data() {
        return {
            slide: 1,
            slideSetting: {
                "dots": false,
                "arrows": false,
                "focusOnSelect": true,
                autoplay: true,
                autoplaySpeed: 3000,
                "infinite": true,
                "slidesToShow": 3,
                "slidesToScroll": 3,
                responsive: [
                    {
                        "breakpoint": 1300,
                        "settings": {
                            "slidesToShow": 2,
                        }
                    }, {
                        "breakpoint": 700,
                        "settings": {
                            "slidesToShow": 1,
                        }
                    }
                ]
            },
            services: [
                {
                    thumb_img: "https://truelysell-html.dreamguystech.com/template/assets/img/services/service-02.jpg",
                    category: {
                        name: "Automobile"
                    },
                    title: "Car Repair Services"
                },
                {
                    thumb_img: "https://truelysell-html.dreamguystech.com/template/assets/img/services/service-03.jpg",
                    category: {
                        name: "Electrical"
                    },
                    title: "Electrical Panel Repairing Service"
                },
                {
                    thumb_img: "https://truelysell-html.dreamguystech.com/template/assets/img/services/service-04.jpg",
                    category: {
                        name: "Automobile"
                    },
                    title: "Stream Car Wash"
                },
                {
                    thumb_img: "https://truelysell-html.dreamguystech.com/template/assets/img/services/service-02.jpg",
                    category: {
                        name: "Automobile"
                    },
                    title: "Car Repair Services"
                },
                {
                    thumb_img: "https://truelysell-html.dreamguystech.com/template/assets/img/services/service-03.jpg",
                    category: {
                        name: "Electrical"
                    },
                    title: "Electrical Panel Repairing Service"
                },
                {
                    thumb_img: "https://truelysell-html.dreamguystech.com/template/assets/img/services/service-04.jpg",
                    category: {
                        name: "Automobile"
                    },
                    title: "Stream Car Wash"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.question_area {
    background: #f7f8f9;
    padding: 70px 0;

    @media (max-width: 885px) {
        padding: 50px 0 15px !important;
    }

    .title {
        font-size: 30px;
        font-weight: 500;
    }

    .question-carousel {
        padding-top: 20px;

        img {
            border-radius: 5px;
        }

        .custom-arrow {
            z-index: 999999;
            margin-left: 16px;

            &.right {
                svg {
                    margin-left: -45px;
                }
            }

            svg {
                fill: #fff;
                font-size: 31px;
                margin-top: -32px;
                border-radius: 45px;
                box-shadow: 0 0 2px #888888;
            }

            .arrow-bg {

            }

            &:before {
                display: none;
            }
        }

        .question-title {
            font-size: 24px;
            margin-top: 15px;
            font-weight: 500;
        }
        .location {
            font-size: 18px;
            i {
                color: #2b76d2;
                margin-top: -6px;
                margin-right: 6px;
            }
        }
    }
}
</style>