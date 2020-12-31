<template>
    <div class="most_popular_section">
        <div class="container">
            <div class="row">
                <div class="heading q-pa-md col-md-6 col-sm-12 col-xs-12">
                    <div class="bg-image">
                        <q-img src="/img/dotted-bg.png"/>
                    </div>
                    <div class="title">Featured Categories</div>
                    <span>What do you need to find?</span>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12 relative-position" v-bind:class="{'q-pa-md': $q.screen.gt.sm}">
                    <div class="view-all q-mt-sm">
                        <div class="text-h2 text-right">
                            <a href="#!">View All <i class="fas fa-angle-right"></i></a>
                        </div>
                        <span>Featured Categories</span>
                    </div>
                </div>
            </div>

            <div class="row justify-around" v-bind:class="{'q-pa-md': !$q.screen.gt.sm}">
                <div class="col-12 col-md-4 q-pa-md" v-for="(category, index) in categories" :key="index">
                    <q-card class="my-card">
                        <q-img :src="category.image" height="250px"/>
                        <q-btn
                            unelevated
                            rounded
                            icon="fiber_manual_record"
                            class="absolute"
                            color="white" text-color="black" :label="category.name"
                            style="top: 30px; left: 12px; transform: translateY(-50%);color:black"
                        />

                        <q-btn
                            flat
                            icon="chat"
                            class="absolute"
                            color="white"  label="8"
                            style="bottom: -5px; right: 12px; transform: translateY(-50%);color:black"
                        />
                    </q-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FeaturedCategories",
    props: ["categories"]
}
</script>

<style lang="scss" scoped>
.most_popular_section {
    background: #fff;
    padding: 40px 0 90px 0;
    .container {
        position: relative;
        .heading {
            .bg-image {
                width: 140px;
                height: 140px;
                position: absolute;
                opacity: .4;
                margin-left: -50px;
                @media (max-width: 885px) {
                    margin-left: -15px;
                }
            }
            .title {
                font-size: 34px;
                color: #2c3038;
                font-weight: bold;
                padding: 30px 0 10px 0;
                opacity: 1;
                @media (max-width: 885px) {
                    font-size: 28px;
                    margin-left: 15px;
                }
            }
            span {
                font-size: 18px;
                color: #858585;
                padding: 0;
                @media (max-width: 885px) {
                    font-size: 16px;
                    margin-left: 15px;
                    display: block;
                }
            }
        }
        .view-all {
            a {
                font-size: 18px;
                color: #171717;
                text-decoration: none;
            }

            span {
                color: rgba(44, 48, 57, .15);
                font-size: 40px;
                font-weight: 600;
                display: block;
                text-align: right;
                @media (max-width: 885px) {
                    display: none !important;
                }
            }

            @media (max-width: 885px) {
                .text-right {
                    text-align: left !important;
                    margin-left: 30px;
                }
            }
        }
    }
}
</style>


<style lang="scss" scoped>
.category-tag {
    background: #d9c504;
    color: #fff;
    padding: 5px;
    border-radius: 13px;
}
.card-action {
    margin-top: 15px;
    .edit {
        cursor: pointer;
        color: #36a745;
        i {
            position: absolute;
            margin-top: 2px;
        }
        span {
            margin-left: 20px;
        }
        &:hover {
            color: #13711f;
        }
    }
    .delete {
        cursor: pointer;
        position: absolute;
        right: 13px;
        color: #de3544;
        i {
            position: absolute;
            margin-top: 2px;
        }
        span {
            margin-left: 18px;
        }
        &:hover {
            color: #850d18;
        }
    }
}
</style>