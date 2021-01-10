<template>
    <q-layout view="hHh lpR fFf">
        <q-header
            :class="[
        $q.screen.gt.sm ? 'q-pa-md' : 'q-pa-sm',
        'bg-white',
        'text-grey-8'
      ]"
            height-hint="58"
        >
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    @click="leftDrawerOpen = !leftDrawerOpen"
                    aria-label="Menu"
                    icon="menu"
                    v-if="!$q.screen.gt.sm"
                />

                <q-btn flat no-caps no-wrap class="q-ml-xs" to="/">
                    <img src="https://andsheba.com/_nuxt/img/logo.0f218c1.png"/>
                </q-btn>

                <q-space v-if="!$q.screen.gt.sm"/>

                <q-space v-if="$q.screen.gt.sm"/>

                <div
                    class="q-gutter-md row items-center no-wrap q-mr-lg"
                    v-if="$q.screen.gt.sm"
                >
                    <q-btn-dropdown flat icon="web" olor="grey-8" label="Lan">
                        <q-list>
                            <q-item clickable v-close-popup>
                                <q-item-section>
                                    <q-item-label>বাংলা</q-item-label>
                                </q-item-section>
                            </q-item>

                            <q-item clickable v-close-popup>
                                <q-item-section>
                                    <q-item-label>English</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-btn-dropdown>
                    <q-btn round flat to="/user">
                        <q-avatar size="26px">
                            <img :src="user.thumb_image" v-if="user.thumb_image && user.thumb_image.length > 5"/>
                            <img v-else alt="Male User icon" src="https://img.icons8.com/fluent/344/user-male-circle.png" lazy="loaded">
                        </q-avatar>
                        <q-tooltip>Account</q-tooltip>
                    </q-btn>
                    <q-btn flat color="grey-8" icon="exit_to_app" @click="handleLogout"> &nbsp;Logout</q-btn>
                </div>
            </q-toolbar>
        </q-header>
        <q-drawer
            v-model="leftDrawerOpen"
            v-if="leftDrawerOpen"
            show-if-above
            bordered
            content-class="bg-grey-2"
            :width="240"
        >
            <q-scroll-area class="fit">
                <q-list>
                    <q-img
                        :src="user.thumb_image"
                        style="height: 150px"
                    >
                        <div class="absolute-bottom bg-transparent">
                            <q-avatar size="56px" class="q-mb-sm">
                                <img :src="user.thumb_image"/>
                            </q-avatar>
                            <div class="text-weight-bold">{{ user.name }}</div>
                        </div>
                    </q-img>

                    <q-item clickable v-ripple to="/user/dashboard">
                        <q-item-section avatar>
                            <q-icon name="dashboard"/>
                        </q-item-section>
                        <q-item-section>Dashboard</q-item-section>
                    </q-item>

                    <q-item clickable v-ripple to="/user/orders">
                        <q-item-section avatar>
                            <q-icon name="far fa-calendar-check"/>
                        </q-item-section>
                        <q-item-section>My Orders</q-item-section>
                    </q-item>


                    <q-item clickable v-ripple to="/user/profile" >
                        <q-item-section avatar>
                            <q-icon name="person"/>
                        </q-item-section>
                        <q-item-section>Profile</q-item-section>
                    </q-item>

                    <q-item clickable v-ripple to="/user/wallet">
                        <q-item-section avatar>
                            <q-icon name="fas fa-file-invoice-dollar"/>
                        </q-item-section>
                        <q-item-section>Wallet</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple to="/user/subscription">
                        <q-item-section avatar>
                            <q-icon name="far fa-calendar-alt"/>
                        </q-item-section>
                        <q-item-section>Subscription</q-item-section>
                    </q-item>
                    <q-item
                        clickable
                        v-ripple
                        @click="handleLogout"
                    >
                        <q-item-section avatar>
                            <q-icon name="login"/>
                        </q-item-section>
                        <q-item-section>Logout</q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <div class="bg-grey-2 row justify-center">
                <q-toolbar :class="[$q.screen.gt.sm?'col-10 q-pa-xl':'col-12 q-pa-md', 'q-gutter-sm']">
                    <q-breadcrumbs>
                        <q-breadcrumbs-el icon="home" to="/"/>
                        <q-breadcrumbs-el
                            label="user"
                            icon="person"
                            to="/user"
                        />
                    </q-breadcrumbs>
                </q-toolbar>
            </div>
            <div
                :class="[
          'row justify-center q-gutter-sm'
        ]"
            >
                <div class="col-md-2" v-if="$q.screen.gt.sm">
                    <q-card class="bg-grey-2">
                        <q-card-section class="row justify-center">
                            <q-avatar size="100px">
                                <img :src="user.thumb_image" v-if="user.thumb_image && user.thumb_image.length > 5"/>
                                <img v-else alt="Male User icon" src="https://img.icons8.com/fluent/344/user-male-circle.png" lazy="loaded">
                            </q-avatar>
                        </q-card-section>

                        <q-card-section
                            class="column justify-center items-center q-pt-none"
                        >
                            <div class="text-h6">
                                {{ user.name }}
                            </div>
                            <div class="text-subtitle1">
                                750K Follower | 10 Following
                            </div>
                            <div class="text-caption text-grey">
                                shariful@gamil.com
                            </div>
                        </q-card-section>

                        <q-separator inset/>
                        <q-card-section class="column justify-center q-pa-md">
                            <q-list bordered separator>
                                <q-item clickable v-ripple to="/user" :active="active">
                                    <q-item-section avatar>
                                        <q-icon name="dashboard"/>
                                    </q-item-section>
                                    <q-item-section>Dashboard</q-item-section>
                                </q-item>

                                <q-item clickable v-ripple to="/user/orders" :active="active">
                                    <q-item-section avatar>
                                        <q-icon name="far fa-calendar-check"/>
                                    </q-item-section>
                                    <q-item-section>My Orders</q-item-section>
                                </q-item>


                                <q-item clickable v-ripple to="/user/profile" :active="active">
                                    <q-item-section avatar>
                                        <q-icon name="person"/>
                                    </q-item-section>
                                    <q-item-section>Profile</q-item-section>
                                </q-item>

                                <q-item clickable v-ripple to="/user/wallet" :active="active">
                                    <q-item-section avatar>
                                        <q-icon name="fas fa-file-invoice-dollar"/>
                                    </q-item-section>
                                    <q-item-section>Wallet</q-item-section>
                                </q-item>
                                <q-item clickable v-ripple to="/user/subscription" :active="active">
                                    <q-item-section avatar>
                                        <q-icon name="far fa-calendar-alt"/>
                                    </q-item-section>
                                    <q-item-section>Subscription</q-item-section>
                                </q-item>
                                <q-item
                                    clickable
                                    v-ripple
                                    :active="active"
                                    @click="handleLogout"
                                >
                                    <q-item-section avatar>
                                        <q-icon name="login"/>
                                    </q-item-section>
                                    <q-item-section>Logout</q-item-section>
                                </q-item>
                            </q-list>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-md-7 col-sm-12 col-xs-12">
                    <router-view/>
                </div>
            </div>
        </q-page-container>
    </q-layout>
