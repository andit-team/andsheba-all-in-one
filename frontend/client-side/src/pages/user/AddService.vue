<template>
    <div>
        <div class="text-h5 q-ma-lg">Add Service</div>
        <q-tabs
            v-model="tab"
            dense
            class="text-grey q-ma-sm"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
        >
            <q-tab name="overview" label="Overview" />
            <q-tab name="description" label="Description and FAQs" />
            <q-tab name="units" label="Units and Pricing" />
            <q-tab name="gallery" label="Gallery" />
            <q-tab name="location" label="Service Area" />
            <q-tab name="publish" label="Publish" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="overview">
                <q-card class="my-card q-ma-sm">
                    <q-card-section class="q-pa-lg">
                        <q-input
                            v-model="name"
                            label="Service Name"
                        />
                        <q-select
                            v-model="category"
                            :options="categories"
                            option-value="_id"
                            option-label="name"
                            label="Category"
                            @input="handleCategorySelect"
                            />

                        <q-select
                            v-model="sub_category"
                            :options="sub_categories"
                            option-value="_id"
                            option-label="name"
                            label="Sub Category"
                        />
                        <div class="text-right">
                            <q-btn class="q-btn bg-primary text-white q-mt-lg q-pa-sm text-right" @click="() => handleTabChange('description')">Save & Continue</q-btn>
                        </div>
                    </q-card-section>
                </q-card>
            </q-tab-panel>
            <q-tab-panel name="description">
                <q-card class="my-card q-ma-sm">
                    <q-card-section class="q-pa-lg">
                        <h4 class="q-ma-none">Description</h4>
                        <hr class="q-mb-lg"/>
                        <p class="">Give a short description of your service</p>
                        <q-input
                            v-model="description"
                            filled
                            type="textarea"
                        />
                        <div class="text-right">
                            <q-btn class="q-btn bg-primary text-white q-mt-lg q-pa-sm text-right" >Save</q-btn>
                        </div>
                    </q-card-section>
                </q-card>
                <q-card class="my-card q-mx-sm q-my-xl">
                    <q-card-section class="q-pa-lg">
                        <h4 class="q-ma-none">Frequently Asked Questions</h4>
                        <hr class="q-mb-lg"/>
                        <p class="inline-block text-weight-light" style="font-size: 16px">Add Question and answers for you Buyer</p>
                        <div v-for="(faq,index) in faqs" :key="index" class="q-mt-lg">
                            <q-input v-model="faq.question" label="Question"/>
                            <q-input v-model="faq.answer" label="Answer" type="textarea"/>
                        </div>
                        <div class="text-right q-mt-md">
                            <q-item class="cursor-pointer inline-block" style="font-size: 16px;color: #389fd9" clickable @click="handleAddFaqs" > + Add FAQS</q-item>
                        </div>

                        <div class="text-right">
                            <q-btn class="q-btn bg-primary text-white q-mt-lg q-pa-sm text-right" @click="() => handleTabChange('units')">Save & Continue</q-btn>
                        </div>
                    </q-card-section>
                </q-card>
            </q-tab-panel>
            <q-tab-panel name="units">
                <q-card class="my-card q-mx-sm q-my-xl">
                    <q-card-section class="q-pa-lg">
                        <h4 class="q-ma-none">Tell Your buyer what you need to get started</h4>
                        <hr class="q-mb-lg"/>
                        <p class="inline-block text-weight-light" style="font-size: 16px">Ask your requirements from buyer and give him a cost estimation</p>
                        <div v-for="(price,index) in pricing" :key="index" class="q-mt-xl">
                            <q-input v-model="price.question" label="Question"/>
                            <h6 class="text-weight-regular q-my-sm">Select customer answer type</h6>
                            <div>
                                <q-btn class="q-ma-md q-pa-xs" :class="price.type == 'single' ? 'bg-primary text-white': ''" @click="() => price.type='single'">Choose One</q-btn>
                                <q-btn class="q-ma-md q-pa-xs" :class="price.type == 'multiple' ? 'bg-primary text-white': ''" @click="() => price.type='multiple'">Choose Multiple</q-btn>
                                <q-btn class="q-ma-md q-pa-xs" :class="price.type == 'text' ? 'bg-primary text-white': ''" @click="() => price.type='text'">Choose Text</q-btn>
                            </div>
                            <div v-if="price.type == 'single' || price.type == 'multiple'">
                                <h6 class="text-weight-regular q-my-sm">Add customer answer Option</h6>
                                <div v-for="option in price.options">
                                    <q-input v-model="option.option" class="inline-block q-mr-md" style="max-width: 300px" label="Option"/>
                                    <q-input v-model="option.price" class="inline-block" style="max-width: 300px" label="Price"/>
                                </div>
                                <div class="text-right q-mt-md" style="max-width: 390px">
                                    <q-item
                                        class="cursor-pointer inline-block"
                                        style="font-size: 16px;color: #389fd9"
                                        clickable @click="() => {
                                                price.options = [
                                                    ...price.options,
                                                    {option: '',price: '' }
                                                ]
                                            }"
                                    >
                                        + Add Option
                                    </q-item>
                                </div>
                            </div>
                            <div v-else>
                                <q-input type="text-area" disable="disable" label="Answer"/>
                            </div>

                        </div>
                        <div class="text-right q-mt-md">
                            <q-item class="cursor-pointer inline-block" style="font-size: 16px;color: #389fd9" clickable @click="handleAddRequirements" > + Add Requirement</q-item>
                        </div>

                        <div class="text-right">
                            <q-btn class="q-btn bg-primary text-white q-mt-lg q-pa-sm text-right" @click="() => handleTabChange('gallery')">Save & Continue</q-btn>
                        </div>
                    </q-card-section>
                </q-card>
            </q-tab-panel>
            <q-tab-panel name="gallery">
                <q-card class="my-card q-mx-sm q-my-xl">
                    <q-card-section class="q-pa-lg">
                        <h4 class="q-ma-none">Build Your Service Gallery</h4>
                        <hr class="q-mb-lg"/>
                        <p class="inline-block text-weight-light" style="font-size: 16px">Add your service related images to set yourself apart from competitors</p>
                        <div class="block q-mt-lg  q-mb-md">
                            <h6 class="q-ma-none">Upload Image to describe your service</h6>
                            <input type="file"/>
                        </div>
                        <div class="block q-mt-lg q-mb-md">
                            <h6 class="q-ma-none">Upload Video to describe your service</h6>
                            <input type="file"/>
                        </div>
                        <div class="text-right">
                            <q-btn class="q-btn bg-primary text-white q-mt-lg q-pa-sm text-right" @click="() => handleTabChange('location')">Save & Continue</q-btn>
                        </div>
                    </q-card-section>
                </q-card>
            </q-tab-panel>
            <q-tab-panel name="location">
                <q-card class="my-card q-mx-sm q-my-xl">
                    <q-card-section class="q-pa-lg">
                        <h4 class="q-ma-none">Service Area</h4>
                        <hr class="q-mb-lg"/>

                        <div class="q-item q-field--filled q-mb-lg q-mr-lg" style="background-color: #f2f2f2">
                            <gmap-autocomplete
                                class="autocomplete-search q-field__native q-placeholder"
                                placeholder="আপনার অবস্থান *"
                                :value="formattedAddress"
                                @place_changed="setPlace">
                            </gmap-autocomplete>
                        </div>


                        <GmapMap
                            ref="mapRef"
                            :center="mapCenter"
                            :zoom="13"
                            map-type-id="terrain"
                            style="width: 97%; height: 400px"
                            @dragstart="handleDragStart"
                            @dragend="handleDragEnd"
                            @click="handleMapClick"
                            @drag="handleDrag"
                        >
                            <GmapMarker
                                ref="marker"
                                :position="markerCenter"
                            />
                        </GmapMap>

                        <div class="text-right">
                            <q-btn class="q-btn bg-primary text-white q-mt-lg q-pa-sm text-right" @click="() => handleTabChange('publish')">Save & Continue</q-btn>
                        </div>
                    </q-card-section>
                </q-card>
            </q-tab-panel>


            <q-tab-panel name="publish">
                <q-card class="my-card q-mx-sm q-my-xl">
                    <q-card-section class="q-pa-lg">
                        <h4 class="q-ma-none">Congratulations</h4>
                        <hr class="q-mb-lg"/>
                        <p class="inline-block" style="font-size: 18px">You have almost done have your first service</p>
                        <p class="q-mt-lg">Before you start service on Andsheba, there is one last thing we need you to do.
                            The security of your account is really important. For this reason to publish your service details
                            we require all our service providers to verify their phone number.
                        </p>
                        <p>
                            Your phone number will be remains private and will not be used for marketing purpose. See more Privacy policy
                        </p>
                        <div class="text-right">
                            <q-btn class="q-btn bg-primary text-white q-mt-lg q-pa-sm text-right" > Verify Now</q-btn>
                        </div>
                    </q-card-section>
                </q-card>
            </q-tab-panel>
        </q-tab-panels>
    </div>
