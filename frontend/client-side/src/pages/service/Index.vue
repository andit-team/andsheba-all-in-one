<template>
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
                    <div class="col-xs-12 col-sm-12 col-md-6">
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


                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <!-- Search Result -->
                        <div
                            :class="[$q.screen.gt.sm ? 'q-ml-md' : null, 'row justify-center']"
                        >
                            <div v-for="service in services" :key="service._id" class="q-pa-md col-md-6 col-sm-6 col-xs-12">
                                <q-card class="my-card">
                                    <q-card-section>
                                        <q-img
                                            class="col-4"
                                            :src="service.thumb_img"
                                        >
                                            <div class="absolute-bottom text-left">
                                                <div class="text-h6 q-mb-xs">{{ service.title }}</div>
                                                <div class="row no-wrap items-center">
                                                    <q-rating
                                                        size="28px"
                                                        v-model="stars"
                                                        :max="5"
                                                        color="yellow"
                                                    />
                                                    <span class="text-caption text-grey q-ml-sm"
                                                    >4.2 (551)</span
                                                    >
                                                </div>
                                            </div>
                                        </q-img>
                                        <q-card-section>
                                            <q-btn
                                                fab
                                                color="primary"
                                                icon="monetization_on"
                                                class="absolute"
                                                style="top: 0; right: 12px; transform: translateY(-50%);"
                                            />

                                            <div class="row no-wrap items-center">
                                                <div class="col text-h6 ellipsis">
                                                    <q-icon color="green" name="emoji_events" size="sm"/>
                                                    Top
                                                    Rated
                                                </div>
                                                <div
                                                    class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                                                >
                                                    2000TK
                                                </div>
                                            </div>
                                            <div class="text-caption text-grey q-mt-xs">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Facilis eligendi tempore voluptatibus quae ipsam rerum
                                            </div>
                                            <div class="text-subtitle3 q-mt-sm">
                                                <q-icon name="place" size="xs"/>
                                                32 Choto Mirzapur, Khulna,
                                                Bangladesh
                                            </div>
                                            <div class="text-subtitle3 q-mt-sm">
                                                <q-icon name="supervised_user_circle" size="xs"/>
                                                Hired
                                                <span>22</span> Times

                                                <!-- <q-btn flat round color="balck" icon="mail" />
                                              <q-btn flat round color="red" icon="favorite" />
                                              <q-btn flat round color="accent" icon="bookmark" />
                                              <q-btn flat round color="primary" icon="share" /> -->
                                            </div>
                                        </q-card-section>
                                    </q-card-section>

                                    <q-separator/>

                                    <q-card-actions>
                                        <q-item class="col-7">
                                            <q-item-section avatar>
                                                <q-avatar>
                                                    <div
                                                        class="absolute bg-green"
                                                        style="right: 0px;transform: translateY(-50%);width: 12px;height: 12px;bottom: -8px;border-radius: inherit;"
                                                    ></div>
                                                    <img
                                                        :src="service.thumb_img"
                                                    />
                                                </q-avatar>
                                            </q-item-section>

                                            <q-item-section>
                                                <q-item-label>{{ service.user.name }}</q-item-label>

                                                <q-item-label caption>

                                                </q-item-label>
                                            </q-item-section>
                                        </q-item>

                                        <q-item class="col-5 justify-end">
                                            <q-btn
                                                :to="'service/single?id=' + service._id"
                                                color="secondary"
                                                label="Details"
                                                icon="visibility"
                                                size="md"
                                                class="q-pa-xs"
                                            />
                                        </q-item>

                                    </q-card-actions>
                                </q-card>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>


        <!-- Search Bar -->


        <div
            :class="[
        $q.screen.gt.sm ? 'q-mt-xl ' : 'q-mt-md q-pa-xs',
        'row justify-center q-mb-md'
      ]"
        >
            <!--            <q-btn-dropdown-->
            <!--                class="glossy col-xs-2 col-sm-2"-->
            <!--                color="primary"-->
            <!--                icon="filter_alt"-->
            <!--                v-if="!$q.screen.gt.sm"-->
            <!--            >-->
            <!--                <div class="row justify-center q-pa-xs">-->
            <!--                    <div class="column fit">-->
            <!--                        <q-list>-->
            <!--                            <q-item-label header class="bg-grey-3">কাজের ধরন</q-item-label>-->

            <!--                            <q-item tag="label" v-ripple>-->
            <!--                                <q-item-section side top>-->
            <!--                                    <q-radio v-model="color" val="cyan" color="cyan"/>-->
            <!--                                </q-item-section>-->

            <!--                                <q-item-section>-->
            <!--                                    <q-item-label>মেরামত</q-item-label>-->
            <!--                                </q-item-section>-->
            <!--                            </q-item>-->

            <!--                            <q-item tag="label" v-ripple>-->
            <!--                                <q-item-section side top>-->
            <!--                                    <q-radio v-model="color" val="red" color="red"/>-->
            <!--                                </q-item-section>-->

            <!--                                <q-item-section>-->
            <!--                                    <q-item-label>স্থাপন</q-item-label>-->
            <!--                                </q-item-section>-->
            <!--                            </q-item>-->

            <!--                            <q-item tag="label" v-ripple>-->
            <!--                                <q-item-section side top>-->
            <!--                                    <q-radio v-model="color" val="green" color="green"/>-->
            <!--                                </q-item-section>-->

            <!--                                <q-item-section>-->
            <!--                                    <q-item-label>রক্ষণাবেক্ষণ</q-item-label>-->
            <!--                                </q-item-section>-->
            <!--                            </q-item>-->

            <!--                            <q-item tag="label" v-ripple>-->
            <!--                                <q-item-section side top>-->
            <!--                                    <q-radio v-model="color2" val="green" color="green"/>-->
            <!--                                </q-item-section>-->

            <!--                                <q-item-section>-->
            <!--                                    <q-item-label>সমাবেশ</q-item-label>-->
            <!--                                </q-item-section>-->
            <!--                            </q-item>-->

            <!--                            <q-separator spaced/>-->

            <!--                            <q-item-label header class="bg-grey-3">ফ্রিকয়েন্সি</q-item-label>-->

            <!--                            <q-item tag="label" v-ripple>-->
            <!--                                <q-item-section side top>-->
            <!--                                    <q-checkbox v-model="check2"/>-->
            <!--                                </q-item-section>-->

            <!--                                <q-item-section>-->
            <!--                                    <q-item-label>সপ্তাহে ১ বার</q-item-label>-->
            <!--                                </q-item-section>-->
            <!--                            </q-item>-->
            <!--                            <q-item tag="label" v-ripple>-->
            <!--                                <q-item-section side top>-->
            <!--                                    <q-checkbox v-model="check3"/>-->
            <!--                                </q-item-section>-->

            <!--                                <q-item-section>-->
            <!--                                    <q-item-label>সপ্তাহে ৫ বার</q-item-label>-->
            <!--                                </q-item-section>-->
            <!--                            </q-item>-->
            <!--                            <q-item tag="label" v-ripple>-->
            <!--                                <q-item-section side top>-->
            <!--                                    <q-checkbox v-model="check1"/>-->
            <!--                                </q-item-section>-->

            <!--                                <q-item-section>-->
            <!--                                    <q-item-label>সপ্তাহে ৭ বার</q-item-label>-->
            <!--                                </q-item-section>-->
            <!--                            </q-item>-->

            <!--                            <q-separator spaced/>-->
            <!--                            <q-item-label header class="bg-grey-3"-->
            <!--                            >মূল্য নির্ধারণ-->
            <!--                            </q-item-label-->
            <!--                            >-->

            <!--                            <q-item>-->
            <!--                                <q-item-section side>-->
            <!--                                    <q-icon color="teal" name="request_quote"/>-->
            <!--                                </q-item-section>-->
            <!--                                <q-item-section>-->
            <!--                                    <q-range-->
            <!--                                        v-model="rateRange"-->
            <!--                                        :min="5"-->
            <!--                                        :max="100"-->
            <!--                                        label-->
            <!--                                        color="teal"-->
            <!--                                    />-->
            <!--                                </q-item-section>-->
            <!--                            </q-item>-->
            <!--                        </q-list>-->
            <!--                    </div>-->

            <!--                    <div class="column q-pa-sm">-->
            <!--                        <q-btn-->
            <!--                            color="secondary"-->
            <!--                            label="Apply Filter"-->
            <!--                            push-->
            <!--                            size="md"-->
            <!--                            v-close-popup-->
            <!--                        />-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </q-btn-dropdown>-->
            <q-form @submit="onSubmit" class="row col-8 q-pr-md q-mb-lg">
                <q-select
                    square
                    dense
                    outlined
                    v-model="category"
                    :options="categories"
                    option-value="_id"
                    option-label="name"
                    label="Select Category"
                    @input="handleCategorySelect"
                    class="col-xs-12 col-sm-12 col-md-3 q-mb-xs"
                    :rules="[ val => (val.name !== '') || 'Please Select a category']"
                />
                <q-select
                    square dense outlined
                    v-model="sub_category"
                    :options="sub_categories"
                    option-value="_id"
                    option-label="name"
                    label="Select Sub Category"
                    class="col-xs-12 col-sm-12 col-md-3 q-mb-lg"
                />


                <q-input
                    square dense outlined
                    v-model="location"
                    class="hp-places-autocomplete2 col-xs-12 col-sm-12 col-md-3 q-mb-lg"
                    :rules="[
                            val =>(val !== null) || 'Please Select Location',
                        ]"
                >
                    <template v-slot:default>
                        <gmap-autocomplete
                            class="autocomplete-search"
                            placeholder="আপনার অবস্থান *"
                            @place_changed="setPlace">
                        </gmap-autocomplete>
                    </template>
                </q-input>
                <q-btn type="submit" color="teal" class="col-md-3 col-xs-12 col-sm-12 q-mb-lg">
                    <q-icon left name="search"/>
                    <div>খুঁজুন</div>
                </q-btn>
            </q-form>
        </div>
        <div class="row justify-center">
            <q-separator vertical v-if="$q.screen.gt.sm"/>
            <div class="col-md-2 col-sm-12 col-xs-12" v-if="$q.screen.gt.sm">
                <q-toolbar class="bg-primary text-white shadow-2">
                    <q-toolbar-title>Search Filter</q-toolbar-title>
                </q-toolbar>
                <q-list padding>
                    <q-item-label header>Extra Service 1</q-item-label>

                    <q-item tag="label" v-ripple>
                        <q-item-section side top>
                            <q-radio v-model="color" val="cyan" color="cyan"/>
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>Example 2</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item tag="label" v-ripple>
                        <q-item-section side top>
                            <q-radio v-model="color" val="red" color="red"/>
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>Example 3</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item tag="label" v-ripple>
                        <q-item-section side top>
                            <q-radio v-model="color" val="green" color="green"/>
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>Example 1</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-separator spaced/>
                    <q-item-label header>Extra Service</q-item-label>

                    <q-item tag="label" v-ripple>
                        <q-item-section side top>
                            <q-checkbox v-model="check2"/>
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>Example 2</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item tag="label" v-ripple>
                        <q-item-section side top>
                            <q-checkbox v-model="check3"/>
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>Example 3</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item tag="label" v-ripple>
                        <q-item-section side top>
                            <q-checkbox v-model="check1"/>
                        </q-item-section>

                        <q-item-section>
                            <q-item-label>Example 1</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-separator spaced/>
                    <q-item-label header>Price Range</q-item-label>

                    <q-item>
                        <q-item-section side>
                            <q-icon color="teal" name="request_quote"/>
                        </q-item-section>
                        <q-item-section>
                            <q-range
                                v-model="rateRange"
                                :min="5"
                                :max="100"
                                label-always
                                color="teal"
                            />
                        </q-item-section>
                        <q-item-section side>
                            $/Hour
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
            <q-separator vertical v-if="$q.screen.gt.sm"/>

            <div class="col-md-6 col-sm-12 col-xs-12">
                <!-- Search Result -->
                <div
                    :class="[$q.screen.gt.sm ? 'q-ml-md' : null, 'row justify-center']"
                >
                    <div v-for="service in services" :key="service._id" class="q-pa-md col-md-6 col-sm-6 col-xs-12">
                        <q-card class="my-card">
                            <q-card-section>
                                <q-img
                                    class="col-4"
                                    :src="service.thumb_img"
                                >
                                    <div class="absolute-bottom text-left">
                                        <div class="text-h6 q-mb-xs">{{ service.title }}</div>
                                        <div class="row no-wrap items-center">
                                            <q-rating
                                                size="28px"
                                                v-model="stars"
                                                :max="5"
                                                color="yellow"
                                            />
                                            <span class="text-caption text-grey q-ml-sm"
                                            >4.2 (551)</span
                                            >
                                        </div>
                                    </div>
                                </q-img>
                                <q-card-section>
                                    <q-btn
                                        fab
                                        color="primary"
                                        icon="monetization_on"
                                        class="absolute"
                                        style="top: 0; right: 12px; transform: translateY(-50%);"
                                    />

                                    <div class="row no-wrap items-center">
                                        <div class="col text-h6 ellipsis">
                                            <q-icon color="green" name="emoji_events" size="sm"/>
                                            Top
                                            Rated
                                        </div>
                                        <div
                                            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
                                        >
                                            2000TK
                                        </div>
                                    </div>
                                    <div class="text-caption text-grey q-mt-xs">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Facilis eligendi tempore voluptatibus quae ipsam rerum
                                    </div>
                                    <div class="text-subtitle3 q-mt-sm">
                                        <q-icon name="place" size="xs"/>
                                        32 Choto Mirzapur, Khulna,
                                        Bangladesh
                                    </div>
                                    <div class="text-subtitle3 q-mt-sm">
                                        <q-icon name="supervised_user_circle" size="xs"/>
                                        Hired
                                        <span>22</span> Times

                                        <!-- <q-btn flat round color="balck" icon="mail" />
                                      <q-btn flat round color="red" icon="favorite" />
                                      <q-btn flat round color="accent" icon="bookmark" />
                                      <q-btn flat round color="primary" icon="share" /> -->
                                    </div>
                                </q-card-section>
                            </q-card-section>

                            <q-separator/>

                            <q-card-actions>
                                <q-item class="col-7">
                                    <q-item-section avatar>
                                        <q-avatar>
                                            <div
                                                class="absolute bg-green"
                                                style="right: 0px;transform: translateY(-50%);width: 12px;height: 12px;bottom: -8px;border-radius: inherit;"
                                            ></div>
                                            <img
                                                :src="service.thumb_img"
                                            />
                                        </q-avatar>
                                    </q-item-section>

                                    <q-item-section>
                                        <q-item-label>{{ service.user.name }}</q-item-label>

                                        <q-item-label caption>

                                        </q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item class="col-5 justify-end">
                                    <q-btn
                                        :to="'service/single?id=' + service._id"
                                        color="secondary"
                                        label="Details"
                                        icon="visibility"
                                        size="md"
                                        class="q-pa-xs"
                                    />
                                </q-item>

                            </q-card-actions>
                        </q-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ServiceCard from "components/services/ServiceCard";
export default {
    components: {ServiceCard},
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
    .filter-area {
        width: 200px;
        position: fixed;
        top: 160px;
        min-height: 500px;
        border-right: .5px solid rgba(97, 97, 97, .4);

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
        width: 100%;
        margin-top: 80px;
        margin-left: 200px;
        position: relative;
        .select-type {
            width: 100%;
            border: 1px solid #ced4da;
            padding: 11px 18px;
            max-width: 200px;
            outline: none;
            option {
                padding: 2px;
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
