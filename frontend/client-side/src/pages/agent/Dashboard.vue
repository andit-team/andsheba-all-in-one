<template>
    <div class="q-mx-md">
        <div class="row full-width">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <DashboardCards title="Bookings" bg-color="#ff0080" :value="dashboard.orderCount" link="/agent/orders" />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <DashboardCards title="Services" :value="dashboard.serviceCount" bg-color="#323031" link="/agent/services"/>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <DashboardCards title="Notification" :value="8" bg-color="#d9c504"/>
            </div>
        </div>
    </div>

</template>

<script>
import DashboardCards from "components/dashboard/DashboardCards";
export default {
    name: "DashboardAgent",
    components: {DashboardCards},
    async created() {
        await this.$store.dispatch('agent/fetchDashboard')
    },
    computed: {
        dashboard: {
            get() {
                return this.$store.getters["agent/getDashboard"]
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