</template>

<script>
export default {
    name: "AddService",
    data() {
        return {
            tab: "overview",
            name: null,
            category: null,
            sub_category: null,
            tags: null,
            description: null,
            faqs: [],
            pricing: [],
            mapCenter: {
                lat: 22.845641,
                lng: 89.5403279
            },
            markerCenter: {
                lat: 22.845641,
                lng: 89.5403279
            },
            address: {
                address: "",
                location: {
                    lat: 22.845641,
                    lng: 89.5403279
                }
            },
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

        formattedAddress: {
            get() {
                return this.address.address
            },
            set(value) {
                this.address.address = value;
            }
        }
    },
    methods: {
        handleTabChange(val) {
            this.tab = val
            if(val == 'gallery') {
                console.log(this.pricing)
            }

        },
        handleCategorySelect(value) {
            this.$store.dispatch('service/fetchSubCategories', value._id);
        },
        handleAddFaqs() {
            this.faqs = [
                ...this.faqs,
                {
                    question: "",
                    answer: ""
                }
            ]
        },
        handleAddRequirements() {
            this.pricing = [
                ...this.pricing,
                {
                    question: "",
                    type: "single",
                    options: []
                }
            ]
        },

        handleDragStart() {
            this.$refs.marker.$markerObject.setAnimation(google.maps.Animation.BOUNCE)
        },
        handleDrag() {
            let location = {
                lat: this.$refs.mapRef.$mapObject.center.lat(),
                lng: this.$refs.mapRef.$mapObject.center.lng()
            }
            this.markerCenter = location
        },


        async handleDragEnd() {
            this.$refs.marker.$markerObject.setAnimation(null)
            let location = {
                lat: this.$refs.mapRef.$mapObject.center.lat(),
                lng: this.$refs.mapRef.$mapObject.center.lng()
            }
            this.address.location = location
            this.mapCenter =location
            let response = await this.$axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + location.lat + '%2C' + location.lng + '&language=en&key=AIzaSyDtygZ5JPTLgwFLA8nU6bb4d_6SSLlTPGw');
            if(response.status == 200) {
                let address = response.data.results[0].formatted_address
                this.formattedAddress = address
            }
        },

        async handleMapClick(click) {
            let location = {
                lat: click.latLng.lat(),
                lng:click.latLng.lng(),
            }
            this.address.location = location
            this.mapCenter = location
            let response = await this.$axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + location.lat + '%2C' + location.lng + '&language=en&key=AIzaSyDtygZ5JPTLgwFLA8nU6bb4d_6SSLlTPGw');
            if(response.status == 200) {
                let address = response.data.results[0].formatted_address
                this.formattedAddress = address
            }
        },

        setPlace(place) {
            let address = {
                address: place.formatted_address,
                location: {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                }
            }
            this.address = address
            this.mapCenter = address.location
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
