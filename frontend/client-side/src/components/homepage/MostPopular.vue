<template>
    <div class="most_popular_section">
        <div class="container">
            <div class="row">
                <div class="heading q-pa-md col-md-6 col-sm-12 col-xs-12">
                    <div class="bg-image">
                        <q-img src="/img/dotted-bg.png"/>
                    </div>
                    <div class="title">Most Popular Services</div>
                    <span>Explore the greates our services. You won’t be disappointed</span>
                </div>
                <div class="q-pa-md col-md-6 col-sm-12 col-xs-12 relative-position">
                    <div class="view-all">
                        <div class="text-h2 text-right">
                            <a href="#!">View All <i class="fas fa-angle-right"></i></a>
                        </div>
                        <span>Most Popular</span>
                    </div>
                </div>
            </div>

            <VueSlickCarousel v-bind="slideSetting" class="q-mb-lg q-pa-md">
                <div v-for="(service, index) in services" :key="index">
                    <ServiceCard :service="service"/>
                </div>
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
import ServiceCard from "components/homepage/items/ServiceCard";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: "MostPopular",
    components: {ServiceCard, VueSlickCarousel},
    data () {
        return {
            slideSetting: {
                "dots": true,
                "arrows": false,
                "focusOnSelect": true,
                autoplay: true,
                autoplaySpeed: 2000,
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
.most_popular_section {
    background: #fff;
    padding: 40px 0;
    .container {
        position: relative;
        .heading {
            .bg-image {
                width: 140px;
                height: 140px;
                position: absolute;
                opacity: .4;
                margin-left: -30px;
            }
            .title {
                font-size: 30px;
                color: #2c3038;
                font-weight: bold;
                padding: 30px 0 10px 14px;
                opacity: 1;
            }
            span {
                font-size: 18px;
                color: #858585;
                padding-left: 14px;
            }
        }
        .view-all {
            a {
                font-size: 24px;
                color: #171717;
                text-decoration: none;
            }
            span {
                color: #bbbbbb;
                font-size: 40px;
                font-weight: 400;
                display: block;
                text-align: right;
            }

        }
    }
}
</style>


<style lang="scss" scoped>
.category-tag {
    background: #d9c504;
    color: #fff;
    padding: 5px;
    border-radius: 13px;
}
.card-action {
    margin-top: 15px;
    .edit {
        cursor: pointer;
        color: #36a745;
        i {
            position: absolute;
            margin-top: 2px;
        }
        span {
            margin-left: 20px;
        }
        &:hover {
            color: #13711f;
        }
    }
    .delete {
        cursor: pointer;
        position: absolute;
        right: 13px;
        color: #de3544;
        i {
            position: absolute;
            margin-top: 2px;
        }
        span {
            margin-left: 18px;
        }
        &:hover {
            color: #850d18;
        }
    }
}
</style>