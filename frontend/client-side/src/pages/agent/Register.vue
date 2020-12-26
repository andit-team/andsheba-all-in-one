<template>
    <q-layout view="hHh lpR fFf">
        <q-header :class="[$q.screen.gt.sm ? 'q-pa-md' : 'q-pa-sm',  'bg-white', 'text-grey-8']" height-hint="58">
            <q-toolbar>
                <q-btn flat no-caps no-wrap class="q-ml-xs" to="/">
                    <img src="https://andsheba.com/_nuxt/img/logo.0f218c1.png">
                </q-btn>
            </q-toolbar>
        </q-header>

        <q-page-container>

            <div
                class="q-pa-md full-width row wrap justify-center items-center content-center" style="background-image: url(https://images.unsplash.com/photo-1503791774117-08c379dd7f7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80);
    background-size: cover;    height: -webkit-fill-available;">
                <q-card class="my-card col-md-4 col-sm-8 col-xs-10 q-pa-md q-mt-xl">
                    <q-card-section class="column items-center content-center">
                        <div class="text-h5">আপনার অ্যাকাউন্ট খুলুন</div>
                        <div class="text-subtitle1">REGISTER NOW</div>
                    </q-card-section>

                    <q-separator dark inset/>
                    <q-card-section>
                        <div class="q-pa-md">
                            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                                <q-input
                                    filled
                                    v-model="name"
                                    label="নাম *"
                                    hint="আপানার সম্পূর্ণ নাম দিন"
                                    lazy-rules
                                    :rules="[
                                        val => (val && val.length > 0) || 'Please type Name'
                                    ]"
                                />

                                <q-input
                                    filled
                                    type="number"
                                    v-model="mobile"
                                    mask="##########"
                                    label="মোবাইল *"
                                    lazy-rules
                                    :rules="[
                                        val => (val.length == 10) || 'Please type valid mobile',
                                    ]"
                                    prefix="+880"
                                />
                                <q-input
                                    filled
                                    type="text"
                                    v-model="email"
                                    label="ইমেইল"
                                />

                                <q-input
                                    filled
                                    type="text"
                                    v-model="address"
                                    label="Address"
                                    lazy-rules
                                    :rules="[
                                        val => (val && val.length > 0) || 'Please type Address'
                                    ]"
                                />

                                <q-select
                                    filled
                                    v-model="work_area"
                                    :options="work_areas"
                                    option-value="value"
                                    option-label="name"
                                    label="Select Work Area"
                                    lazy-rules
                                />

                                <div class="row">
                                    <div class="col-12 col-md-6 q-pr-sm">
                                        <q-select
                                            filled
                                            label="Select Division"
                                            v-model="division"
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
                                    <div class="col-12 col-md-6 q-pl-sm">
                                        <q-select
                                            filled
                                            label="Select District"
                                            v-if="work_area.value !== 'division'"
                                            v-model="district"
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
                                </div>


                                <div class="row" v-if="work_area.value === 'municipal' || work_area.value === 'ward'">
                                    <div class="col-12 col-md-6 q-pr-sm">
                                        <q-select
                                            filled
                                            label="Select Municipal"
                                            v-model="municipal"
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
                                    <div class="col-12 col-md-6 q-pl-sm" v-if="work_area.value === 'ward'">
                                        <q-select
                                            filled
                                            label="Select Ward"
                                            v-model="ward"
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

                                <div class="row" v-if="work_area.value === 'upazila' || work_area.value === 'union' || work_area.value === 'village'">
                                    <div class="col-12 col-md-4 q-pr-sm" >
                                        <q-select
                                            filled
                                            label="Select Upazila"
                                            v-model="upazila"
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
                                    <div class="col-12 col-md-4 q-pr-sm" v-if="work_area.value === 'union' || work_area.value === 'village'">
                                        <q-select
                                            filled
                                            label="Select Union"
                                            v-model="union"
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
                                    <div class="col-12 col-md-4 q-pr-sm" v-if="work_area.value === 'village'">
                                        <q-select
                                            filled
                                            label="Select Village"
                                            v-model="village"
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

                                <q-input
                                    filled
                                    type="text"
                                    v-model="nid_no"
                                    label="NID No."
                                    lazy-rules
                                    :rules="[
                                        val => (val && val.length > 0) || 'Please provide NID'
                                    ]"
                                />

                                <q-input
                                    filled
                                    type="text"
                                    v-model="password"
                                    label="পাসওয়ার্ড *"
                                    lazy-rules
                                    :rules="[
                                        val => (val.length > 7) || 'Password should contain minimum 8 character',
                                    ]"
                                />



                                <q-toggle v-model="accept" label="I agree with Terms & Conditions"/>

                                <div>
                                    <q-btn label="register" type="submit" color="primary"/>
                                    <q-btn
                                        label="login"
                                        type="reset"
                                        color="primary"
                                        flat
                                        class="q-ml-sm"
                                        to="/agent/login"
                                    />
                                </div>
                            </q-form>
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </q-page-container>
    </q-layout>
