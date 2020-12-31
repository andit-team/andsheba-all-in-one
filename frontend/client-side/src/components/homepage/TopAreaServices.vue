<template>
    <div class="most_popular_section">
        <div class="container">
            <div class="row">
                <div class="heading q-pa-md col-md-6 col-sm-12 col-xs-12">
                    <div class="bg-image">
                        <q-img src="/img/dotted-bg.png"/>
                    </div>
                    <div class="title">Recently Added Services</div>
                    <span>Explore the greates our services. You won’t be disappointed</span>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12 relative-position" v-bind:class="{'q-pa-md': $q.screen.gt.sm}">
                    <div class="view-all q-pt-sm">
                        <div class="text-h2 text-right">
                            <a href="#!">View All <i class="fas fa-angle-right"></i></a>
                        </div>
                        <span>Recent Services</span>
                    </div>
                </div>
            </div>

            <VueSlickCarousel v-if="recents.length > 0" v-bind="slideSetting" class="q-mb-lg" v-bind:class="{'q-pa-md': !$q.screen.gt.sm}">
                <div v-for="(service, index) in recents || []" :key="index">
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
    props: ['recents'],
    components: {ServiceCard, VueSlickCarousel},
    data () {
        return {
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
        }
    }
}
</script>

<style lang="scss">
.most_popular_section {
    background: #fafafa;
    padding: 40px 0 70px 0;
    .container {
        position: relative;
        .heading {
            .bg-image {
                width: 140px;
                height: 140px;
                position: absolute;
                opacity: .4;
                margin-left: -50px;
                @media (max-width: 885px) {
                    margin-left: -15px;
                }
            }
            .title {
                font-size: 34px;
                color: #2c3038;
                font-weight: bold;
                padding: 30px 0 10px 0;
                opacity: 1;
                @media (max-width: 885px) {
                    font-size: 28px;
                    margin-left: 15px;
                }
            }
            span {
                font-size: 18px;
                color: #858585;
                padding: 0;
                @media (max-width: 885px) {
                    font-size: 16px;
                    margin-left: 15px;
                    display: block;
                }
            }
        }
        .view-all {
            a {
                font-size: 18px;
                color: #171717;
                font-weight: 600;
                text-decoration: none;
            }

            span {
                color: #f0f0f0;
                font-size: 40px;
                font-weight: 600;
                display: block;
                text-align: right;
                @media (max-width: 885px) {
                    display: none !important;
                }
            }

            @media (max-width: 885px) {
                .text-right {
                    text-align: left !important;
                    margin-left: 30px;
                }
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