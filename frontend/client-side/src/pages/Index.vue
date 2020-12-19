<template>
    <q-page>
        <!-- Banner -->
        <div class="flex flex-center">
            <div class="row">
                <div id="parent" class="full-width row">
                    <!-- `Banner Left Search -->
                    <div
                        :class="[$q.screen.gt.sm ? 'q-px-md' : 'q-mt-xl q-mb-xl q-mx-lg', 'flex column col-md-8 col-sm-12 justify-center' ]">
                        <p :class="[$q.screen.gt.sm ? 'text-h5' : 'text-h6 text-center']">আপনার স্থানীয় পেশাদারদের
                            খুঁজুন</p>
                        <q-form @submit="onSubmit">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-5">
                                    <q-input filled v-model="category" label="What are you looking for?"  >
                                        <template v-slot:prepend>
                                        <q-icon name="search" />
                                        </template>
                                    </q-input>
                                </div>

                                <div class="col-xs-12 col-sm-12 col-md-5">
                                   <div class="col-xs-12 col-sm-12 col-md-3">
                                    <q-input filled v-model="location"  label="Your location">
                                        <template v-slot:append>
                                        <q-icon name="gps_fixed" />
                                        </template>
                                        <template v-slot:prepend>
                                        <q-icon name="near_me" />
                                        </template>
                                    </q-input>
                                </div>
                                </div>

                                <div class="col-xs-12 col-sm-12 col-md-2">
                                    <q-btn color="teal"  :class="$q.screen.gt.sm ? '' : 'full-width text-center'" type="submit" style="padding: 10px">
                                        <div>খুঁজুন</div>
                                    </q-btn>
                                </div>
                            </div>
                        </q-form>
                    </div>
                    <!-- Banner Right Image -->
                    <div class="col-md-4 col-sm-12" v-if="$q.screen.gt.sm">
                        <img src="https://andsheba.com/_nuxt/img/2.5d1171b.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <!-- Slider Top Services -->
        <nearest-top/>
        <!-- App Slider -->

        <app-slider/>
        <featured/>



        <MostPopular/>
        <ProCta/>
        <Questions/>
        <Footer/>
    </q-page>
</template>

<script>
import NearestTop from 'components/sliders/NearestTop'
import Featured from 'components/sliders/Featured'
import AppSlider from 'src/components/sliders/AppSlider.vue';
import ProCta from "components/homepage/ProCta";
import Footer from "components/footer/Footer";
import Questions from "components/homepage/Questions";
import MostPopular from "components/homepage/MostPopular";

export default {
    name: "PageIndex",
    components: {
        MostPopular,
        Questions,
        Footer,
        Featured,
        ProCta,
        NearestTop,
        AppSlider,
    },
    data() {
        return {
            category: '',
            sub_category: {
                name: ''
            },
            longitude: '',
            latitude: '',
            location: '',
        }
    },
    created() {
        this.$store.dispatch('service/fetchCategories');
    },
    computed: {
        categories: {
            get() {
                return this.$store.getters["service/getCategories"]
            }
        },
        sub_categories: {
            get() {
                return this.$store.getters["service/getSubCategories"]
            }
        },
        isLocationSelected: {
            get() {
                return this.latitude !== ''
            }
        }

    },
    methods: {
        handleCategorySelect(value) {
            this.$store.dispatch('service/fetchSubCategories', value._id)
            this.sub_category = {
                name: ''
            }
        },
        setPlace(value) {
            this.latitude = value.geometry.location.lat();
            this.longitude = value.geometry.location.lng();
            this.location = value
        },
        onSubmit() {
            this.$router.push('/service?longitude=' + this.longitude + '&latitude=' + this.latitude + '&category=' + this.category.name + '&sub_category=' + this.sub_category.name )
        }
    }
};
</script>

<style lang="scss">
.hp-places-autocomplete {
    input {
        display: none;
        &.autocomplete-search {
            display: block;
            border: none;
            outline: none;
            height: 50px;
            margin-top: 3px;
        }
    }
}
</style>
