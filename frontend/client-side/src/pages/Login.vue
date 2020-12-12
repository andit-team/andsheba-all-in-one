<template>
  <div
    class="q-pa-md full-width row wrap justify-center items-center content-center fixed-center" style="background-image: url(https://images.unsplash.com/photo-1540476547779-348beb642680?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
    background-size: cover;    height: -webkit-fill-available;">
    <q-card class="my-card col-md-4 col-sm-8 col-xs-10 q-pa-md">
     <q-card-section class="column items-center content-center">
        <div class="text-h5">ফিরে আসার জন্য ধন্যবাদ</div>
        <div class="text-subtitle1">LOGIN</div>
      </q-card-section>

      <q-separator dark inset />
      <q-card-section>
        <div class="q-pa-md">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                  filled
                  type="text"
                  v-model="mobile"
                  mask="###########"
                  label="Mobile *"
                  lazy-rules
                  :rules="[
                val => (val !== null && val !== '') || 'Please type moblie',
              ]"
              />

            <q-input
              filled
              type="password"
              v-model="password"
              label="Your password *"
              lazy-rules
              :rules="[
                val => (val !== null && val !== '') || 'Please type passwords',
              ]"
            />


            <div>
              <q-btn label="Login" type="submit" color="primary" />
              <q-btn
                label="register"
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
import Swal from "sweetalert2";

export default {
  data() {
    return {
      mobile: null,
      password: null,

    };
  },

  methods: {
    async onSubmit() {
        let response = await this.$store.dispatch('customer/loginCustomer', {mobile: this.mobile, password: this.password} )
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
                this.$router.push('/')
            })
        }
    },

    onReset() {
      this.user = null;
      this.pass = null;
      this.accept = false;
    }
  }
};
</script>
