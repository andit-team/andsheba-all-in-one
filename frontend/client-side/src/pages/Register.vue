<template>
    <div
        class="q-pa-md full-width row wrap justify-center items-center" style="background-image: url(https://images.unsplash.com/photo-1503791774117-08c379dd7f7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80);
    background-size: cover;    min-height: 92vh;">
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
                                to="/login"
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
            accept: false,
        };
    },

    methods: {
        async onSubmit() {
            if (this.accept !== true) {
                Swal.fire(
                    'Warning',
                    'You need to accept the license and terms first',
                    'warning'
                )
            } else {
                let customer = {
                    name: this.name,
                    mobile: "+880" + this.mobile,
                    password: this.password,
                    email: this.email,
                }
                let response = await this.$store.dispatch('customer/registerCustomer', customer)
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
                        this.$router.push('/')
                        this.$store.dispatch('customer/fetchCustomer');
                    })
                }
            }
        },

        onReset() {
            this.user = null;
            this.password = null;
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
