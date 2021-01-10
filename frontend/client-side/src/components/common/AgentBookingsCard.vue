<template>
    <q-card class="my-card q-mb-lg">
        <div class="row">
            <div class="col-md-12">
                <q-card-section horizontal class="q-pa-md">
                    <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" class="col-2"/>
                    <q-card-section>
                        <q-list>
                            <q-item>
                                <q-item-section>
                                    <q-item-label class="text-weight-bold text-h6">{{order.service.title}}</q-item-label>
                                    <q-item-label caption>by {{order.pro.name}}</q-item-label>
                                </q-item-section>

                                <q-item-section side top>
                                    <q-badge color="secondary" style="font-size:15px" class="q-py-xs" v-if="status === 'pending'">Pending</q-badge>
                                    <q-badge color="green" style="font-size:15px" class="q-py-xs" v-if="status === 'completed'">Completed</q-badge>
                                    <q-badge color="primary" style="font-size:15px" class="q-py-xs" v-if="status === 'accepted'">In Progress</q-badge>
                                    <q-badge color="red" style="font-size:15px" class="q-py-xs" v-if="status === 'rejected'">Rejected</q-badge>
                                    <q-badge color="orange" style="font-size:15px" class="q-py-xs"  v-if="status === 'cancelled'">Cancelled</q-badge>
                                </q-item-section>
                            </q-item>
                            <q-item>
                                <q-item-section avatar>
                                    <q-icon color="primary" name="event" />
                                </q-item-section>
                                <q-item-section>23 Jul 2020 </q-item-section>

                                <q-item-section avatar side>
                                    <q-icon color="primary" name="schedule" />
                                </q-item-section>
                                <q-item-section side>10:00 AM - 06:00 PM</q-item-section>
                            </q-item>
                            <q-item>
                                <q-item-section avatar>
                                    <q-icon color="primary" name="map" />
                                </q-item-section>
                                <q-item-section>32 Choto Mirzapur Khulna </q-item-section>
                                <q-item-section side><q-badge color="orange" style="font-size:15px" class="q-py-xs">${{order.total}}</q-badge></q-item-section>
                            </q-item>
                            <q-item class="row q-gutter-md">
                                <q-btn round color="black" icon="visibility">
                                    <q-tooltip content-class="bg-black" :offset="[10, 10]">
                                    View Details
                                    </q-tooltip>
                                </q-btn>
                                <q-btn round color="primary" icon="message">
                                    <q-tooltip content-class="bg-primary" :offset="[10, 10]">
                                    Chat Now
                                    </q-tooltip>
                                </q-btn>
                                <q-btn round color="green" icon="done">
                                    <q-tooltip content-class="bg-green" :offset="[10, 10]">
                                    Set as Done
                                    </q-tooltip>
                                </q-btn>
                                <q-btn round color="red" icon="clear">
                                    <q-tooltip content-class="bg-red" :offset="[10, 10]">
                                    Cancel This
                                    </q-tooltip>
                                </q-btn>
                            </q-item>
                        </q-list>
                    </q-card-section>
                    <q-separator inset vertical />
                    <q-card-section>
                        <q-list>
                            <q-item-label header>Customer Details</q-item-label>
                            <q-separator inset />
                            <q-item>
                                <q-item-section top avatar>
                                <q-avatar>
                                    <img :src="order.pro.thumb_image !== ''?order.customer.thumb_image:'https://cdn.quasar.dev/img/boy-avatar.png'">
                                </q-avatar>
                                </q-item-section>

                                <q-item-section>
                                <q-item-label class="text-weight-bold">{{order.customer.name}}</q-item-label>
                                <q-item-label caption>32 Choto Mirzapur</q-item-label>
                                </q-item-section>

                                <q-item-section side top>
                                    <q-badge color="secondary" style="font-size:15px"><q-icon name="call" size="15px" class="q-ml-xs"/>&nbsp;<a :href="`tel:${order.customer.mobile}`" style="text-decoration: none;color:#fff">{{order.customer.mobile}}</a></q-badge>
                                </q-item-section>
                            </q-item>
                            
                            <q-item-label header>Provider Details</q-item-label>
                            <q-separator inset />
                            <q-item>
                                <q-item-section top avatar>
                                <q-avatar>
                                    <img :src="order.pro.thumb_image !== ''?order.pro.thumb_image:'https://cdn.quasar.dev/img/boy-avatar.png'">
                                </q-avatar>
                                </q-item-section>

                                <q-item-section>
                                <q-item-label class="text-weight-bold">{{order.pro.name}}</q-item-label>
                                <q-item-label caption>32 Choto Mirzapur</q-item-label>
                                </q-item-section>

                                <q-item-section side top>
                                    <q-badge color="secondary" style="font-size:15px"><q-icon name="call" size="15px" class="q-ml-xs"/>&nbsp;<a :href="`tel:${order.pro.mobile}`" style="text-decoration: none;color:#fff">{{order.pro.mobile}}</a></q-badge>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>

                </q-card-section>
            </div>
        </div>
    </q-card>
</template>

<script>
export default {
    name: "AgentBookingsCard",
    props: ['status','order'],
    mounted() {
        console.log(this.order)
    },
}
</script>

<style lang="scss" scoped>
.heading {
    font-size: 22px;
    margin-top: -20px;
    font-weight: bolder;
    display: block;
    cursor: pointer;
}

.my-card {
    border: 2px solid darkgray; 
    &:hover {
        background: #ffffff3d;
    }
}
</style>