</template>

<script>
import {Cookies} from "quasar";
import io from "socket.io-client";
let data = { sound_url : 'http://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3'}

export default {
    name: "UserLayout",
    data() {
        return {
            leftDrawerOpen: false,
            search: "",
            active: true,
        };
    },

    async created() {
        await this.$store.dispatch('customer/fetchCustomer')
        let user = this.$store.getters["customer/getCustomer"]
        if(!user.isVerified) {
            await this.$router.push('/login')
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
        handleLogout() {
            Cookies.remove('token');
            this.$store.commit('customer/setCustomer', {isVerified: false})
            this.$router.push('/')
        },
        setupSocket() {
            const token = Cookies.get('token')
            if (token && !this.socket) {
                const newSocket = io(process.env.SOCKET_URL, {
                    query: {
                        token: Cookies.get('token'),
                    },
                });
                newSocket.on("disconnect", () => {
                    setTimeout(this.setupSocket, 3000);
                    console.log("Socket Connection Failed")
                });

                newSocket.on("connect", () => {
                    console.log("Socket Connected")
                });

                newSocket.on("order_status_get_by_customer", (data) => {
                    this.playSound()
                    this.$q.notify({
                        progress: true,
                        message: 'A new booking update received',
                        color: 'primary',
                        position:'top-right',
                        multiLine: true,
                        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
                        timeout: 10000,
                        actions: [
                            { label: 'Check', color: 'yellow', handler: () => { this.$router.push(`/user/order_details?id=${data._id}`) } }
                        ]
                    })
                });

            }
        },
        playSound() {
            let audio = new Audio(data.sound_url);
            audio.play();
        },
    },
    mounted() {
        this.setupSocket()
    }
};
</script>

<style lang="sass">
.YL
    &__toolbar-input-container
        min-width: 100px
        width: 30%

    &__toolbar-input-btn
        border-radius: 0
        border-style: solid
        border-width: 1px 1px 1px 0
        border-color: rgba(0, 0, 0, .24)
        max-width: 60px
        width: 100%

    &__drawer-footer-link
        color: inherit
        text-decoration: none
        font-weight: 500
        font-size: .75rem

        &:hover
            color: #000
</style>
