<template>
    <q-card class="my-card q-ma-md">
        <q-img
            :src="service.thumb_img"
            basic
        >
            <div class="absolute-bottom text-h6 bg-transparent">
                <div class="service-user">
                    <a href="#">
                        <img src="https://avatars3.githubusercontent.com/u/38374712?s=400&v=4">
                    </a>
                </div>
            </div>
            <div class="absolute-bottom bg-transparent text-right">
                <span class="category-tag">{{service.category.name}}</span>
            </div>
        </q-img>

        <q-card-section>
            <div class="text-h6">{{service.title}}</div>
            <div class="text-subtitle2">
                <q-rating
                    v-model="rating"
                    size="1.5em"
                    color="yellow"
                    readonly
                /> ({{rating}})
            </div>
            <div class="user-info">
                <div class="row">
                    <span class="col-6 ser-contact">
                        <q-icon name="fas fa-phone mr-1"></q-icon>
                        <span style="padding-left: 5px">xxxxxxxx49</span>
                    </span>
                    <span class="col-6 ser-location text-right">
                        <span style="padding-right: 5px">Wayne, New Jersey</span>
                        <q-icon name="fas fa-map-marker-alt ml-1"></q-icon>
                    </span>
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>

<script>

export default {
    name: "ServiceCard",
    props: ['service'],
    data() {
        return {
            rating: 4
        }
    },

}
</script>

<style lang="scss" scoped>
.service-user {
    img {
        width: 30px;
        height: 30px;
        position: absolute;
        top: -10px;
        border-radius: 30px;
    }
}


.category-tag {
    background: #d9c504;
    color: #fff;
    padding: 5px;
    border-radius: 13px;
}

.user-info {
    padding-top: 20px;
    span {
        i {
            font-size: 12px;
            line-height: 26px;
            color: #171717;
            text-align: center;
            width: 27px;
            height: 27px;
            border: 1px dashed #171717;
            border-radius: 50%;
        }
        span {
            color: #555a64;
            font-size: 15px;
        }
    }
}
</style>
