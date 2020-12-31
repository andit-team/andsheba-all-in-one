<template>
    <div class="app-slider">
        <div class="container">
            <q-carousel
                v-model="slide"
                transition-prev="jump-right"
                transition-next="jump-left"
                swipeable
                animated
                control-color="teal"
                prev-icon="arrow_left"
                next-icon="arrow_right"
                navigation-icon="radio_button_unchecked"
                navigation
                style="height:100%; background: #fafafa"
            >
                <q-carousel-slide name="style" class="flex flex-center">
                    <div class="row">
                        <div id="parent" class="full-width row">
                            <!-- `Banner Left Search -->
                            <div
                                :class="[$q.screen.gt.sm ? '' : 'q-mt-xl q-mb-xl', 'flex column col-md-7 col-sm-12 justify-center' ]">
                                <p :class="[$q.screen.gt.sm ? 'text-h5' : 'text-h6 text-center']" style="color: #2c3039">The Thumbtack Guarantee</p>
                                <div class="row">
                                    <p style="color: #2c3039; opacity: 0.7">If the job isn’t done as agreed, you can get your money back. And if there’s property damage, you’re protected.</p>
                                    <q-btn color="primary" class="q-mt-md">
                                        <div>Learn More</div>
                                    </q-btn>
                                </div>
                            </div>
                            <!-- Banner Right Image -->
                            <div class="col-md-5 col-sm-12" v-if="$q.screen.gt.sm" style="">
                                <img src="/img/app-2.png" style="width:100%;max-width:400px;background: #f7f8f9"/>
                            </div>
                        </div>
                    </div>
                </q-carousel-slide>

                <q-carousel-slide name="app" class="flex flex-center">
                    <div class="row">
                        <div id="parent" class="full-width row">
                            <!-- `Banner Left Search -->
                            <div
                                :class="[$q.screen.gt.sm ? '' : 'q-mt-xl q-mb-xl', 'flex column col-md-7 col-sm-12 justify-center' ]">
                                <p :class="[$q.screen.gt.sm ? 'text-h5' : 'text-h6 text-center']">When you need to hire someone – a designer or anyone, Andsheba finds them for you for free.</p>
                                <div class="row q-mt-xs">
                                    <p style="color: #2c3039; opacity: 0.7">Andsheba pros are local business owners right in your community.
                                        They’re the neighbors you just haven’t met yet, with the skills you need to get the job done.</p>
                                    <div class="row justify-center q-gutter-md q-mt-md">
                                        <img src="https://andsheba.com/_nuxt/img/apple-app-btn.b472af9.png"
                                             width="150px">
                                        <img src="https://andsheba.com/_nuxt/img/google-app-btn.e6c3028.png"
                                             width="150px">
                                    </div>
                                </div>
                            </div>
                            <!-- Banner Right Image -->
                            <div class="col-md-5 col-sm-12" v-if="$q.screen.gt.sm">
                                <img src="/img/app-1.png" style="width:100%;max-width:400px"/>
                            </div>
                        </div>
                    </div>
                </q-carousel-slide>
            </q-carousel>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            slide: 'app',
        }
    }
}
</script>

<style lang="scss" scoped>
.app-slider {
    background: #fafafa;
}
</style>