<template>
    <q-layout view="hHh lpR fFf">
        <q-header :class="[$q.screen.gt.sm ? 'q-pa-md' : 'q-pa-sm', 'text-grey-8']" height-hint="58" style="background: #f7f8f9">
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
                    <img src="https://andsheba.com/_nuxt/img/logo.0f218c1.png">
                </q-btn>

                <q-space v-if="!$q.screen.gt.sm"/>

<!--                <div :class="['YL__toolbar-input-container row', $q.screen.gt.sm ? 'q-ml-lg' : 'q-ml-xs fit' ]">-->
<!--                    <q-input dense outlined square v-model="search" placeholder="Search services..."-->
<!--                             class="bg-white col"/>-->
<!--                    <q-btn class="YL__toolbar-input-btn" color="grey-3" text-color="grey-8" icon="search" unelevated/>-->
<!--                </div>-->
                <q-space v-if="$q.screen.gt.sm"/>

                <div class="q-gutter-md row items-center no-wrap q-mr-lg" v-if="$q.screen.gt.sm">

                    <q-btn v-if="!customer.isVerified" flat color="grey-8" to="/pro/register">
                        <q-icon name="fas fa-user-cog" class="q-mr-sm q-mb-xs" style="font-size: 18px"/>{{ $t('become_pro') }}
                    </q-btn>
                    <q-btn v-if="!customer.isVerified" flat color="grey-8" to="/agent/register">
                        <q-icon name="fas fa-user-tie" class="q-mr-sm q-mb-xs" style="font-size: 18px"/>{{ $t('become_agent') }}
                    </q-btn>

                    <q-btn v-if="!customer.isVerified" flat color="grey-8" icon="person" to="/login"> {{$t('login')}}</q-btn>
                        <q-select
                        v-model="lang"
                        :options="langOptions"
                        dense
                        borderless
                        emit-value
                        map-options
                        options-dense
                        style="min-width: 150px"
                    >
                        <template v-slot:prepend>
                            <q-icon name="language" />
                        </template>
                    </q-select>
                    <q-btn v-if="customer.isVerified" round flat to="/user/dashboard">
                        <q-avatar size="26px">
                            <img :src="customer.thumb_image" v-if="customer.thumb_image && customer.thumb_image.length > 5"/>
                            <img v-else alt="Male User icon" src="https://img.icons8.com/fluent/344/user-male-circle.png" lazy="loaded">
                        </q-avatar>
                        <q-tooltip>Account</q-tooltip>

                    </q-btn>
                    <q-btn v-if="customer.isVerified" flat color="grey-8" icon="exit_to_app" @click="handleLogout">  &nbsp;Logout</q-btn>
                </div>
            </q-toolbar>
        </q-header>
        <q-drawer
            v-model="leftDrawerOpen"
            v-if="leftDrawerOpen"
            bordered
            content-class="bg-grey-2"
            :width="240"
        >
            <q-scroll-area class="fit">
                <q-list padding>

                    <q-item v-if="!customer.isVerified" to="/login" v-ripple clickable>
                        <q-item-section avatar>
                            <q-icon color="grey" name="person"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label> Login </q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item v-if="customer.isVerified" clickable v-ripple to="/user/dashboard">
                        <q-item-section avatar>
                            <q-avatar size="26px">
                                <img src="https://avatars3.githubusercontent.com/u/38374712?s=400&v=4">
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Account</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item v-if="customer.isVerified" @click="handleLogout" v-ripple clickable>
                        <q-item-section avatar>
                            <q-icon color="grey" name="exit_to_app"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label> &nbsp;Logout </q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item v-if="!customer.isVerified" to="/pro/register" v-ripple clickable>
                        <q-item-section avatar>
                            <q-icon color="grey" name="fas fa-user-cog"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label> Become a Pro </q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item v-if="!customer.isVerified" to="/agent/register" v-ripple clickable>
                        <q-item-section avatar>
                            <q-icon color="grey" name="fas fa-user-tie"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label> Become an Agent </q-item-label>
                        </q-item-section>
                    </q-item>

                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
import {fabYoutube} from "@quasar/extras/fontawesome-v5";
import {Cookies} from "quasar";

export default {
    name: 'MyLayout',
    data() {
        return {
            leftDrawerOpen: false,
            search: '',
            withLogin: [
                {icon: 'dashboard', text: 'Dashboard', route: '/'},
                {icon: 'person', text: 'Profile', route: '/profile'},
                {icon: 'mail', text: 'Inbox', route: '/inbox'},
                {icon: 'alarm', text: 'Notification', route: '/notification'},
            ],
            withOutLogin: [
                {icon: 'search', text: 'Search', route: '/service'},
                {icon: 'add', text: 'Registration', route: '/register'},
                {icon: 'lock', text: 'Login', route: '/login'},
                {icon: 'web', text: 'Language', route: '/'}
            ],
            pro: [
                {icon: 'add', text: 'Add Service', route: '/'},
                {icon: 'flag', text: 'Order history', route: '/'},
                {icon: 'help', text: 'Payments', route: '/'},
                {icon: 'money', text: 'Accounts', route: '/'}
            ],
            lang: this.$i18n.locale,
            langOptions: [
                { value: 'en-us', label: 'English' },
                { value: 'de', label: 'German' },
                { value: 'bn', label: 'Bangla' },
            ]
        }
    },
    created() {
        this.$store.dispatch('customer/fetchCustomer');
    },
    watch: {
        lang(lang) {
        this.$i18n.locale = lang
        }
    },
    computed: {
        customer: {
            get() {
                return this.$store.getters["customer/getCustomer"]
            }
        }
    },
    methods: {
        handleLogout() {
            Cookies.remove('andsheba_token');
            window.location.reload()
        }
    }
}
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
