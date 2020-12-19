<template>
    <div class="question_area">
        <div class="container">
            <div class="title q-pa-md"> কিছু প্রশ্ন সমূহঃ</div>
            <VueSlickCarousel v-bind="slideSetting" class="question-carousel">
                <div>
                    <div class="block q-ma-md">
                        <img class="full-width" src="https://andsheba.com/_nuxt/img/3.47d4a83.jpg">
                        <div class="question-title">একটি জানালা প্রতিষ্ঠাপনের খরচ কত?</div>
                    </div>
                </div>
                <div>
                    <div class="block q-ma-md">
                        <img class="full-width" src="https://andsheba.com/_nuxt/img/4.4bfd504.jpg">
                        <div class="question-title">একজন স্বাস্থ্য কর্মীর সেবা প্রতি খরচ কত? </div>
                    </div>
                </div>
                <div>
                    <div class="block q-ma-md">
                        <img class="full-width" src="https://andsheba.com/_nuxt/img/5.f9cb0c7.jpg">
                        <div class="question-title">বডি ম্যাসাজের উপকারিতা কি?</div>
                    </div>
                </div>
                <div>
                    <div class="block q-ma-md">
                        <img class="full-width" src="https://andsheba.com/_nuxt/img/6.c99fae2.jpg">
                        <div class="question-title">একটি জানালা প্রতিষ্ঠাপনের খরচ কত?</div>
                    </div>
                </div>
                <template #prevArrow="arrowOption">
                    <div class="custom-arrow">
                        <div class="arrow-bg"/>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="50px"  style="background: #4b4e53"
                             viewBox="0 0 512 512" xml:space="preserve">
                            <g fill="#fff">
                                <g>
                                    <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M313.749,347.584
			                         c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251L176.917,271.083
			                         c-8.341-8.341-8.341-21.824,0-30.165l106.667-106.667c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165L222.165,256
			                         L313.749,347.584z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </template>
                <template #nextArrow="arrowOption">
                    <div class="custom-arrow right">
                        <div class="arrow-bg"/>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="50px"  style="background: #4b4e53"
                             viewBox="0 0 512 512" xml:space="preserve">
                            <g fill="#fff">
                                <g>
		                            <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M335.083,271.083
			                            L228.416,377.749c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251c-8.341-8.341-8.341-21.824,0-30.165
			                            L289.835,256l-91.584-91.584c-8.341-8.341-8.341-21.824,0-30.165s21.824-8.341,30.165,0l106.667,106.667
			                            C343.424,249.259,343.424,262.741,335.083,271.083z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </template>
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
    components: {VueSlickCarousel},
    data() {
        return {
            slide: 1,
            slideSetting: {
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
    }
}
</style>