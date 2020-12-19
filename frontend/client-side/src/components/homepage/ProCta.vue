<template>
    <div class="pro_banner">
        <div class="container">
            <p class="text-h6" style="margin-bottom: 5px">We are spreading Day by Day</p>
            <p class="text-h4 q-mb-sm text-primary">Join our friendly community</p>
            <p style="max-width: 600px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu scelerisque eros. Cras a tellus sit amet tortor bibendum elementum vel in odio.</p>
            <q-btn class="q-mt-sm q-pa-sm text-white bg-primary pro_button" to="/user/register">Become a pro</q-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProCta"
}
</script>

<style lang="scss" scoped>
    .pro_banner {
        background: #fff;
        padding: 75px 0;
    }
    .container {
        position: relative;
    }
    .pro_button {
        position: absolute;
        right: 10%;
        top: 30%;
    }

</style>
