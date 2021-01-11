<template>
    <div>
        <div class="text-h5 q-ma-lg">Order List</div>
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
            <q-tab name="all" :label="`All Orders`" />
            <q-tab name="pending" :label="`Pending Orders`" />
            <q-tab name="offers" :label="`New Offers`" />
            <q-tab name="accepted" :label="`Active Orders`" />
            <q-tab name="completed" :label="`Completed Orders`"/>
            <q-tab name="cancelled" :label="`Cancelled Orders`"/>
            <q-tab name="rejected" :label="`Rejected Orders`"/>
        </q-tabs>

        <div v-if="tab !== 'offers'" class="text-right q-mr-lg text-primary">Total {{orders.length}} Orders</div>
        <div v-if="tab === 'offers'" class="text-right q-mr-lg text-primary">Total {{offers.length}} Offers</div>


        <OrderCard v-if="tab !== 'offers'" v-for="order in orders" :order="order"/>
        <OrderCard v-if="tab === 'offers'" v-for="order in offers" :order="order"/>
    </div>
</template>

<script>
import OrderCard from "components/customer/OrderCard";

export default {
    name: "Bookings",
    components: {OrderCard},
    data() {
        return {
            tab: 'all'
        }
    },
    created() {
        this.$store.dispatch("customer/fetchOrders")
    },
    computed: {
        orders: {
            get() {
                return this.$store.getters["customer/getOrders"]
            }
        },
        offers: {
            get() {
                return this.orders.filter(order => !order.approved_by_customer)
            }
        }
    },
    methods: {
        handleStatus(status) {
            status = status == 'all' ? '' : status
            status = status == 'offers' ? 'pending' : status
            this.$store.commit('customer/setOrdersStatus', status)
            this.$store.commit('customer/setOrders',[])
            this.$store.dispatch('customer/fetchOrders')
        }
    }

}
</script>

<style scoped>

</style>