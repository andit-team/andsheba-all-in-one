<template>
    <div class="q-ma-lg">
        <div class="text-h5 q-ma-md">Dashboard</div>
        <div class="row q-ma-md full-width">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <DashboardCards title="Bookings" value="245" bg-color="#ff0080"/>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <DashboardCards title="Services" value="66" bg-color="#323031"/>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <DashboardCards title="Notification" value="8" bg-color="#d9c504"/>
            </div>
        </div>
    </div>

</template>

<script>
import DashboardCards from "components/dashboard/DashboardCards";
export default {
    name: "Dashboard",
    components: {DashboardCards},
    data() {
      return {
          pro: null
      }
    },


    async created() {
        // let response = await this.$store.dispatch('pro/fetchPro')
        // if(response.error === true ) {
        //     await this.$router.push('/login')
        // }
        // this.pro = response.data
    },

}
</script>

<style lang="scss" scoped>

</style>
