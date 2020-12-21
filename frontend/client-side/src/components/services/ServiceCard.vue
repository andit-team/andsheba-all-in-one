<template>
    <div class="row q-ma-lg service-card">
        <a :href="'/#/service/single?id=' + service._id">
            <q-img
                :src="service.thumb_img" class="thumb-img"
            />
        </a>
        <a class="service-content" :href="'/#/service/single?id=' + service._id">
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
            <p class="hire-on-andsheba"><i class="fas fa-trophy"></i>২২ বার ভাড়া করা হয়েছে</p>
            <p class="pro-area"><i class="fas fa-map-marker-alt"></i> {{service.address.address}}</p>
            <p class="online-now"><i class="fas fa-circle"></i> Online</p>
            <p>সময় এবং খরচ বাঁচিয়ে চুল কে করে তুলুন আরও স্বাস্থ্যবান ও প্রাণবন্ত।</p>
        </a>

        <div class="pro-right-part">
<!--            <a class="cost-box" href="pro-profile.html"><span class="consult">BDT ১৪৫/পার-->
<!--                                        মূল্য</span> আনুমানিক ব্যয়</a>-->
            <q-item clickable class="profile-btn" href="pro-profile.html">See Profile</q-item>
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
        width: 150px;
        height: 150px;
        border-radius: 10px;
        position: absolute;
        @media (max-width: 885px) {

        }
    }
    .service-content {
        margin-left: 190px;
        text-decoration: none;
        color: #48505b;
        @media (max-width: 885px) {
            margin-left: 0;
            margin-top: 190px;
            margin-bottom: 80px;
        }

        i {
            margin-right: 5px;
        }

        .height-demand {
            padding: 8px 36px;
            border-radius: 20px;
            margin-bottom: 15px;
            font-size: 14px;
            background: #e9f1fe;
            font-weight: 400;
            width: 220px;
            text-align: center;
        }

        .top-pro {
            i {
                background: #2b76d2;
                color: #f7f8f9;
                padding: 8px;
                border-radius: 15px;
            }
            margin-right: 10px;
        }

        .review-rating {
            i {
                margin-right: 0;
                padding-left: 5px;
                color: #d9c504;
            }
            margin-right: 10px;
        }

        .online-now {
            i {
                color: #06a606;
                font-size: 10px;
                border-radius: 50%;
                animation: pulse 3s infinite;
            }
        }
    }


    .pro-right-part {
        float: right;
        position: relative;
        margin-left: auto;
        .profile-btn {
            position: absolute !important;
            bottom: 15px;
            right: 10px;
            color: #fff;
            background-color: #2b76d2;
            outline: none;
            padding: 10px 24px;
            border-radius: 5px;
            align-items: center;
            font-weight: 700;
            text-transform: inherit;
            cursor: pointer;
            font-size: 14px;
            width: 120px;
            @media (max-width: 885px) {
                left: 15px;
                bottom: 15px;
            }
        }
        @media (max-width: 885px) {
            position: initial;
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        }

        70% {
            transform: scale(1);
            box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
        }

        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }
}
</style>