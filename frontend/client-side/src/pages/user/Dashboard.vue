<template>
    <div class="q-ma-lg">
        <div class="text-h5 q-ma-md">Dashboard</div>
        <div class="row q-ma-md full-width" v-if="dashboard">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <DashboardCards title="Orders" :value="dashboard.orderCount" bg-color="#ff0080" link="/user/orders"/>
            </div>
        </div>
    </div>

</template>

<script>
import DashboardCards from "components/dashboard/DashboardCards";
export default {
    name: "Dashboard",
    components: {DashboardCards},

    created() {
        this.$store.dispatch('customer/fetchDashboard')
    },
    computed: {
        user: {
            get() {
                return this.$store.getters["customer/getCustomer"]
            }
        },
        dashboard: {
            get() {
                return this.$store.getters["customer/getDashboard"]
            }
        }
    },

}
</script>

<style lang="scss" scoped>

</style>
