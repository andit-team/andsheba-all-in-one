<template>
    <div class="pro_banner">
        <div class="container q-pa-md">
            <p class="text-h6" style="margin-bottom: 5px">We are spreading Day by Day</p>
            <p class="text-h4 q-mb-sm">Join our friendly community</p>
            <p style="max-width: 600px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu scelerisque eros. Cras a tellus sit amet tortor bibendum elementum vel in odio.</p>
            <q-btn class="q-mt-sm q-pa-sm pro_button" to="/pro/register">Become a pro</q-btn>
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
        padding: 75px 0;
        background-image: url('/img/cta-pro.jpg');
    }
    .container {
        position: relative;
        color: #fff;
    }
    .pro_button {
        background: #2c3039;
    }

</style>
