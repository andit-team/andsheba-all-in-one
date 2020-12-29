<template>
    <div>
        <div class="text-h5 q-ma-lg">Profile Settings</div>
        <div class="q-ma-lg">
            <div class="text-h6">Basic Information</div>
            <div class="q-mt-lg">
                <div class="cover-img-area" :style="`background-image: url('${cover_img}')`">
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
                    <q-img class="inline" width="170px" height="170px" style="border-radius: 10px; border: 1px solid #5a5f65"
                           :src="profile_img"/>
                    <div class="inline-block q-mx-sm absolute" style="bottom: 0; left: 0">
                        <file-selector
                            class="c-file-selector-btn"
                            accept-extensions=".jpg,.svg,.png,.jpeg"
                            :multiple="false"
                            :max-file-size="5 * 1024 * 1024"
                            @changed="handleProfileImageChange">
                            <q-btn class="bg-primary q-mx-md q-mb-sm text-white text-capitalize" style="font-size: 12px">Thumb Image</q-btn>
                        </file-selector>
                    </div>
                </div>


            </div>
            <form class="q-mt-xl">
                <q-form class="row" @submit="handleSubmit">
                    <q-input
                        filled
                        v-model="current_pro.name"
                        label="Name"
                        class="col-12 col-md-6 q-pa-sm"
                        />
                    <q-input
                        filled
                        v-model="email"
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
                        :value="mobile"
                        label="Mobile"
                        class="col-12 col-md-6 q-pa-sm"
                        disable
                    />

                    <q-input
                        v-model="description"
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
export default {
    name: "Profile",
    data() {
        return {
            pro: {

            },
            name: null,
            email: null,
            password: null,
            cover_img: '',
            profile_img: '',
            mobile: null,
            description: null
        }
    },
    mounted() {
        let pro = this.$store.getters["pro/getPro"]
        this.pro = pro
    },
    computed: {
        current_pro: {
            get() {
                return this.pro
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

        async handleSubmit() {

        }
    }
}
</script>

<style lang="scss">
.c-file-selector-btn {
    .fs-droppable{

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
