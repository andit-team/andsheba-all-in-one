<template>
    <div class="q-ma-lg">
        <div class="text-h5 q-ma-md">Dashboard</div>
        <div class="row q-ma-md full-width" v-if="dashboard">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <DashboardCards title="Bookings" :value="dashboard.orderCount" bg-color="#ff0080" link="/pro/booking_list"/>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <DashboardCards title="Services" :value="dashboard.serviceCount" bg-color="#323031" link="/pro/services"/>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardCards from "components/dashboard/DashboardCards";
export default {
    name: "Dashboard",
    components: {DashboardCards},
    async created() {
        await this.$store.dispatch('pro/fetchDashboard')
    },
    computed: {
        dashboard: {
            get() {
                return this.$store.getters["pro/getDashboard"]
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
