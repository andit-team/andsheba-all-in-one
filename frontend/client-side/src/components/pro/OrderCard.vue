<template>
    <q-card class="my-card q-ma-lg no-shadow" style="border: 1px solid rgba(80,83,89, .5) !important;">
        <div class="row">
            <div class="col-md-12 col-lg-9">
                <q-card-section :horizontal="$q.screen.gt.sm" class="q-pa-lg">
                    <q-img
                        class="col-5"
                        :src="order.service.thumb_img"
                    />

                    <q-card-section :class="$q.screen.gt.sm ? 'q-ma-md' : 'q-mt-lg q-px-none'">
                        <a class="heading">{{order.service.title}}</a>
                        <q-list class="details-table">
                            <li>
                                <span>Booking Date</span>
                                <span>{{new Date(order.createdAt).toDateString()}}
                            <span class="status pending" v-if="order.status === 'pending'">Pending</span>
                            <span class="status completed" v-if="order.status === 'completed'">Completed</span>
                            <span class="status in-progress" v-if="order.status === 'in-progress'">In Progress</span>
                            <span class="status rejected" v-if="order.status === 'rejected'">Rejected</span>
                        </span>
                            </li>
                            <li>
                                <span>Booking time</span>
                                <span>13:00:00 - 14:00:00</span>
                            </li>
                            <li>
                                <span>Amount</span>
                                <span>BDT {{order.total}}</span>
                            </li>
                            <li>
                                <span>Location</span>
                                <span>Khulna</span>
                            </li>
                            <li>
                                <span>User</span>
                                <span>
                            <img class="avatar-img rounded-circle" :src="order.customer.thumb_image">
                            <span>{{order.customer.name}}</span>
                        </span>
                            </li>
                        </q-list>
                    </q-card-section>
                </q-card-section>
            </div>
            <div class="col-12 col-md-6 col-lg-3 q-pa-lg">
                <div v-if="order.status === 'pending'">
                    <a @click="() => this.$router.push('')" class="text-negative q-px-md q-py-sm q-mx-sm cursor-pointer" :class="$q.screen.gt.md ? 'float-right' : ''" style="background: #fce3e7;font-size: 12px;text-transform: capitalize;border-radius: 4px">Cancel</a>
                    <a @click="() => this.$router.push('/pro/order_details?id=' + order._id)" class="text-primary q-px-md q-py-sm cursor-pointer" :class="$q.screen.gt.md ? 'float-right' : ''" style="background: #e2f6f6;font-size: 12px;text-transform: capitalize;border-radius: 4px">Accept</a>
                </div>
            </div>
        </div>
    </q-card>
</template>

<script>
export default {
    name: "OrderCard",
    props: ['order'],
    computed: {
        user: {
            get() {
                return this.$store.getters["customer/getCustomer"]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.heading {
    font-size: 22px;
    margin-top: -20px;
    font-weight: bolder;
    display: block;
    cursor: pointer;
    &:hover {
        color: #2b76d2;
    }
}
.details-table {
    list-style: none;
    li {
        padding: 2px;
        span {
            font-size: 15px;
            width: 120px;
            display: inline-block;
            font-weight: 500;
        }
        span:last-child {
            width: auto;
            color: #8a8d92;
            font-weight: 700;
            img {
                width: 28px;
                height: 28px;
                position: absolute;
                border-radius: 28px;
            }
            span {
                margin-left: 32px;
                margin-top: 2px;
            }
            span.status {
                margin: 0 5px;
                display: inline-block;
                padding: 1px 12px;
                font-size: 12px;
                font-weight: 400;
                border-radius: 10px;
                color: #fff;
            }
            span.pending {
                background: #f9c10a;
            }
            span.completed {
                background: #36a745;
            }
            span.in-progress {
                background: #307bff;
            }
            span.rejected {
                background: #dc3545;
            }
        }
    }
}
</style>
