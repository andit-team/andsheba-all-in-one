<template>
    <div>
        <div class="text-h5 q-ma-lg">Order Details</div>
    </div>
</template>

<script>
export default {
    name: "OrderDetails",
    created() {
        if(this.$route.query.id) {
            this.$store.dispatch('pro/fetchOrder', this.$route.query.id )
        } else {
            this.$router.push('/pro/booking_list')
        }
    }
}
</script>

<style scoped>

</style>