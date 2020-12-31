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
                    <q-btn flat color="grey-8" icon="search" to="service">
                        সেবা খুজুন
                    </q-btn
                    >
                    <q-btn-dropdown flat icon="web" olor="grey-8" label="ভাষা">
                        <q-list>
                            <q-item clickable v-close-popup>
                                <q-item-section>
                                    <q-item-label>বাংলা</q-item-label>
                                </q-item-section>
                            </q-item>

                            <q-item clickable v-close-popup>
                                <q-item-section>
                                    <q-item-label>ইংলিশ</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-btn-dropdown>
                    <q-btn round flat>
                        <q-avatar size="26px">
                            <img src="https://avatars3.githubusercontent.com/u/38374712?s=400&v=4"/>
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
                        src="https://img.freepik.com/free-vector/abstract-technology-background-science-connecting-technology_42705-96.jpg?size=626&ext=jpg"
                        style="height: 150px"
                    >
                        <div class="absolute-bottom bg-transparent">
                            <q-avatar size="56px" class="q-mb-sm">
                                <img src="https://avatars3.githubusercontent.com/u/38374712?s=400&v=4"/>
                            </q-avatar>
                            <div class="text-weight-bold">{{ profile.name }}</div>
                        </div>
                    </q-img>

                    <q-item clickable v-ripple to="/agent/dashboard">
                        <q-item-section avatar>
                            <q-icon name="dashboard"/>
                        </q-item-section>
                        <q-item-section>Dashboard</q-item-section>
                    </q-item>

                    <q-item clickable v-ripple to="/agent/services" >
                        <q-item-section avatar>
                            <q-icon name="design_services"/>
                        </q-item-section>
                        <q-item-section>My Services</q-item-section>
                    </q-item>

                    <q-item clickable v-ripple to="/agent/orders">
                        <q-item-section avatar>
                            <q-icon name="far fa-calendar-check"/>
                        </q-item-section>
                        <q-item-section>Order List</q-item-section>
                    </q-item>


                    <q-item clickable v-ripple to="/agent/profile" >
                        <q-item-section avatar>
                            <q-icon name="person"/>
                        </q-item-section>
                        <q-item-section>Profile</q-item-section>
                    </q-item>

                    <q-item clickable v-ripple to="/agent/wallet">
                        <q-item-section avatar>
                            <q-icon name="fas fa-file-invoice-dollar"/>
                        </q-item-section>
                        <q-item-section>Wallet</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple to="/agent/plan">
                        <q-item-section avatar>
                            <q-icon name="far fa-calendar-alt"/>
                        </q-item-section>
                        <q-item-section>Plan</q-item-section>
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
                            label="Pro"
                            icon="person"
                            to="/user"
                        />
                    </q-breadcrumbs>
                </q-toolbar>
            </div>
            <div
                :class="[
          'row justify-center q-gutter-sm q-mt-xl'
        ]"
            >
                <div class="col-md-2" v-if="$q.screen.gt.sm">
                    <q-card class="bg-grey-2">
                        <q-card-section class="row justify-center">
                            <q-avatar size="100px">
                                <img
                                    src="https://avatars3.githubusercontent.com/u/38374712?s=400&v=4"
                                />
                            </q-avatar>
                        </q-card-section>

                        <q-card-section
                            class="column justify-center items-center q-pt-none"
                        >
                            <div class="text-h6">
                                {{ profile.name }}
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
                                <q-item clickable v-ripple to="/agent" :active="active">
                                    <q-item-section avatar>
                                        <q-icon name="dashboard"/>
                                    </q-item-section>
                                    <q-item-section>Dashboard</q-item-section>
                                </q-item>

                                <q-item clickable v-ripple to="/agent/services" :active="active">
                                    <q-item-section avatar>
                                        <q-icon name="design_services"/>
                                    </q-item-section>
                                    <q-item-section>My Services</q-item-section>
                                </q-item>

                                <q-item clickable v-ripple to="/agent/orders" :active="active">
                                    <q-item-section avatar>
                                        <q-icon name="far fa-calendar-check"/>
                                    </q-item-section>
                                    <q-item-section>Order List</q-item-section>
                                </q-item>


                                <q-item clickable v-ripple to="/agent/profile" :active="active">
                                    <q-item-section avatar>
                                        <q-icon name="person"/>
                                    </q-item-section>
                                    <q-item-section>Profile</q-item-section>
                                </q-item>

                                <q-item clickable v-ripple to="/agent/wallet" :active="active">
                                    <q-item-section avatar>
                                        <q-icon name="fas fa-file-invoice-dollar"/>
                                    </q-item-section>
                                    <q-item-section>Wallet</q-item-section>
                                </q-item>
                                <q-item clickable v-ripple to="/agent/plan" :active="active">
                                    <q-item-section avatar>
                                        <q-icon name="far fa-calendar-alt"/>
                                    </q-item-section>
                                    <q-item-section>Plans</q-item-section>
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
import {fabYoutube} from "@quasar/extras/fontawesome-v5";
import {Cookies} from "quasar";

export default {
    name: "AgentLayout",
    data() {
        return {
            profile: null,
            leftDrawerOpen: false,
            search: "",
            active: true,
        };
    },

    async created() {
        this.fabYoutube = fabYoutube;
        let response = await this.$store.dispatch('agent/fetchAgent')
        if (response.error === true) {
            await this.$router.push('/agent/login')
        }
        this.profile = response.data
    },

    methods: {
        handleLogout() {
            Cookies.remove('token');
            this.$router.push('/agent/login')
        }
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
