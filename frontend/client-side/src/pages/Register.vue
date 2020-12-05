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

            <q-input
              filled
              type="text"
              v-model="location"
              label="আপনার অবস্থান *"
            />

              <q-input
                  ref="autocomplete"
                  filled
                  v-model="location"
                  label="Physical Address"
                  for="address"
                  hint="Your permanent address"
              />


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
import {Loader, LoaderOptions} from 'google-maps';

export default {
    data() {
        return {
            name: null,
            email: null,
            mobile: null,
            password: null,
            location: null,
            accept: false
        };
    },

    computed: {

    },

    mounted() {


        this.autocomplete = new google.maps.places.Autocomplete(
            (this.$refs.autocomplete),
            (document.getElementById("address")),
            {types: ['geocode']}
        );
        this.autocomplete.addListener('place_changed', () => {
            let place = this.autocomplete.getPlace();
            let ac = place.address_components;
            console.log(ac);
        })
    },

    methods: {
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
