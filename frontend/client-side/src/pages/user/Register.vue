<template>
  <div
    class="q-pa-md full-width row wrap justify-center items-center content-center" style="background-image: url(https://images.unsplash.com/photo-1503791774117-08c379dd7f7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80);
    background-size: cover;    height: -webkit-fill-available;">
    <q-card class="my-card col-md-4 col-sm-8 col-xs-10 q-pa-md q-mt-xl">
     <q-card-section class="column items-center content-center">
        <div class="text-h5">আপনার অ্যাকাউন্ট খুলুন</div>
        <div class="text-subtitle1">REGISTER NOW</div>
      </q-card-section>

      <q-separator dark inset />
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
              type="text"
              v-model="mobile"
              mask="###########"
              label="মোবাইল *"
              lazy-rules
              :rules="[
                val => (val !== null && val !== '') || 'Please type moblie',
              ]"
            />
            <q-input
              filled
              type="text"
              v-model="email"
              label="ইমেইল"
            />

              <q-select
                  filled
                v-model="plan"
                :options="plans"
                option-value="_id"
                option-label="title"
                label="Select Plan"
              />


            <q-input
              filled
              type="text"
              v-model="password"
              label="পাসওয়ার্ড *"
              lazy-rules
              :rules="[
                val => (val !== null && val !== '') || 'Please type passwords',
              ]"
            />

              <div class="q-item q-field--filled" style="background-color: #f2f2f2">
                  <gmap-autocomplete
                      class="autocomplete-search q-field__native q-placeholder"
                      placeholder="আপনার অবস্থান *"
                      :value="formattedAddress"
                      @place_changed="setPlace">
                  </gmap-autocomplete>
              </div>

              <div class="marker"></div>
              <GmapMap
                  ref="mapRef"
                  :center="mapCenter"
                  :zoom="13"
                  map-type-id="terrain"
                  style="width: 97%; height: 300px"
                  @dragend="handleDragEnd"
                  @click="handleMapClick"
              >
              </GmapMap>


              <q-toggle v-model="accept" label="I agree with Terms & Conditions" />

            <div>
              <q-btn label="register" type="submit" color="primary" />
              <q-btn
                label="login"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
                to="/user/login"
              />
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </div>
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
            plan: null,
            mapCenter: {
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
            accept: false,
            showInfo: false,
        };
    },

    created() {
        this.$store.dispatch('pro/fetchPlans')
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
        }
    },

    mounted() {
        console.log(this.$store.getters['pro/getToken'])
    },


    methods: {
        async handleDragEnd() {
            let location = {
                lat: this.$refs.mapRef.$mapObject.center.lat(),
                lng: this.$refs.mapRef.$mapObject.center.lng()
            }
            this.address.location = location
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



        async onSubmit() {
            if (this.accept !== true) {
                Swal.fire(
                    'Warning',
                    'You need to accept the license and terms first',
                    'warning'
                )
            } else {
                let pro = {
                    name: this.name,
                    mobile: this.mobile,
                    password: this.password,
                    email: this.email,
                    plan: this.plan._id,
                    address: this.address
                }
                let response = await this.$store.dispatch('pro/registerPro', pro )
                if(response.error) {
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
                        this.$router.push('/user')
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
    position:absolute;
    background:url('/icons/pin.svg') no-repeat;
    top:50%;left:50%;
    z-index: 1;
    margin-left: -15px;
    margin-top: 140px;
    height:45px;
    width:40px;
    cursor:pointer;
}
</style>
