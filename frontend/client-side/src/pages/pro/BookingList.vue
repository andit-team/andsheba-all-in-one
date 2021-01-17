<template>
    <div>
        <div class="text-h5 q-ma-lg">Booking List</div>
        <q-tabs
            v-model="tab"
            @input="handleStatus"
            dense
            class="text-grey q-ma-sm"
            active-color="primary"
            indicator-color="primary"
            align="left"
            narrow-indicator
        >
            <q-tab name="all" :label="`All Bookings`" />
            <q-tab name="pending" :label="`Pending Bookings`" />
            <q-tab name="accepted" :label="`Active Bookings`" />
            <q-tab name="completed" :label="`Completed Bookings`"/>
            <q-tab name="cancelled" :label="`Cancelled Bookings`"/>
            <q-tab name="rejected" :label="`Rejected Bookings`"/>
        </q-tabs>

        <div class="text-right q-mr-lg q-mt-lg text-primary">Total {{orders.length}} Booking</div>

        <OrderCard v-for="(order, index) in orders" :order="order" :key="index"/>

    </div>
</template>

<script>
import OrderCard from "components/pro/OrderCard";
export default {
name: "BookingList",
    components: {OrderCard},
    data() {
        return {
            tab: 'all'
        }
    },
    created() {
        this.$store.dispatch('pro/fetchOrders')
    },
    computed: {
        orders: {
            get() {
                return this.$store.getters["pro/getOrders"]
            }
        },
        tableStatus: {
            get() {
                status = status == 'all' ? '' : status
            }
        }
    },
    methods: {
        handleStatus(status) {
            status = status == 'all' ? '' : status
            this.$store.commit('pro/setOrdersStatus', status)
            this.$store.commit('pro/setOrders',[])
            this.$store.dispatch('pro/fetchOrders', status)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
