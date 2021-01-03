<template>
    <div>
        <div class="text-h5 q-ma-lg">Profile Settings</div>
        <div class="q-ma-lg">
            <div class="text-h6">Basic Information</div>
            <div class="q-mt-lg">

                <q-img class="inline" width="170px" style="border-radius: 10px" :src="thumb_image" v-if="thumb_image"/>
                <q-img class="inline" width="170px" style="border-radius: 10px" :src="user.thumb_image" v-else-if="user.thumb_image && user.thumb_image.length > 5"/>
                <q-img v-else alt="Male User icon" class="inline" width="170px" style="border-radius: 10px" src="https://img.icons8.com/fluent/344/user-male-circle.png" lazy="loaded"/>
                <div class="inline-block q-ma-lg absolute">
                    <div class="text-h5 text-weight-bold">{{ user.name }}</div>
                    <div class="text-weight-bold">Max file size is 20mb</div>
                    <file-selector
                        class="q-mt-md"
                        style="margin-left: -22px"
                        accept-extensions=".jpg,.svg,.png,.jpeg"
                        :multiple="false"
                        :max-file-size="5 * 1024 * 1024"
                        @changed="selectImage">
                        <q-btn class="bg-primary q-mx-md q-mb-sm text-white text-capitalize"
                               style="font-size: 12px">Thumb Image
                        </q-btn>
                    </file-selector>
                </div>
            </div>
            <q-form class="row q-mt-lg" @submit="handleSubmit">
                <q-input
                    filled
                    :value="name || user.name"
                    label="Name"
                    @change="e => this.name = e.currentTarget.value"
                    class="col-12 col-md-6 q-pa-sm"
                />
                <q-input
                    filled
                    :value="email || user.email"
                    label="Email"
                    @change="e => this.email = e.currentTarget.value"
                    class="col-12 col-md-6 q-pa-sm"
                />
                <q-input
                    filled
                    label="Password"
                    v-model="password"
                    type="password"
                    class="col-12 col-md-6 q-pa-sm"
                    lazy-rules
                    :rules="[
                        val => (val.length == 0 || val.length > 7 ) || 'Minimum password length is 8 character'
                    ]"
                />
                <q-input
                    filled
                    :value="user.mobile"
                    label="Mobile"
                    class="col-12 col-md-6 q-pa-sm"
                    disable
                />
                <q-btn type="submit" class="bg-primary q-mt-lg q-ml-sm text-white">Update</q-btn>
            </q-form>
        </div>

    </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
    name: "Profile",
    data() {
        return {
            name: null,
            email: null,
            password: "",
            thumb_image: null
        }
    },
    computed: {
        user: {
            get() {
                return this.$store.getters["customer/getCustomer"]
            }
        }
    },
    methods: {
        selectImage(files) {
            let fileReader = new FileReader()
            fileReader.onload = async e => {
                this.thumb_image = e.currentTarget.result
            }
            fileReader.readAsDataURL(files[0])
        },
        async handleSubmit() {
            let thumb_image = this.thumb_image ? await this.uploadSingleImage(this.thumb_image): this.user.thumb_image
            let customer = {
                name: this.name || this.user.name,
                email: this.email || this.user.email,
                password: this.password || '',
                thumb_image
            }
            let response = await this.$store.dispatch('customer/updateCustomer', customer)
            if (response.error === true) {
                await Swal.fire('Error', response.msg, 'error')
            } else {
                await Swal.fire('Success', 'Profile updated Successfully', 'success')
            }
        },


        base64Data(ImageURL) {
            let block = ImageURL.split(";");
            return block[1].split(",")[1];
        },
        async uploadSingleImage(image) {
            try {
                const data = new FormData()
                data.append('image', this.base64Data(image))
                let url = "https://api.imgbb.com/1/upload?key=dbe026b9378783fd76fb76f8dea82edb";
                const res = await axios.post(url, data, {})
                if (res.data.success) {
                    return res.data.data.image.url
                }
            } catch (e) {
                return ''
            }
        },
    }

}
</script>

<style lang="scss">

</style>