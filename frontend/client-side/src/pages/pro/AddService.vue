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
            <q-tab name="overview" label="Overview"/>
            <q-tab name="description" label="Description and FAQs"/>
            <q-tab name="units" label="Units and Pricing"/>
            <q-tab name="gallery" label="Gallery"/>
            <q-tab name="location" label="Service Area"/>
            <q-tab name="publish" label="Publish"/>
        </q-tabs>
        <q-form @submit="onSubmit">
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="overview">
                    <q-card class="my-card q-ma-sm">
                        <q-card-section class="q-pa-lg">
                            <q-input
                                v-model="service.name"
                                label="Service Name"
                                lazy-rules
                                :rules="[
                                     val => (val && val.length > 0) || 'Please type Name'
                                ]"
                            />
                            <q-select
                                v-model="service.category"
                                :options="categories"
                                option-value="_id"
                                option-label="name"
                                label="Category"
                                @input="handleCategorySelect"
                                lazy-rules
                                :rules="[
                                    val => !!val || 'Please Select A Category'
                                ]"
                            />

                            <q-select
                                v-model="service.sub_category"
                                :options="sub_categories"
                                option-value="_id"
                                option-label="name"
                                label="Sub Category"
                            />
                            <chip-input :chips="service.tags"/>
                            <div class="text-right">
                                <q-btn type="button" class="q-btn bg-primary text-white q-mt-lg q-pa-sm text-right"
                                       @click="() => handleTabChange('description')">Save & Continue
                                </q-btn>
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
                                v-model="service.description"
                                filled
                                type="textarea"
                            />
                            <div class="text-right">
                                <q-btn class="q-btn bg-primary text-white q-mt-lg q-pa-sm text-right"
                                       @click="handleSave">Save
                                </q-btn>
                            </div>
                        </q-card-section>
                    </q-card>
                    <q-card class="my-card q-mx-sm q-my-xl">
                        <q-card-section class="q-pa-lg">
                            <h4 class="q-ma-none">Frequently Asked Questions</h4>
                            <hr class="q-mb-lg"/>
                            <p class="inline-block text-weight-light" style="font-size: 16px">Add Question and answers
                                for
                                you Buyer</p>
                            <div v-for="(faq,index) in service.faqs" :key="index" class="q-mt-lg">
                                <q-input v-model="faq.question" label="Question"/>
                                <q-input v-model="faq.answer" label="Answer" type="textarea"/>
                            </div>
                            <div class="text-right q-mt-md">
                                <q-item class="cursor-pointer inline-block" style="font-size: 16px;color: #389fd9"
                                        clickable
                                        @click="handleAddFaqs"> + Add FAQS
                                </q-item>
                            </div>

                            <div class="text-right">
                                <q-btn class="q-btn bg-primary text-white q-mt-lg q-pa-sm text-right"
                                       @click="() => handleTabChange('units')">Save & Continue
                                </q-btn>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-tab-panel>
                <q-tab-panel name="units">
                    <q-card class="my-card q-mx-sm q-my-xl">
                        <q-card-section class="q-pa-lg">
                            <h4 class="q-ma-none">Tell Your buyer what you need to get started</h4>
                            <hr class="q-mb-lg"/>
                            <p class="inline-block text-weight-light" style="font-size: 16px">Ask your requirements from
                                buyer and give him a cost estimation</p>
                            <div v-for="(price,index) in service.pricing" :key="index" style="margin-bottom: 40px">
                                <q-input v-model="price.title" label="Question"/>
                                <h6 class="text-weight-regular q-my-sm">Select customer answer type</h6>
                                <div>
                                    <q-btn class="q-ma-md q-pa-xs"
                                           :class="price.question_type == 'radio' ? 'bg-primary text-white': ''"
                                           @click="() => price.question_type='radio'">Choose One
                                    </q-btn>
                                    <q-btn class="q-ma-md q-pa-xs"
                                           :class="price.question_type == 'checkbox' ? 'bg-primary text-white': ''"
                                           @click="() => price.question_type='checkbox'">Choose Multiple
                                    </q-btn>
                                    <q-btn class="q-ma-md q-pa-xs"
                                           :class="price.question_type == 'unit' ? 'bg-primary text-white': ''"
                                           @click="() => price.question_type='unit'">Unit Input
                                    </q-btn>
                                    <q-btn class="q-ma-md q-pa-xs"
                                           :class="price.question_type == 'text' ? 'bg-primary text-white': ''"
                                           @click="() => price.question_type='text'">Choose Text
                                    </q-btn>
                                </div>
                                <div v-if="price.question_type == 'radio' || price.question_type == 'checkbox'">
                                    <h6 class="text-weight-regular q-my-sm">Add customer answer Option</h6>
                                    <div v-for="option in price.answers">
                                        <q-input v-model="option.answer_title_or_unit" class="inline-block q-mr-md"
                                                 style="max-width: 300px" label="Option"/>
                                        <q-input v-model="option.price" class="inline-block" mask="#######"
                                                 style="max-width: 300px" label="Price"/>
                                    </div>
                                    <div class="text-right q-mt-md" style="max-width: 390px">
                                        <q-item
                                            class="cursor-pointer inline-block"
                                            style="font-size: 16px;color: #389fd9"
                                            clickable @click="() => {
                                                price.answers = [
                                                    ...price.answers,
                                                    {answer_title_or_unit: '',price: '' }
                                                ]
                                            }"
                                        >
                                            + Add Option
                                        </q-item>
                                    </div>
                                </div>
                                <div v-if="price.question_type == 'unit'">
                                    <h6 class="text-weight-regular q-my-sm">Select Your Unit & Price</h6>
                                    <q-input v-model="price.answers[0].answer_title_or_unit"
                                             class="inline-block q-mr-md"
                                             style="max-width: 300px" label="Unit"/>
                                    <q-input v-model="price.answers[0].price" mask="#######" class="inline-block"
                                             style="max-width: 300px" label="Price"/>
                                </div>

                                <div v-if="price.question_type == 'text'">
                                    <q-input type="text-area" disable="disable" label="Answer"/>
                                </div>

                            </div>
                            <div class="text-right q-mt-md">
                                <q-item class="cursor-pointer inline-block" style="font-size: 16px;color: #389fd9"
                                        clickable
                                        @click="handleAddRequirements"> + Add Requirement
                                </q-item>
                            </div>

                            <div class="text-right">
                                <q-btn class="q-btn bg-primary text-white q-mt-lg q-pa-sm text-right"
                                       @click="() => handleTabChange('gallery')">Save & Continue
                                </q-btn>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-tab-panel>
                <q-tab-panel name="gallery">
                    <q-card class="my-card q-mx-sm q-my-xl">
                        <q-card-section class="q-pa-lg">
                            <h4 class="q-ma-none">Build Your Service Gallery</h4>
                            <hr class="q-mb-lg"/>
                            <p class="inline-block text-weight-light" style="font-size: 16px">Add your service related
                                images to set yourself apart from competitors</p>
                            <div class="block q-mt-lg  q-mb-md">
                                <h6 class="q-ma-none">Upload Thumb Image</h6>

                                <div class="row q-my-lg">
                                    <div class="col-xs-11 col-sm-11 col-md-6 col-lg-4 q-ma-md">
                                        <file-selector
                                            :height="200"
                                            class="file-selector"
                                            accept-extensions=".jpg,.svg,.png,.jpeg"
                                            :multiple="false"
                                            :max-file-size="5 * 1024 * 1024"
                                            @changed="handleThumbImageChange"
                                        >
                                            <q-icon name="far fa-images" style="font-size: 34px"/>
                                            <p class="q-mt-sm" style="font-size: 18px">Browse Image</p>
                                        </file-selector>
                                    </div>
                                    <div class="col-xs-11 col-sm-11 col-md-6 col-lg-4 q-ma-md"
                                         v-if="service.thumb_image">
                                        <q-img
                                            :src="service.thumb_image"
                                            spinner-color="white"
                                            style="height: 200px;width: 300px"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="block q-mt-lg q-mb-md">
                                <h6 class="q-ma-none">Upload Images to describe your service</h6>
                                <div class="row q-my-lg">
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 q-pa-md">
                                        <file-selector
                                            :height="200"
                                            class="file-selector"
                                            accept-extensions=".jpg,.svg,.png,.jpeg"
                                            :multiple="true"
                                            :max-file-size="5 * 1024 * 1024"
                                            @changed="handleServiceImagesChange"
                                        >
                                            <q-icon name="far fa-images" style="font-size: 34px"/>
                                            <p class="q-mt-sm" style="font-size: 18px">Browse Images</p>
                                        </file-selector>
                                    </div>
                                    <div v-for="url in service.service_images"
                                         class="col-xs-12 col-sm-12 col-md-6 col-lg-4 q-pa-md">
                                        <q-img
                                            :src="url"
                                            spinner-color="white"
                                            style="height: 200px;width: 300px"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="text-right">
                                <q-btn class="q-btn bg-primary text-white q-mt-lg q-pa-sm text-right"
                                       @click="() => handleTabChange('location')">Save & Continue
                                </q-btn>
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

                            <hr class="q-my-lg"/>
                            <h4 class="q-mx-none q-mb-lg">Full Address</h4>


                            <div class="row">
                                <div class="col-12 col-md-4 q-pr-sm">
                                    <q-select
                                        filled
                                        label="Select Division"
                                        v-model="service.division"
                                        option-value="id"
                                        option-label="bn_name"
                                        :options="divisions"
                                        @input="handleDivisionSelect"
                                        lazy-rules
                                        :rules="[
                                                val => !!val || 'Please Select A Division'
                                            ]"
                                    />
                                </div>
                                <div class="col-12 col-md-4 q-pl-sm q-pr-lg">
                                    <q-select
                                        filled
                                        label="Select District"
                                        v-model="service.district"
                                        option-value="id"
                                        option-label="bn_name"
                                        :options="districts"
                                        @input="handleDistrictSelect"
                                        lazy-rules
                                        :rules="[
                                                val => !!val || 'Please Select A District'
                                            ]"
                                    />
                                </div>

                                <div class="col-12 col-md-4 q-pl-sm q-pr-lg">
                                    <q-select
                                        filled
                                        label="Select Type"
                                        v-model="service.area_type"
                                        option-value="value"
                                        option-label="name"
                                        :options="area_types"
                                        lazy-rules
                                        :rules="[
                                        val => !!val || 'Please Select A District'
                                    ]"
                                    />
                                </div>

                            </div>


                            <div class="row" v-if="service.area_type && service.area_type.value === 'municipal'">
                                <div class="col-12 col-md-6 q-pr-sm">
                                    <q-select
                                        filled
                                        label="Select Municipal"
                                        v-model="service.municipal"
                                        option-value="id"
                                        option-label="bn_name"
                                        :options="municipals"
                                        @input="handleMunicipalSelect"
                                        lazy-rules
                                        :rules="[
                                                val => !!val || 'Please Select A Municipal'
                                            ]"
                                    />
                                </div>
                                <div class="col-12 col-md-6 q-pl-sm">
                                    <q-select
                                        filled
                                        label="Select Ward"
                                        v-model="service.ward"
                                        option-value="id"
                                        option-label="bn_name"
                                        :options="wards"
                                        lazy-rules
                                        :rules="[
                                                val => !!val || 'Please Select A Ward'
                                            ]"
                                    />
                                </div>
                            </div>

                            <div class="row" v-if="service.area_type && service.area_type.value === 'residential'">
                                <div class="col-12 col-md-4 q-pr-sm">
                                    <q-select
                                        filled
                                        label="Select Upazila"
                                        v-model="service.upazila"
                                        option-value="id"
                                        option-label="bn_name"
                                        :options="upazilas"
                                        @input="handleUpazilaSelect"
                                        lazy-rules
                                        :rules="[
                                                val => !!val || 'Please Select A Upazila'
                                            ]"
                                    />
                                </div>
                                <div class="col-12 col-md-4 q-pr-sm">
                                    <q-select
                                        filled
                                        label="Select Union"
                                        v-model="service.union"
                                        option-value="id"
                                        option-label="bn_name"
                                        :options="unions"
                                        @input="handleUnionSelect"
                                        lazy-rules
                                        :rules="[
                                                val => !!val || 'Please Select A Union'
                                            ]"
                                    />
                                </div>
                                <div class="col-12 col-md-4 q-pr-sm">
                                    <q-select
                                        filled
                                        label="Select Village"
                                        v-model="service.village"
                                        option-value="id"
                                        option-label="bn_name"
                                        :options="villages"
                                        lazy-rules
                                        :rules="[
                                                val => !!val || 'Please Select A Village'
                                            ]"
                                    />
                                </div>
                            </div>

                            <div class="text-right">
                                <q-btn class="q-btn bg-primary text-white q-mt-lg q-pa-sm text-right"
                                       @click="() => handleTabChange('publish')">Save & Continue
                                </q-btn>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-tab-panel>


                <q-tab-panel name="publish">
                    <q-card class="my-card q-mx-sm q-my-xl">
                        <q-card-section class="q-pa-lg">
                            <h4 class="q-ma-none">Congratulations</h4>
                            <hr class="q-mb-lg"/>
                            <p class="inline-block" style="font-size: 18px">You have almost done have your first
                                service</p>
                            <p class="q-mt-lg">Before you start service on Andsheba, there is one last thing we need you
                                to
                                do.
                                The security of your account is really important. For this reason to publish your
                                service
                                details
                                we require all our service providers to verify their phone number.
                            </p>
                            <p>
                                Your phone number will be remains private and will not be used for marketing purpose.
                                See
                                more Privacy policy
                            </p>
                            <div class="text-right">
                                <q-btn class="q-btn bg-primary text-white q-mt-lg q-pa-sm text-right" type="submit">
                                    Verify Now
                                </q-btn>
                            </div>
                        </q-card-section>
                    </q-card>
                </q-tab-panel>
            </q-tab-panels>
        </q-form>
    </div>
