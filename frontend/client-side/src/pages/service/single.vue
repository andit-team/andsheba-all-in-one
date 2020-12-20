<template>
    <div>
        <div :class="[$q.screen.gt.sm?'q-mt-xl':'q-pa-md','row justify-center q-gutter-xl']">
            <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="text-h3 q-mb-xs">{{service.title}}</div>
                <div class="row no-wrap items-center q-pb-md">
                    <q-avatar size="35px" class="q-mr-md"><img :src="service.thumb_img"/></q-avatar>
                    <q-rating size="28px" :max="5" color="orange"/>
                    <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
                    <span class="text-caption text-red q-ml-sm">6 Orders in Queue</span>
                </div>
                <div class="q-pb-md">
                    <q-carousel swipeable animated v-model="slide" thumbnails infinite>
                        <q-carousel-slide
                            v-for="(image,index) in service.gallery_images"
                            :name="index+1"
                            :img-src="image"
                        />

                        <q-carousel-slide
                            :name="20"
                            img-src="https://cdn.quasar.dev/img/mountains.jpg"
                        />
                        <q-carousel-slide
                            :name="22"
                            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
                        />
                        <q-carousel-slide
                            :name="22"
                            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
                        />
                        <q-carousel-slide
                            :name="23"
                            img-src="https://cdn.quasar.dev/img/quasar.jpg"
                        />
                    </q-carousel>
                </div>
                <div class="text-h5 q-my-sm">Service Overview</div>
                
                <div class="text-caption text-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    eligendi tempore voluptatibus quae ipsam rerum eum Facilis eligendi
                    tempore voluptatibus quae ipsam rerum eum Facilis eligendi tempore
                    voluptatibus quae ipsam rerum eum Facilis eligendi tempore
                    voluptatibus quae ipsam rerum eum Facilis eligendi tempore
                    voluptatibus quae ipsam rerum eum magni illo
                </div>
                <div class="text-h5 q-my-sm">FAQ</div>
                <div class="q-py-md">
                    <q-list class="faq">
                    <q-expansion-item
                        expand-separator
                        label="What a nice question ?"
                    >
                        <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                        </q-card>
                    </q-expansion-item>
                    <q-separator/>
                    <q-expansion-item
                        expand-separator
                        label="How is you life going ?"
                    >
                        <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                        </q-card-section>
                        </q-card>
                    </q-expansion-item>
                    </q-list>
                </div>
                <!-- Faq Bottom -->
                <div class="row no-wrap items-center q-my-lg">
                    <span class="text-h5 q-mr-md">45 Reviews</span>
                    <q-rating size="28px" :max="5" color="orange"/>
                </div>
                <div class="row no-wrap items-center q-my-lg">
                    <span class="col-1 text-h6 text-primary">5 Stars</span>
                    <q-linear-progress rounded size="12px" value="0.7" color="orange"/>
                    <span class="col-1 text-h6 text-center text-primary q-ml-md">(44)</span>
                </div>
                <div class="row no-wrap items-center q-my-lg">
                    <span class="col-1 text-h6 text-primary">4 Stars</span>
                    <q-linear-progress rounded size="12px" value="0.1" color="orange"/>
                    <span class="col-1 text-h6 text-center text-primary q-ml-md">(1)</span>
                </div>
                <div class="row no-wrap items-center q-my-lg">
                    <span class="col-1 text-h6 text-primary">3 Stars</span>
                    <q-linear-progress rounded size="12px" value="0.0" color="orange"/>
                    <span class="col-1 text-h6 text-center text-primary q-ml-md">(0)</span>
                </div>
                <div class="row no-wrap items-center q-my-lg">
                    <span class="col-1 text-h6 text-primary">2 Stars</span>
                    <q-linear-progress rounded size="12px" value="0.0" color="orange"/>
                    <span class="col-1 text-h6 text-center text-primary q-ml-md">(0)</span>
                </div>
                <div class="row no-wrap items-center q-my-lg">
                    <span class="col-1 text-h6 text-primary">1 Stars</span>
                    <q-linear-progress rounded size="12px" value="0.0" color="orange"/>
                    <span class="col-1 text-h6 text-center text-primary q-ml-md">(0)</span>
                </div>
                <q-separator/>
                <!-- comment -->
                <!-- related section -->
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                <q-card class="my-card">
                    <q-img v-if="$q.screen.gt.sm"
                           :src="service.thumb_img"
                    />

                    <q-card-section>
                        <q-btn
                            fab
                            color="primary"
                            icon="place"
                            class="absolute"
                            style="top: 0; right: 12px; transform: translateY(-50%);"
                        />

                        <div class="row no-wrap items-right">
                            <div class="col text-h6 ellipsis">
                                {{service.user.name}}
                            </div>
                            <div
                                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                            >
                                <q-icon name="place"/>
                                Khulna
                            </div>
                        </div>

                        <q-rating color="red" :max="5" size="32px"/>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div class="text-subtitle1">

                        </div>
                        <div class="text-caption text-grey">
                            Small plates, salads & sandwiches in an intimate setting.
                        </div>
                    </q-card-section>

                    <q-separator/>

                    <q-card-actions>
                        <q-btn flat round icon="event"/>
                        <q-btn flat color="primary" :to="'/service/quote?id=' + service._id">
                            Request for Quote
                        </q-btn>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            slide: 1
        };
    },
    created() {
        this.$store.dispatch('service/fetchService', this.$route.query.id)
    },
    computed: {
        service: {
            get() {
                return this.$store.getters["service/getService"]
            }
        }
    }

};
</script>

<style>
    .faq  .q-item{
        padding: 8px 0px!important;
    }
    
    .faq  .q-item__label{
        font-size: 20px;
    }
</style>