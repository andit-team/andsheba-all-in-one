<template>
    <div class="row q-ma-lg service-card">
        <q-img
            :src="service.thumb_img" class="thumb-img"
        />
        <div class="service-content">
            <div class="text-h6 q-mb-xs" style="color: #242f51;">{{ service.title }}</div>
            <p>
                <span class="top-pro">
                    <i class="fas fa-crown"/>শীর্ষ সেবা প্রদানকারী
                </span>
                <span class="review-rating">
                    ৫.০<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </span>
                ২৫ রিভিউ
            </p>
            <div class="height-demand"><q-icon name="fas fa-trophy"></q-icon> &nbsp;Highest Demand</div>
        </div>


    </div>
</template>

<script>
export default {
    name: "ServiceCard",
    props: ['service']
}
</script>

<style lang="scss" scoped>
.service-card {
    min-height: 300px;
    padding-left: 20px;
    position: relative;
    border-bottom: .5px solid rgba(97, 97, 97, .4);
    .thumb-img {
        width: 180px;
        height: 180px;
        border-radius: 10px;
        position: absolute;
    }
    .service-content {
        margin-left: 220px;

        .height-demand {
            padding: 8px 36px;
            border-radius: 20px;
            font-size: 14px;
            background: #e9f1fe;
            color: #48505b;
            font-weight: 400;
        }
    }
}
</style>