</template>

<script>
import Swal from "sweetalert2";
import ChipInput from "components/common/ChipInput";
import {LocalStorage} from 'quasar';

export default {
    name: "AddService",
    components: {ChipInput},
    data() {
        return {
            tab: "overview",
            service: {
                address: {}
            },
            mapCenter: null,
            area_types: [
                {name: "পৌরসভা", value: 'municipal'},
                {name: "উপজেলা", value: 'residential'},
            ]
        }
    },
    async created() {
        await this.$store.dispatch('service/fetchCategories');
        await this.$store.dispatch('location/fetchDivisions');
        await this.$store.dispatch('pro/fetchServiceLocal');
        this.service = JSON.parse(JSON.stringify(this.$store.getters["pro/getService"]))
        this.mapCenter = this.service.address.location
        if(this.service.category !== null) {
            await  this.$store.dispatch('service/fetchSubCategories', this.service.category._id);
        }
        if(this.service.division !== null) {
            await this.$store.dispatch('location/fetchDistricts', this.service.division.id)
        }
        if(this.service.district !== null) {
            await this.$store.dispatch('location/fetchMunicipals', this.service.district.id)
            await this.$store.dispatch('location/fetchUpazilas', this.service.district.id)
        }
        if(this.service.municipal !== null) {
            await this.$store.dispatch('location/fetchWards', this.service.municipal.id)
        }
        if(this.service.upazila !== null) {
            await this.$store.dispatch('location/fetchUnion', this.service.upazila.id)
        }
        if(this.service.union !== null) {
            await this.$store.dispatch('location/fetchVillages', this.service.union.id)
        }
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
                return this.service.address.address
            },
            set(value) {
                this.service.address.address = value;
            }
        },
        markerCenter: {
            get() {
                return this.service.address.location
            },
            set(value) {
                this.service.address.location = value
            }
        },

        divisions: {
            get() {
                return this.$store.getters["location/getDivisions"]
            }
        },
        districts: {
            get() {
                return this.$store.getters["location/getDistricts"]
            },
            set(value) {
                this.$store.commit('location/setDistricts', value)
            }
        },
        municipals: {
            get() {
                return this.$store.getters["location/getMunicipals"]
            },
            set(value) {
                this.$store.commit('location/setMunicipals', value)
            }
        },
        wards: {
            get() {
                return this.$store.getters["location/getWards"]
            },
            set(value) {
                this.$store.commit('location/setWards', value)
            }
        },
        upazilas: {
            get() {
                return this.$store.getters["location/getUpazilas"]
            },
            set(value) {
                this.$store.commit('location/setUpazilas', value)
            }
        },
        unions: {
            get() {
                return this.$store.getters["location/getUnions"]
            },
            set(value) {
                this.$store.commit('location/setUnions', value)
            }
        },
        villages: {
            get() {
                return this.$store.getters["location/getVillages"]
            },
            set(value) {
                this.$store.commit('location/setVillages', value)
            }
        },
    },
    methods: {
        handleTabChange(val) {
            this.tab = val
            this.handleSave();
        },
        handleSave() {
            let service = {
                ...this.service,
                thumb_image: null,
                service_images: []
            }
            console.log(service)
            this.$store.dispatch('pro/updateServiceLocal', service)
        },
        handleCategorySelect(value) {
            this.$store.dispatch('service/fetchSubCategories', value._id);
            this.sub_category = null
        },
        handleAddFaqs() {
            this.service.faqs = [
                ...this.service.faqs,
                {
                    question: "",
                    answer: ""
                }
            ]
        },
        handleAddRequirements() {
            this.service.pricing = [
                ...this.service.pricing,
                {
                    title: "",
                    question_type: "radio",
                    answers: [
                        {answer_title_or_unit: '', price: ''}
                    ],
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
            this.mapCenter = location
            let response = await this.$axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + location.lat + '%2C' + location.lng + '&language=en&key=AIzaSyDtygZ5JPTLgwFLA8nU6bb4d_6SSLlTPGw');
            if (response.status == 200) {
                let address = response.data.results[0].formatted_address
                this.formattedAddress = address
            }
        },

        async handleMapClick(click) {
            let location = {
                lat: click.latLng.lat(),
                lng: click.latLng.lng(),
            }
            this.address.location = location
            this.mapCenter = location
            let response = await this.$axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + location.lat + '%2C' + location.lng + '&language=en&key=AIzaSyDtygZ5JPTLgwFLA8nU6bb4d_6SSLlTPGw');
            if (response.status == 200) {
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
            this.service.address = address
            this.mapCenter = address.location
        },

        async handleThumbImageChange(files) {
            let fileReader = new FileReader()
            fileReader.onload = e => {
                this.service.thumb_image = e.currentTarget.result
            }
            fileReader.readAsDataURL(files[0])
        },

        async handleServiceImagesChange(files) {
            let length = files.length
            for (let i = 0; i < length; i++) {
                let fileReader = new FileReader()
                fileReader.onload = e => {
                    this.service.service_images.push(e.currentTarget.result)
                }
                fileReader.readAsDataURL(files[i])
            }
        },


        async handleDivisionSelect(value) {
            this.service.district = null, this.service.municipal = null, this.service.ward = null, this.service.upazila = null, this.service.union = null, this.service.village = null
            this.districts = [], this.municipals = [], this.wards = [], this.upazilas = [], this.unions = [], this.villages = []
            await this.$store.dispatch('location/fetchDistricts', value.id)
        },
        async handleDistrictSelect(value) {
            this.service.municipal = null, this.service.ward = null, this.service.upazila = null, this.service.union = null, this.service.village = null
            this.municipals = [], this.wards = [], this.upazilas = [], this.unions = [], this.villages = []
            await this.$store.dispatch('location/fetchMunicipals', value.id)
            await this.$store.dispatch('location/fetchUpazilas', value.id)
        },
        handleMunicipalSelect(value) {
            this.service.union = null, this.service.village = null, this.service.ward = null
            this.wards = [], this.unions = [], this.villages = []
            this.$store.dispatch('location/fetchWards', value.id)
        },
        handleUpazilaSelect(value) {
            this.service.village = null, this.service.union = null
            this.villages = [], this.unions = []
            this.$store.dispatch('location/fetchUnion', value.id)
        },
        handleUnionSelect(value) {
            this.service.village = null
            this.villages = []
            this.$store.dispatch('location/fetchVillages', value.id)
        },

        async onSubmit(e) {
            if (!(this.service.name && this.service.name.length > 0 && this.service.category && this.service.name.length > 0)) {
                Swal.fire(
                    'Warning',
                    'Please Provide required Fields',
                    'warning'
                )
                this.tab = 'overview'
            } else if( ! (this.service.village || this.service.ward) ) {
                Swal.fire(
                    'Warning',
                    'Please Provide required Your Area',
                    'warning'
                )
                this.tab = 'location'
            } else {
                this.handleSave();
                let response = await this.$store.dispatch('pro/addService')
                if (response.error === true) {
                    await Swal.fire('Error', response.msg, 'error')
                } else {
                    await Swal.fire('Success', 'Service added Successfully', 'success')
                    LocalStorage.remove('service')
                    this.$store.commit('pro/clearService')
                    await this.$router.push('/pro/services')
                }
            }

        },
    }
}
</script>

<style lang="scss">
.fs-droppable {
    border: 1px dashed #389fd9;
    text-align: center;

    .fs-btn-select {
        width: 100%;
        height: 100%;
        padding-top: 17%;
        cursor: pointer;
    }
}
</style>
