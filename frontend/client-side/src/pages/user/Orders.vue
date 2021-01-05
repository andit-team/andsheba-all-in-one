<template>
    <div>
        <div class="text-h5 q-ma-lg">Order List</div>
        <OrderCard v-for="order in orders" :order="order"/>
    </div>
</template>

<script>
import OrderCard from "components/customer/OrderCard";

export default {
    name: "Bookings",
    components: {OrderCard},
    created() {
        this.$store.dispatch("customer/fetchOrders")
    },
    computed: {
        orders: {
            get() {
                return this.$store.getters["customer/getOrders"]
            }
        }
    }

}
</script>

<style scoped>

</style>