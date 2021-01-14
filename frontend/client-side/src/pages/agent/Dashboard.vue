<template>
    <div class="q-mx-md">
        <div class="row q-mb-md">
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

        <div class="row q-mb-md">
            <div class="col-xs-12 col-sm-12">
                <apex-column-charts-basic></apex-column-charts-basic>
            </div>
        </div>

        <!-- <div class="row q-gutter-md">
            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <apex-simple-pie-chart></apex-simple-pie-chart>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <apex-radar></apex-radar>
            </div>
        </div> -->
        
        
    </div>

</template>

<script>
import { Loading } from 'quasar'
import DashboardCards from "components/dashboard/DashboardCards";
export default {
    name: "DashboardAgent",
    components: {
        DashboardCards,
        ApexSimplePieChart: () => import('components/charts/ApexSimplePieChart'),
        ApexColumnChartsBasic: () => import('components/charts/ApexColumnChartsBasic'),
        ApexRadar: () => import('components/charts/ApexRadar'),
        },
    async created() {
        Loading.show()
        await this.$store.dispatch('agent/fetchDashboard')
    },
    computed: {
        dashboard: {
            get() {
                return this.$store.getters["agent/getDashboard"]
            }
        }
    },
    mounted() {
        Loading.hide()
    },
}
</script>

<style lang="scss" scoped>

</style>
