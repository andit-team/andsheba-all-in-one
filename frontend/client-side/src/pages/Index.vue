<template>
    <q-page>
        <!-- Banner -->
        <div class="flex flex-center">
            <div class="row">
                <div id="parent" class="full-width row">
                    <!-- `Banner Left Search -->
                    <div
                        :class="[$q.screen.gt.sm ? '' : 'q-mt-xl q-mb-xl', 'flex column col-md-7 col-sm-12 justify-center' ]">
                        <p :class="[$q.screen.gt.sm ? 'text-h5' : 'text-h6 text-center']">আপনার স্থানীয় পেশাদারদের
                            খুঁজুন</p>
                        <div class="row">
                            <q-select
                                square outlined
                                v-model="category"
                                :options="categories"
                                option-value="_id"
                                option-label="name"
                                label="Category"
                                @input="handleCategorySelect"
                                style="width: 170px"
                            />

                            <q-select
                                square outlined
                                v-model="sub_category"
                                :options="sub_categories"
                                option-value="_id"
                                option-label="name"
                                label="Sub Category"
                                style="width: 170px"
                            />
                            <q-input square outlined class="hp-places-autocomplete">
                                <template v-slot:default>
                                    <gmap-autocomplete
                                        class="autocomplete-search"
                                        placeholder="আপনার অবস্থান *"
                                        @place_changed="setPlace">
                                    </gmap-autocomplete>
                                </template>
                            </q-input>


                            <q-btn color="teal" :to="'/service?longitude=' + longitude + '&latitude=' + latitude + '&category=' + category.name + '&sub_category=' + sub_category.name ">
                                <q-icon left size="2em" name="search"/>
                                <div v-if="$q.screen.gt.sm">খুঁজুন</div>
                            </q-btn>
                        </div>
                    </div>
                    <!-- Banner Right Image -->
                    <div class="col-md-5 col-sm-12" v-if="$q.screen.gt.sm">
                        <img src="https://andsheba.com/_nuxt/img/2.5d1171b.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <!-- Slider Top Services -->
        <nearest-top/>
        <!-- App Slider -->
        <app-slider/>

        <ProCta/>
    </q-page>
</template>

<script>
import NearestTop from 'components/sliders/NearestTop'
import AppSlider from 'src/components/sliders/AppSlider.vue';
import ProCta from "components/homepage/ProCta";

export default {
    name: "PageIndex",
    components: {
        ProCta,
        NearestTop,
        AppSlider,
    },
    data() {
        return {
            category: {
                name: ''
            },
            sub_category: {
                name: ''
            },
            longitude: '',
            latitude: ''
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
