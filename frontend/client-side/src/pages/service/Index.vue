<template>
    <div>
        <div class="service-search-result">
            <div class="container">
                <div class="filter-area">
                    <div class="text-h4 q-mb-lg" style="color: #242f51">Filter</div>
                    <div class="text-h6 filter-title q-mb-sm">Location</div>
                    <q-list class="filter-list">
                        <li>Dhaka (2000)</li>
                        <li>Khulna (650)</li>
                        <li>
                            <q-expansion-item
                                label="More" class="more-item"
                            >
                                <ul>
                                    <li>Dhaka (2000)</li>
                                    <li>Khulna (650)</li>
                                </ul>
                            </q-expansion-item>
                        </li>

                    </q-list>

                    <div class="text-h6 filter-title q-mb-sm q-mt-lg">Work Type</div>
                    <q-list class="filter-list">
                        <li><input type="checkbox">Construction</li>
                        <li><input type="checkbox">Mechanical</li>
                        <li>
                            <q-expansion-item
                                label="More" class="more-item"
                            >
                                <ul>
                                    <li><input type="checkbox">Electrical</li>
                                    <li><input type="checkbox">House Work</li>
                                </ul>
                            </q-expansion-item>
                        </li>


                    </q-list>

                </div>

                <div class="service-list-area">
                    <div class="row q-ma-lg action-area">
                        <div class="col-xs-12 col-sm-12 col-md-6 q-mb-lg">
                            <select v-model="option" class="select-type">
                                <option v-for="option in options" :value="option">{{option}}</option>
                            </select>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 text-right">
                            <button class="filter-btn active">Best Match</button>
                            <button class="filter-btn">Newest</button>
                            <button class="filter-btn">Trending</button>
                            <button class="filter-btn">Price</button>
                        </div>
                    </div>

                    <div class="service-area block q-pt-lg">
                        <ServiceCard v-for="service in services" :key="service._id" :service="service"/>
                    </div>
                    <div class="see-more-btn"><a href="#" class="btn">See More</a></div>
                </div>
            </div>
        </div>
        <why-hire/>

        <TopAreaServices/>
        <Footer/>
    </div>
</template>
<script>
import ServiceCard from "components/services/ServiceCard";
import Footer from "components/footer/Footer";
import TopAreaServices from "components/services/TopAreaServices";
import WhyHire from "components/services/WhyHire";
export default {
    components: {WhyHire, TopAreaServices, Footer, ServiceCard},
    data() {
        return {
            check1: true,
            check2: false,
            check3: false,
            option: 'All',
            options: [ "All", "Pro", "Agency" ],
            notif1: true,
            notif2: true,
            notif3: false,
            color: "cayn",
            rateRange: {
                min: 10,
                max: 35
            },
            brightness: 3,
            mic: 8,
            category: {
                name: ''
            },
            sub_category: {
                name: ''
            },
            longitude: '',
            latitude: '',
            location: null,
        };
    },
    created() {
        this.$store.dispatch('service/fetchCategories');
        this.$store.dispatch('service/fetchServices', this.$route.query)
    },
    computed: {
        services: {
            get() {
                return this.$store.getters["service/getServices"]
            }
        },
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
            this.location = value
        },
        onSubmit() {

            this.$router.push('/service?longitude=' + this.longitude + '&latitude=' + this.latitude + '&category=' + this.category.name + '&sub_category=' + this.sub_category.name)
            this.$store.dispatch('service/fetchServices', this.$route.query)
        }
    }
}
</script>

<style lang="scss">

.service-search-result {
    position: relative;
    .container {
        max-width: 1400px;
        border-bottom: .5px solid rgba(97, 97, 97, .4);
    }
    .filter-area {
        width: 200px;
        float: left;
        top: 160px;
        min-height: 500px;
        @media (max-width: 1060px) {
            display: none;
        }

        .filter-title {
            color: #242f51;
        }

        .filter-list {
            list-style: none;

            li {
                font-size: 14px;
                color: #4f5458;
                margin-bottom: 10px;
                input[type='checkbox'] {
                    display: inline-block;
                    margin-right: 12px;
                }
            }

            ul {
                list-style: none;
                padding-left: 10px;
                li {
                    margin-bottom: 10px;
                }
            }

            .more-item {
                padding: 0;
                margin: 0;
                .q-item {
                    padding: 0;
                    margin: 0;
                    display: inline;
                    .q-focus-helper {
                        height: fit-content;
                    }

                    .q-item__section {
                        display: inline;
                        height: fit-content;
                        padding-left: 0px;
                        padding-right: 2px;
                        .q-item__label {
                            display: inline;
                        }
                    }
                }
            }
        }
    }

    .service-list-area {
        border-left: .5px solid rgba(97, 97, 97, .4);
        width: calc(100% - 200px);
        margin-top: 80px;
        margin-left: 200px;
        position: relative;
        @media (max-width: 1060px) {
            margin-left: 0;
            width: 100%;
        }

        .select-type {
            width: 100%;
            border: 1px solid #ced4da;
            padding: 11px 18px;
            max-width: 200px;
            outline: none;
            option {
                padding: 2px;
            }
            @media (max-width: 1060px) {
                max-width: 2000px;
            }
        }
        .filter-btn {
            border: 1px solid #d3d4d5;
            color: #676d73;
            padding: 9px 20px;
            font-size: 16px;
            transition: .4s all;
            cursor: pointer;
            outline: none;
            &.active {
                background: #2b76d2;
                color: #fff;
            }
            @media (max-width: 1060px) {
                width: 25%;
                font-size: 14px;
                padding: 5px;
            }
        }
        .see-more-btn {
            margin: 30px auto 0;
            padding-bottom: 30px;
            text-align: center;
            a {
                border: 2px solid #d0c8c8;
                padding: 4px 10px;
                font-size: 16px;
                color: #1D1D1D;
                text-decoration: none;
            }
        }

    }

}


.hp-places-autocomplete2 {
    padding-bottom: 0;

    input {
        display: none;

        &.autocomplete-search {
            display: block;
            border: none;
            outline: none;
            height: 35px;
            margin-top: 3px;
        }
    }
}
</style>