</template>
<script>
import Swal from 'sweetalert2'

export default {
    data() {
        return {
            name: null,
            email: null,
            mobile: null,
            password: null,
            address: null,
            division: null,
            district: null,
            municipal: null,
            ward: null,
            upazila: null,
            union : null,
            village: null,
            nid_no: null,
            work_area:{name: 'Division', value: 'division'},
            work_areas: [
                {name: 'Division', value: 'division'},
                {name: 'District', value: 'district'},
                {name: 'Municipal', value: 'municipal'},
                {name: 'Ward', value: 'ward'},
                {name: 'Upazila', value: 'upazila'},
                {name: 'Union', value: 'union'},
                {name: 'Village', value: 'village'},
            ],
            accept: false,
            showInfo: false,
        };
    },

    created() {
        this.$store.dispatch('location/fetchDivisions')
    },

    computed: {
        plans: {
            get() {
                return this.$store.getters["pro/getAllPlans"]
            }
        },

        formattedAddress: {
            get() {
                return this.address.address
            },
            set(value) {
                this.address.address = value;
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

        handleDivisionSelect(value) {
            this.district = null
            this.municipal = null
            this.ward = null
            this.upazila = null
            this.union = null
            this.village = null
            this.$store.dispatch('location/fetchDistricts', value.id)
        },
        handleDistrictSelect(value) {
            this.municipal = null
            this.ward = null
            this.upazila = null
            this.union = null
            this.village = null
            this.$store.dispatch('location/fetchMunicipals', value.id)
            this.$store.dispatch('location/fetchUpazilas', value.id)
        },
        handleMunicipalSelect(value) {
            this.ward = null
            this.$store.dispatch('location/fetchWards', value.id)
        },
        handleUpazilaSelect(value) {
            this.village = null
            this.$store.dispatch('location/fetchUnion', value.id)
        },
        handleUnionSelect(value) {
            this.$store.dispatch('location/fetchVillages', value.id)
        },

        async onSubmit() {
            if (this.accept !== true) {
                Swal.fire(
                    'Warning',
                    'You need to accept the license and terms first',
                    'warning'
                )
            } else {
                let agent = {
                    name: this.name,
                    mobile: '+880' + this.mobile,
                    password: this.password,
                    email: this.email,
                    role: 'agent',
                    label_address: this.address,
                    nid_no: this.nid_no,
                    agent_level: this.work_area.value,
                    division: this.division.id,
                    district: this.district ? this.district.id : null,
                    municipal: this.municipal ? this.municipal.id : null,
                    ward: this.ward ? this.ward.id : null,
                    upazila: this.upazila ? this.upazila.id : null,
                    union: this.union ? this.union.id : null,
                    village: this.village ? this.village.id : null
                }
                let response = await this.$store.dispatch('agent/registerAgent', agent)
                if (response.error) {
                    Swal.fire(
                        'Error',
                        response.msg,
                        'error'
                    )
                } else {
                    Swal.fire(
                        'Success',
                        response.msg,
                        'success'
                    ).then(r => {
                        //this.$router.push('/user/dashboard')
                    })
                }
            }
        },

        onReset() {
            this.user = null;
            this.pass = null;
            this.accept = false;
        }
    },
}
</script>


<style lang="scss" scoped>
.marker {
    position: absolute;
    background: url('/icons/pin.svg') no-repeat;
    top: 50%;
    left: 50%;
    z-index: 1;
    margin-left: -15px;
    margin-top: 140px;
    height: 45px;
    width: 40px;
    cursor: pointer;
}
</style>
