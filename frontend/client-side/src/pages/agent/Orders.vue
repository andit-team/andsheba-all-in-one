<template>
    <div>
        <div class="text-h5 q-mx-lg q-mb-lg">Bookings in my Area</div>
        <q-tabs
            v-model="tab"
            dense
            class="text-grey q-ma-sm"
            active-color="primary"
            indicator-color="primary"
            align="left"
            narrow-indicator
        >
            <q-tab name="accepted" :label="`Accepted ( ${accepted} )`"   class="text-green"/>
            <q-tab name="pending" :label="`Pending ( ${pending} )`" class="text-warning" />
            <q-tab name="completed" :label="`Completed ( ${completed} )`" class="text-gray"/>
            <q-tab name="rejected" :label="`Rejected ( ${rejected} )`" class="text-red"/>
            <q-tab name="cancelled" :label="`Cancelled ( ${cancelled} )`" class="text-orange"/>
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="accepted">
               <div class="row">
                   <div v-for="(order,index) in orders" :key="index"  class="col-xs-12 col-sm-12 col-md-12">
                       <AgentBookingsCard :order="order" v-if="(order.status === 'accepted') || (order.status === 'accepted')" status="accepted"/>
                   </div>
               </div>
            </q-tab-panel>

            <q-tab-panel name="pending">
                <q-tab-panel name="active">
                    <div class="row">
                        <div v-for="(order,index) in orders" :key="index"  class="col-xs-12 col-sm-12 col-md-12">
                            <AgentBookingsCard :order="order" v-if="order.status === 'pending'" status="pending"/>
                        </div>
                    </div>
                </q-tab-panel>
            </q-tab-panel>

            <q-tab-panel name="completed">
                <q-tab-panel name="active">
                    <div class="row">
                        <div v-for="(order,index) in orders" :key="index"  class="col-xs-12 col-sm-12 col-md-12">
                            <AgentBookingsCard :order="order" v-if="order.status === 'completed'" status="completed"/>
                        </div>
                    </div>
                </q-tab-panel>
            </q-tab-panel>
            
            <q-tab-panel name="rejected">
                <q-tab-panel name="active">
                    <div class="row">
                        <div v-for="(order,index) in orders" :key="index"  class="col-xs-12 col-sm-12 col-md-12">
                            <AgentBookingsCard :order="order" v-if="order.status === 'rejected'" status="rejected"/>
                        </div>
                    </div>
                </q-tab-panel>
            </q-tab-panel>
            
            <q-tab-panel name="cancelled">
                <q-tab-panel name="active">
                    <div class="row">
                        <div v-for="(order,index) in orders" :key="index"  class="col-xs-12 col-sm-12 col-md-12">
                            <AgentBookingsCard :order="order" v-if="order.status === 'cancelled'" status="cancelled"/>
                        </div>
                    </div>
                </q-tab-panel>
            </q-tab-panel>
        </q-tab-panels>
    </div>
</template>

<script>
import AgentBookingsCard from "components/common/AgentBookingsCard"
import { mapState } from 'vuex'
export default {
name: "Orders",
    components: {AgentBookingsCard},
    data () {
        return {
            tab: 'active',
            ratingModel: 3,
        }
    },
    async created() {
        await this.$store.dispatch('agent/fetchOrders')
    },
    computed: {
        ...mapState({
                orders: state => state.agent.orders
            }),  
        accepted: {
                get() {
                    return this.orders.filter(order => order.status == 'accepted' || order.status == 'accepted').length
                }
            },
        pending: {
            get() {
                return this.orders.filter(order => order.status == 'pending').length
            }
        },
        completed: {
            get() {
                return this.orders.filter(order => order.status == 'completed').length
            }
        },
        rejected: {
            get() {
                return this.orders.filter(order => order.status == 'rejected').length
            }
        },
        cancelled: {
            get() {
                return this.orders.filter(order => order.status == 'cancelled').length
            }
        },
         
    },mounted() {
    },
}
</script>

<style lang="scss" scoped>

</style>
