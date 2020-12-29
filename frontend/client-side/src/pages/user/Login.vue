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
                class="q-pa-md full-width row wrap justify-center items-center content-center fixed-center" style="background-image: url(https://images.unsplash.com/photo-1540476547779-348beb642680?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
    background-size: cover;    height: -webkit-fill-available;">
                <q-card class="my-card col-md-4 col-sm-8 col-xs-10 q-pa-md">
                    <q-card-section class="column items-center content-center">
                        <div class="text-h5">ফিরে আসার জন্য ধন্যবাদ</div>
                        <div class="text-subtitle1">LOGIN</div>
                    </q-card-section>

                    <q-separator dark inset/>
                    <q-card-section>
                        <div class="q-pa-md">
                            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                                <q-input
                                    filled
                                    type="number"
                                    v-model="mobile"
                                    mask="##########"
                                    label="Mobile *"
                                    lazy-rules
                                    :rules="[
                        val => (val.length == 10) || 'Please type valid mobile',
                  ]"
                                    prefix="+880"
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
                                    <q-btn label="Login" type="submit" color="primary"/>
                                    <q-btn
                                        label="register"
                                        type="reset"
                                        color="primary"
                                        flat
                                        class="q-ml-sm"
                                        to="/user/register"
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
import Swal from "sweetalert2";

export default {
    data() {
        return {
            mobile: '1996881019',
            password: '12345678',

        };
    },

    methods: {
        async onSubmit() {
            let response = await this.$store.dispatch('pro/loginPro', {
                mobile: "+880" + this.mobile,
                password: this.password
            })
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
                    this.$router.push('/user/dashboard')
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
