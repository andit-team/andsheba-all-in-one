<template>
    <div>
        <div class="text-h5 q-ma-lg">Booking List</div>
        <q-tabs
            v-model="tab"
            dense
            class="text-grey q-ma-sm"
            active-color="primary"
            indicator-color="primary"
            align="left"
            narrow-indicator
        >
            <q-tab name="all" :label="`All Bookings ( ${orders.length} )`" />
            <q-tab name="pending" :label="`Pending Bookings ( )`" />
            <q-tab name="active" :label="`Active Bookings ( )`" />
            <q-tab name="completed" :label="`Completed Bookings ( )`"/>

        </q-tabs>

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="all">
                <OrderCard v-for="order in orders" :order="order"/>
            </q-tab-panel>
            <q-tab-panel name="pending">
                <OrderCard v-for="order in pending" :order="order"/>
            </q-tab-panel>
            <q-tab-panel name="active">
                <OrderCard v-for="order in active" :order="order"/>
            </q-tab-panel>
            <q-tab-panel name="completed">
                <OrderCard v-for="order in completed" :order="order"/>
            </q-tab-panel>
        </q-tab-panels>

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
        pending: {
            get() {
                return this.orders.filter(order => order.status == 'pending')
            }
        },
        active: {
            get() {
                return this.orders.filter(order => order.status == 'active')
            }
        },
        completed: {
            get() {
                return this.orders.filter(order => order.status == 'completed')
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
