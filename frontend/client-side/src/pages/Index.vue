<template>
    <q-page>
        <!-- Banner -->
        <div class="flex flex-center">
            <div class="row">
                <div id="parent" class="full-width row">
                    <!-- `Banner Left Search -->
                    <div
                        :class="[$q.screen.gt.sm ? 'q-px-md' : 'q-mt-xl q-mb-xl q-mx-lg', 'flex column col-md-7 col-sm-12 justify-center' ]">
                        <p :class="[$q.screen.gt.sm ? 'text-h5' : 'text-h6 text-center']">আপনার স্থানীয় পেশাদারদের
                            খুঁজুন</p>
                        <q-form @submit="onSubmit">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-3">
                                    <q-select
                                        square outlined
                                        v-model="category"
                                        :options="categories"
                                        option-value="_id"
                                        option-label="name"
                                        label="Category"
                                        @input="handleCategorySelect"
                                        lazy-rules
                                        :rules="[
                                        val => (val.name !== '') || 'Please Select a category',
                                    ]"
                                    />
                                </div>

                                <div class="col-xs-12 col-sm-12 col-md-3 q-mb-md">
                                    <q-select
                                        square outlined
                                        v-model="sub_category"
                                        :options="sub_categories"
                                        option-value="_id"
                                        option-label="name"
                                        label="Sub Category"
                                    />
                                </div>

                                <div class="col-xs-12 col-sm-12 col-md-3">
                                    <q-input
                                        square outlined
                                        v-model="location"
                                        class="hp-places-autocomplete"
                                        :rules="[
                                        val =>(val !== null) || 'Please Select Location',
                                    ]">
                                        <template v-slot:default>
                                            <gmap-autocomplete
                                                class="autocomplete-search"
                                                placeholder="আপনার অবস্থান *"
                                                @place_changed="setPlace">
                                            </gmap-autocomplete>
                                        </template>
                                    </q-input>
                                </div>

                                <div class="col-xs-12 col-sm-12 col-md-3">
                                    <q-btn color="teal"  :class="$q.screen.gt.sm ? '' : 'full-width text-center'" type="submit" style="padding: 10px">
                                        <q-icon left size="2em" name="search"/>
                                        <div>খুঁজুন</div>
                                    </q-btn>
                                </div>
                            </div>
                        </q-form>
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
            latitude: '',
            location: null,
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
