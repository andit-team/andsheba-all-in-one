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

                <q-btn flat no-caps no-wrap class="q-ml-xs" to="/agent/dashboard">
                    <img src="https://andsheba.com/_nuxt/img/logo.0f218c1.png"/>
                </q-btn>

                <q-space v-if="!$q.screen.gt.sm"/>

                <q-space v-if="$q.screen.gt.sm"/>

                <div
                    class="q-gutter-md row items-center no-wrap q-mr-lg"
                    v-if="$q.screen.gt.sm"
                >
                    <q-btn-dropdown flat icon="language" olor="grey-8">
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
                    <q-btn round flat>
                        <q-avatar size="26px">
                            <img :src="profile.thumb_image || 'https://www.w3schools.com/w3images/avatar2.png'"/>
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
                        <q-breadcrumbs-el icon="home"/>
                        <q-breadcrumbs-el
                            label="Agent"
                            icon="person"
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
                    <q-card class="bg-grey-2" style="overflow: hidden;">
                        <q-card-section class="row justify-center">
                            <q-avatar size="100px">
                                <img
                                    :src="profile.thumb_image || 'https://www.w3schools.com/w3images/avatar2.png'"
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
                                <q-item clickable v-ripple v-for="menu in menuItems"  :key="menu.route" :to="menu.route">
                                    <q-item-section avatar>
                                        <q-icon :name="menu.icon"/>
                                    </q-item-section>
                                    <q-item-section>{{ menu.title }}</q-item-section>
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
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-md-7 col-sm-12 col-xs-12">
                    <!-- <router-view/> -->
                    <transition name="fade">
                        <router-view/>
                    </transition>
                </div>
            </div>
        </q-page-container>
    </q-layout>
</template>

<script>
import {Cookies} from "quasar";
import io from "socket.io-client"
import { mapState } from 'vuex'
import { Notify } from 'quasar'
var data = { soundurl : 'http://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3'}
export default {
    name: "AgentLayout",
    data() {
        return {
            leftDrawerOpen: false,
            menuItems:[
                    {
                    title:'Dashboard',
                    icon:'dashboard',
                    route:'/agent/dashboard'
                    },
                    {
                    title:'My Services',
                    icon:'design_services',
                    route:'/agent/services'
                    },
                    {
                    title:'Order List',
                    icon:'far fa-calendar-check',
                    route:'/agent/orders'
                    },
                    {
                    title:'Profile',
                    icon:'person',
                    route:'/agent/profile'
                    },
                    {
                    title:'Wallet',
                    icon:'fas fa-wallet',
                    route:'/agent/wallet'
                    },
                    {
                    title:'Plans',
                    icon:'far fa-calendar-alt',
                    route:'/agent/plan'
                    },
                ]
        };
    },

    async created() {
        let response = await this.$store.dispatch('agent/fetchAgent')
        if (response.error === true) {
            await this.$router.push('/agent/login')
        }
    },
    methods: {
        handleLogout() {
            Cookies.remove('andsheba_token');
            this.$router.push('/agent/login')
        },
        setupSocket (){
            const token = Cookies.get('andsheba_token')


            if (token && !this.socket) {
            const newSocket = io(process.env.SOCKET_URL, {
                query: {
                token: Cookies.get('andsheba_token'),
                },
            });

            newSocket.on("disconnect", () => {
                this.$store.commit('auth/setSocket',null)
                setTimeout(setupSocket, 3000);
                console.log("Socket Connection Failed")
            });

            newSocket.on("connect", () => {
                console.log("%cSocket Connected","color: green; font-size: 20px");
            });

            newSocket.on("order_get_by_agent", (data) => {
                console.log(4324)
                //let id = data.data._id
                //let self = this
                //this.$store.dispatch('service/pushServices',data)
                this.playSound()
                
                //Alert
                this.$q.notify({
                progress: true,
                message: 'New Order Request in your Area',
                color: 'primary',
                position:'top-right',
                multiLine: true,
                avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
                actions: [
                { label: 'Check', color: 'yellow', handler: () => { /* ... */ } }
                ]
            })
            });
            }
        },
        playSound () {
        var audio = new Audio(data.soundurl);
        audio.play();
        },
    },
    computed: {
        ...mapState({
                agentProfile: state => state.agent.agent,
                socket: state => state.auth.socket
            }),  
        profile: {
                get() { return this.agentProfile }
            },
    },
    mounted() {
        this.setupSocket()
    },
};
</script>

<style scoped>
.q-router-link--active {
    color: white;
    background: #26a69a;
    font-size: large;
    /* border-right: 4px solid #505359; */
    transition: all .5s ease;
}

.q-router-link--active:after {
    width: 50px;
    transform: rotate(44deg);
    content: "";
    height: 100%;
    top: 0;
    position: absolute;
    right: -36px;
    background: #f5f5f5;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .55s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  transition: all .55s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>