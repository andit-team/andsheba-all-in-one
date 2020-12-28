<template>
    <q-page>
        <!-- Banner -->
        <div class="banner_section">
            <div class="container">
                <div :class="[$q.screen.gt.sm ? 'text-h4 q-mb-md' : 'text-h5 text-center q-mb-md']">Search your nearest Professionals</div>
                <q-form @submit="onSubmit" style="max-width: 700px">

                    <div class="row search-box" v-if="$q.screen.gt.sm">
                        <div class="col-xs-12 col-sm-5 border-right">
                            <q-icon name="search"/>
                            <input v-model="key" class="search-text form-control full-height" placeholder="What are you looking for?">
                        </div>
                        <div class="col-xs-12 col-sm-5">
                            <q-icon name="near_me" />
                            <gmap-autocomplete
                                class="autocomplete-search q-field__native q-placeholder"
                                placeholder="Your Location"
                                :value="location"
                                @place_changed="setPlace">
                            </gmap-autocomplete>
                        </div>
                        <div class="col-xs-12 col-sm-2">
                            <button  :class="$q.screen.gt.sm ? 'full-width submit-btn' : 'full-width text-center'" type="submit" style="font-size: 16px">
                                <div>Search</div>
                            </button>
                        </div>
                    </div>



                    <div class="row" v-if="!$q.screen.gt.sm">
                        <div class="col-xs-12 col-sm-5 col-md-5 q-mb-lg">
                            <q-input outlined v-model="key" label="What are you looking for?" style="background: #f7f8f9" >
                                <template v-slot:prepend>
                                    <q-icon name="search" />
                                </template>
                            </q-input>
                        </div>

                        <div class="col-xs-12 col-sm-5 col-md-5 q-mb-lg">
                            <q-input outlined v-model="location" label="Your location" class="hp-places-autocomplete" style="background: #f7f8f9" >
<!--                                <template v-slot:append>-->
<!--                                    <q-icon name="gps_fixed" style="cursor: pointer"/>-->
<!--                                </template>-->
                                <template v-slot:prepend>
                                    <q-icon name="near_me" />
                                </template>
                                <template v-slot:default>
                                    <gmap-autocomplete
                                        class="autocomplete-search q-field__native q-placeholder"
                                        placeholder=""
                                        :value="location"
                                        @place_changed="setPlace">
                                    </gmap-autocomplete>
                                </template>
                            </q-input>
                        </div>

                        <div class="col-xs-12 col-sm-2 col-md-2">
                            <q-btn color="primary"  :class="$q.screen.gt.sm ? '' : 'full-width text-center'" type="submit" style="padding: 0px 25px; font-size: 22px">
                                <div>Search</div>
                            </q-btn>
                        </div>
                    </div>
                </q-form>
            </div>
        </div>

        <!-- Slider Top Services -->
        <!-- App Slider -->

        <TopAreaServices/>
        <FeaturedCategories/>
        <app-slider/>
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
import TopAreaServices from "components/homepage/TopAreaServices";
import FeaturedCategories from "components/homepage/FeaturedCategories";

export default {
    name: "PageIndex",
    components: {
        FeaturedCategories,
        TopAreaServices,
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
            key: '',
            longitude: '',
            latitude: '',
            location: '',
        }
    },
    async created() {
        await this.$store.dispatch('service/fetchCategories');
        let result = await this.$axios.get('https://ipapi.co/json/')
        this.latitude = result.data.latitude
        this.longitude = result.data.longitude
        this.location = result.data.city + ", " + result.data.country_name
        let hp_data = this.$axios.get(`${process.env.API_URL}/customer/homepage`, {
            params: { longitude: this.longitude, latitude: this.latitude }
        })
    },

    methods: {
        setPlace(value) {
            this.location = value.formatted_address
            this.latitude = value.geometry.location.lat();
            this.longitude = value.geometry.location.lng();
        },
        onSubmit() {
            this.$router.push('/service?longitude=' + this.longitude + '&latitude=' + this.latitude + '&key=' + this.key )
        }
    }
};
</script>

<style lang="scss">
.banner_section {
    background-image: url("/img/banner.png");
    background-repeat: no-repeat;
    background-position: 84% 27%;
    .container {
        max-width: 1600px;
        padding: 250px 10px;
        .border-right {
            &:after {
                content: "";
                height: 42px;
                width: 2px;
                position: absolute;
                border-right: 1px solid #757575;
                margin-top: 5px;
            }
        }

        .search-box {
            border: 1px solid #757575;
            border-right: 0;
            border-radius: 5px;
            background: #f7f8f9;

            .search-text {
                background: #f7f8f9;
                border: none;
                outline: none;
                width: calc(100% - 60px)
            }
            i {
                font-size: 24px;
                color: #757575;
                padding: 0 10px;
            }
        }

        .autocomplete-search {
            width: calc(100% - 60px);
            height: 100%;
            background: #f7f8f9;
            @media (max-width: 885px) {
                height: 88%;
            }
        }

        .submit-btn {
            border: 0;
            outline: 0;
            cursor: pointer;
            height: 100%;
            background: #2b76d2;
            color: #fff;
            padding: 14px;
            border: 1px solid #2b76d2;
            border-radius: 0 5px 5px 0;
        }


    }


    @media screen and (max-width: 1256px) {
        background: #fff;
        .container {
            padding: 20% 10%;
        }

    }

}




.hp-places-autocomplete {
    input {
        display: none;
        &.autocomplete-search {
            display: block;
            border: none;
            outline: none;
            height: 50px;
            margin-top: 3px;
            width: 100%;
        }
    }
}
</style>
