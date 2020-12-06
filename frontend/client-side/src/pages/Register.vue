<template>
  <div
    class="q-pa-md full-width row wrap justify-center items-center content-center fixed-center" style="background-image: url(https://images.unsplash.com/photo-1503791774117-08c379dd7f7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80);
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
                val => (val && val.length > 0) || 'Please type mobile'
              ]"
            />

            <q-input
              filled
              type="text"
              v-model="mobile"
              label="মোবাইল *"
              lazy-rules
              :rules="[
                val => (val !== null && val !== '') || 'Please type moblie',
                val => (val > 0 && val < 100) || 'Please type a strong moblie'
              ]"
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
              v-model="password"
              label="পাসওয়ার্ড *"
              lazy-rules
              :rules="[
                val => (val !== null && val !== '') || 'Please type passwords',
                val => (val > 0 && val < 100) || 'Please type a strong password'
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
              />
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>

export default {
    data() {
        return {
            name: null,
            email: null,
            mobile: null,
            password: null,
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

    computed: {
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

        setPlace(place) {
            let address = {
                address: place.formatted_address,
                location: {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                }
            }
            console.log(place);
            this.address = address
            this.mapCenter = address.location
        },

        async mapLocationUpdate(location) {
            this.address.location.lat = location.latLng.lat()
            this.address.location.lng = location.latLng.lng()
            let response = await this.$axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' +this.address.location.lat + '%2C' + this.address.location.lng + '&language=en&key=AIzaSyDtygZ5JPTLgwFLA8nU6bb4d_6SSLlTPGw');
            if(response.status == 200) {
                let address = response.data.results[0].formatted_address
                this.formattedAddress = address
            }
        },

        onSubmit() {
            if (this.accept !== true) {
                this.$q.notify({
                    color: "red-5",
                    textColor: "white",
                    icon: "warning",
                    message: "You need to accept the license and terms first"
                });
            } else {
                this.$q.notify({
                    color: "green-4",
                    textColor: "white",
                    icon: "cloud_done",
                    message: "Submitted"
                });
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
    z-index:9999;
    margin-left: -14px;
    margin-top: 108px;
    height:45px;
    width:40px;
    cursor:pointer;
}
</style>
