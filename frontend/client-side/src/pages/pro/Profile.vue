<template>
    <div>
        <div class="text-h5 q-ma-lg">Profile Settings</div>
        <div class="q-ma-lg">
            <div class="text-h6">Basic Information</div>
            <div class="q-mt-lg">
                <div class="cover-img-area" :style="`background-image: url('${cover_img || this.pro.cover_image}')`">
                    <file-selector
                        class="c-pro-cover-img-upload"
                        accept-extensions=".jpg,.svg,.png,.jpeg"
                        :multiple="false"
                        :max-file-size="5 * 1024 * 1024"
                        @changed="handleCoverImageChange">
                        <q-btn class="bg-primary q-ma-md text-white text-capitalize">Cover Image</q-btn>
                    </file-selector>
                </div>

                <div class="profile-image-area">
                    <q-img class="inline" width="170px" height="170px"
                           style="border-radius: 10px; border: 1px solid #5a5f65"
                           :src="profile_img || this.pro.thumb_image"/>
                    <div class="inline-block q-mx-sm absolute" style="bottom: 0; left: 0">
                        <file-selector
                            class="c-file-selector-btn"
                            accept-extensions=".jpg,.svg,.png,.jpeg"
                            :multiple="false"
                            :max-file-size="5 * 1024 * 1024"
                            @changed="handleProfileImageChange">
                            <q-btn class="bg-primary q-mx-md q-mb-sm text-white text-capitalize"
                                   style="font-size: 12px">Thumb Image
                            </q-btn>
                        </file-selector>
                    </div>
                </div>


            </div>
            <form class="q-mt-xl">
                <q-form class="row" @submit="handleSubmit">
                    <q-input
                        filled
                        :value="name || pro.name"
                        @input="value => this.name = value"
                        label="Name"
                        class="col-12 col-md-6 q-pa-sm"
                    />
                    <q-input
                        filled
                        :value="email || pro.email"
                        @input="value => this.email = value"
                        label="Email"
                        class="col-12 col-md-6 q-pa-sm"
                    />
                    <q-input
                        filled
                        v-model="password"
                        label="Password"
                        class="col-12 col-md-6 q-pa-sm"
                    />
                    <q-input
                        filled
                        :value="pro.mobile"
                        label="Mobile"
                        class="col-12 col-md-6 q-pa-sm"
                        disable
                    />

                    <q-select
                        filled
                        label="Gender"
                        name="name"
                        option-label="name"
                        option-value="value"
                        :value="gender || pro.gender"
                        class="col-12 col-md-6 q-pa-sm"
                        :options="options"
                        @input="value => this.gender = value.value"
                    />

                    <q-input
                        filled
                        label="Birth Date"
                        :value="date || pro.date_of_birth"
                        @input="value => this.date = value"
                        type="date"
                        class="col-12 col-md-6 q-pa-sm"
                    />

                    <q-input
                        :value="description || pro.description"
                        @input="value => this.description = value"
                        filled
                        type="textarea"
                        class="col-12 q-pa-sm"
                    />
                    <q-btn type="submit" class="bg-primary q-ma-sm text-white">Update</q-btn>
                </q-form>
            </form>
        </div>
    </div>
</template>

<script>
import Swal from "sweetalert2";
import {LocalStorage} from "quasar";
import axios from "axios";

export default {
    name: "Profile",
    data() {
        return {
            name: null,
            email: null,
            password: '',
            cover_img: null,
            profile_img: null,
            gender: null,
            date: null,
            description: null,
            options: [
                {name: 'Male', value: 'male'},
                {name: 'Female', value: 'female'},
                {name: 'Others', value: 'others'},
            ]
        }
    },
    computed: {
        pro: {
            get() {
                return this.$store.getters["pro/getPro"]
            }
        }
    },


    methods: {
        async handleCoverImageChange(files) {
            let fileReader = new FileReader()
            fileReader.onload = async e => {
                this.cover_img = e.currentTarget.result
            }
            fileReader.readAsDataURL(files[0])
        },

        async handleProfileImageChange(files) {
            let fileReader = new FileReader()
            fileReader.onload = async e => {
                this.profile_img = e.currentTarget.result
            }
            fileReader.readAsDataURL(files[0])
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


        async handleSubmit() {
            let pro = {
                name: this.name || this.pro.name,
                password: this.password,
                email: this.email || this.pro.email,
                cover_image: this.cover_img ? await this.uploadSingleImage(this.cover_img) : this.pro.cover_image,
                thumb_image: this.profile_img ? await this.uploadSingleImage(this.profile_img) : this.pro.thumb_image,
                date_of_birth: this.date || this.pro.date_of_birth,
                gender: this.gender || this.pro.gender,
                description: this.description || this.pro.description
            }
            let response = await this.$store.dispatch('pro/updateProfile', pro)
            if (response.error === true) {
                await Swal.fire('Error', response.msg, 'error')
            } else {
                await Swal.fire('Success', 'Profile updated Successfully', 'success')
            }
        }
    }
}
</script>

<style lang="scss">
.c-file-selector-btn {
    .fs-droppable {

    }
}
</style>

<style lang="scss" scoped>
.cover-img-area {
    height: 300px;
    background: #f6f7f8;
    background-size: cover;
    position: relative;

    .c-pro-cover-img-upload {
        position: absolute;
        right: 0;
        bottom: 0;
    }
}

.profile-image-area {
    position: relative;
    width: 200px;
    margin-top: -120px;
    margin-left: 50px;
}
</style>
