<template>
    <div class="question_area">
        <div class="container">
            <div class="title q-pa-md"> কিছু প্রশ্ন সমূহঃ  </div>
            <VueSlickCarousel v-bind="slideSetting" class="question-carousel">
                <div>
                    <div class="block q-ma-md">
                        <img class="full-width" src="https://andsheba.com/_nuxt/img/3.47d4a83.jpg">
                    </div>
                </div>
                <div>
                    <div class="block q-ma-md">
                        <img class="full-width" src="https://andsheba.com/_nuxt/img/4.4bfd504.jpg">
                    </div>
                </div>
                <div>
                    <div class="block q-ma-md">
                        <img class="full-width" src="https://andsheba.com/_nuxt/img/5.f9cb0c7.jpg">
                    </div>
                </div>
                <div>
                    <div class="block q-ma-md">
                        <img class="full-width" src="https://andsheba.com/_nuxt/img/6.c99fae2.jpg">
                    </div>
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


export default {
    name: "Questions",
    components: { VueSlickCarousel },
    data() {
        return {
            slide: 1,
            slideSetting : {
                "dots": false,
                "arrows": true,
                "focusOnSelect": true,
                "infinite": true,
                "slidesToShow": 3,
                "slidesToScroll": 3,
                "touchThreshold": 5
            }
        }
    }
}
</script>

<style lang="scss">
.question_area {
    background: #f5f5f5;
    padding-top: 70px;
    padding-bottom: 130px;
    .title {
        font-size: 30px;
        font-weight: 500;
    }
    .question-carousel {
        padding-top: 20px;
        img {
            border-radius: 5px;
        }
    }
}
</style>