<template>
    <q-page>
        <!-- Banner -->
        <div class="banner_section">
            <div class="container">
                <div :class="[$q.screen.gt.sm ? 'text-h4 banner-title q-mb-md' : 'text-h5 text-center q-mb-md']">Search your nearest Professionals</div>
                <div style="max-width: 700px">
                    <div class="row search-box" v-if="$q.screen.gt.sm">
                        <div class="col-xs-12 col-sm-5 relative-position" style="min-height: 50px">
                            <q-icon name="search" class="c-search-icon"/>
                            <autocomplete
                                class="c-key-autocomplete border-right"
                                placeholder="What are you looking for?"
                                aria-label="What are you looking for?"
                                @input="handleKeyChange"
                                :search="handleSearch"
                                @submit="handleSelect"
                            ></autocomplete>
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
                        <div class="col-xs-12 col-sm-2 relative-position">
                            <button @click="onSubmit" :class="$q.screen.gt.sm ? 'full-width submit-btn' : 'full-width text-center'" type="submit" style="font-size: 16px">
                                <div>Search</div>
                            </button>
                        </div>
                    </div>



                    <div class="row" v-if="!$q.screen.gt.sm">
                        <div class="col-xs-12 col-sm-5 col-md-5 q-mb-lg">
                            <q-input outlined v-model="key" label="What are you looking for?" class="c-key-search" style="background: #f7f8f9" >
                                <template v-slot:prepend>
                                    <q-icon name="search" />
                                </template>
                                <template v-slot:default>
                                    <autocomplete
                                        class="c-key-autocomplete"
                                        :search="handleSearch"
                                        @submit="handleSelect"
                                        @input="handleKeyChange"
                                    ></autocomplete>
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
                            <q-btn color="primary"  @click="onSubmit" :class="$q.screen.gt.sm ? '' : 'full-width text-center'" type="submit" style="padding: 0px 25px; font-size: 22px">
                                <div>Search</div>
                            </q-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slider Top Services -->
        <!-- App Slider -->

        <TopAreaServices :recents="recents"/>
        <FeaturedCategories :categories="categories"/>
        <app-slider/>
        <MostPopular :services="popular"/>
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
            categories: [],
            recents: [],
            popular: []
        }
    },
    async created() {
        await this.$store.dispatch('service/fetchCategories');
        let result = await this.$axios.get('https://ipapi.co/json/')
        this.latitude = result.data.latitude
        this.longitude = result.data.longitude
        this.location = result.data.city + ", " + result.data.country_name
        let hp_data = await this.$axios.get(`${process.env.API_URL}/customer/homepage`, {
            params: { longitude: this.longitude, latitude: this.latitude }
        })
        this.categories = hp_data.data.data.category
        this.recents = hp_data.data.data.recent
        this.popular = hp_data.data.data.popular
    },

    methods: {
        handleSearch(value){
            if(value.length > 0) {
                return new Promise((resolve) => {
                    this.$store.dispatch('service/fetchSearch', value).then(data => {
                        resolve(data)
                    })
                })
            }
            return []
        },

        handleSelect(value) {
            this.key = value
        },
        handleKeyChange(e) {
            this.key = e.target.value
        },

        setPlace(value) {
            this.location = value.formatted_address
            this.latitude = value.geometry.location.lat();
            this.longitude = value.geometry.location.lng();
        },
        onSubmit() {
            this.$router.push('/service?longitude=' + this.longitude + '&latitude=' + this.latitude + '&key=' + (this.key || '') )
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

        .banner-title {
            font-weight: 600;
            font-size: 2.225rem;
            color: #1e212a;
        }

        .border-right {
            &:after {
                content: "";
                height: 42px;
                width: 2px;
                position: absolute;
                border-right: 1px solid #757575;
                margin-top: -46px;
                right: 0;
            }
        }


        .search-box {
            border: 1px solid rgba( 117, 117, 117, .5);
            border-right: 0;
            border-radius: 5px;
            background: #f7f8f9;

            .c-search-icon {
                position: absolute;
                height: 55px;
                font-size: 28px;
            }

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

        .c-key-autocomplete {
            height: 100%;
            .autocomplete {
                height: 100%;
                input {
                    border: none;
                    outline: none;
                    height: 100%;
                    border-radius: 0;
                    font-size: 14px;
                    background: transparent;
                }
                .autocomplete-result-list {
                    background: #f7f8f9;
                }
            }
        }

        .c-key-search {
            input {
                display: none;
            }
            .c-key-autocomplete {
                .autocomplete {
                    input {
                        display: block;
                        padding: 0;
                        margin-top: 15px;
                        height: 70%;
                    }
                    .autocomplete-result-list {
                        width: calc(100% + 117px) !important;
                        margin-left: -48px;
                        margin-top: -18px;
                    }
                }
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
            position: absolute;
            margin-top: -1px;
            border: 0;
            outline: 0;
            cursor: pointer;
            height: calc(100% + 2px);
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
