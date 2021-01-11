<template>
    <div>
        <q-card class="my-card q-ma-lg no-shadow" style="border: 1px solid rgba(80,83,89, .5) !important;">
            <div class="row">
                <div class="col-md-12 col-lg-9">
                    <q-card-section :horizontal="$q.screen.gt.sm" class="q-pa-lg">
                        <q-img
                            class="col-5"
                            :src="order.service.thumb_img"
                        />

                        <q-card-section :class="$q.screen.gt.sm ? 'q-ma-md' : 'q-mt-lg q-px-none'">
                            <a class="heading">{{ order.service.title }}</a>
                            <q-list class="details-table">
                                <li>
                                    <span>Booking Date</span>
                                    <span>{{ new Date(order.createdAt).toDateString() }}
                            <span class="status pending" v-if="order.status === 'pending'">Pending</span>
                            <span class="status accepted" v-if="order.status === 'accepted'">Accepted</span>
                            <span class="status completed" v-if="order.status === 'completed'">Completed</span>
                            <span class="status in-progress" v-if="order.status === 'in-progress'">In Progress</span>
                            <span class="status rejected" v-if="order.status === 'cancelled'">Cancelled</span>
                            <span class="status rejected" v-if="order.status === 'rejected'">Rejected</span>
                        </span>
                                </li>
                                <li>
                                    <span>Booking time</span>
                                    <span>13:00:00 - 14:00:00</span>
                                </li>
                                <li>
                                    <span>Amount</span>
                                    <span>BDT {{ order.total }}</span>
                                </li>
                                <li>
                                    <span>Location</span>
                                    <span>Khulna</span>
                                </li>
                                <li>
                                    <span>Provider</span>
                                    <span>
                            <img class="avatar-img rounded-circle" :src="order.pro.thumb_image">
                            <span>{{ order.pro.name }}</span>
                        </span>
                                </li>
                            </q-list>
                        </q-card-section>
                    </q-card-section>
                </div>
                <div class="col-12 col-md-6 col-lg-3 q-pa-lg">
                    <div class="block">
                        <a v-if="order.status === 'pending'" @click="handleCancel"
                           class="text-negative q-px-md q-py-sm q-mx-sm cursor-pointer"
                           :class="$q.screen.gt.md ? 'float-right' : ''"
                           style="background: #fce3e7;font-size: 12px;text-transform: capitalize;border-radius: 4px">Cancel</a>
                        <a @click="() => {this.details = true}"
                           class="text-primary q-px-md q-py-sm cursor-pointer"
                           :class="$q.screen.gt.md ? 'float-right' : ''"
                           style="background: #e2f6f6;font-size: 12px;text-transform: capitalize;border-radius: 4px">View</a>
                    </div>
                    <div class="q-mr-sm" style="margin-top: 40px"
                         v-if="order.status === 'pending' && !order.approved_by_customer">
                        <a @click="() => {this.details = true}"
                           class="cursor-pointer" :class="$q.screen.gt.md ? 'float-right' : ''"
                           style="background: #e2f6ee; color: #38af48;font-size: 12px;text-transform: capitalize;border-radius: 4px; padding: 8px 20px">Accept
                            new Offer</a>
                    </div>
                </div>
            </div>
        </q-card>


        <q-dialog v-model="details">
            <q-card class="details-dialog">
                <q-card-section>
                    <div class="text-h6">Order Details</div>
                    <div class="absolute cursor-pointer" @click="() => {this.details = false}" style="right: 20px; top: 15px; font-size: 22px"><q-icon name="fas fa-times"/></div>
                </q-card-section>

                <div class="row">
                    <div class="col-12 col-sm-6">

                        <div class="q-mx-lg q-my-md" v-for="question in order.answered_questions">
                            <div class="q-my-sm">Q: <span>{{question.title}}</span></div>
                            <div class="q-my-sm"><span>A: </span><span v-for="(answer, index) in question.answers"><span v-if="index > 0">, </span>{{answer.answer_title_or_unit}}</span></div>
                        </div>

                        <div class="q-ma-lg" v-if="order.images.length > 0">
                            <h6 class="q-ma-none">Images</h6>
                            <div class="row q-my-lg">
                                <div v-for="(url,index) in order.images" v-bind:key="index" class="col-12 col-md-6 q-pr-md q-my-md">
                                    <q-img
                                        :src="url"
                                        spinner-color="white"
                                        style="height: 120px;width: 150px"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 col-sm-6 q-pa-md">
                        <q-card class="my-card no-shadow" style="border: 1px solid rgba(0,0,0, .3)">
                            <q-card-section class="bg-primary text-white">
                                <div class="text-h6 text-center">Customer Budget</div>
                            </q-card-section>
                            <q-markup-table>
                                <tbody>
                                <tr v-for="(item, index) in memo.list">
                                    <td class="text-left">{{ (index+1) + ". " + item.answer_title_or_unit}}</td>
                                    <td class="text-right">{{item.price}}</td>
                                </tr>
                                </tbody>
                            </q-markup-table>
                            <q-separator/>

                            <q-card-actions align="right">
                                <div class="text-h6">Total: <span> {{memo.total}} BDT</span></div>
                            </q-card-actions>
                        </q-card>
                    </div>
                </div>
                <q-card-actions align="right" class="q-mb-lg q-mx-lg" v-if="order.status === 'pending' && !order.approved_by_customer">
                    <a @click="handleCancel" class="text-negative q-px-md q-py-sm q-mx-sm cursor-pointer" style="background: #fce3e7;font-size: 12px;text-transform: capitalize;border-radius: 4px">Cancel</a>
                    <a @click="handleAccept" class="text-primary q-px-md q-py-sm cursor-pointer" style="background: #e2f6f6;font-size: 12px;text-transform: capitalize;border-radius: 4px">Accept</a>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
    name: "OrderCard",
    props: ['order'],
    data() {
        return {
            details: false
        }
    },
    computed: {
        user: {
            get() {
                return this.$store.getters["customer/getCustomer"]
            }
        },
        memo: {
            get() {
                let list = []
                let total = 0
                this.order.answered_questions.map(question => {
                    if (question.question_type !== "text") {
                        question.answers.map(answer => {
                            list.push(answer)
                            total += answer.price
                        })
                    }
                })
                return {
                    list,
                    total
                };
            }
        }
    },
    methods: {
        async handleCancel() {
            this.details = false
            let {isConfirmed} = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            })
            if (isConfirmed) {
                const result = await this.$store.dispatch('customer/updateOrder', {
                    _id: this.order._id,
                    status: 'cancelled'
                })
                if (result.error === true) {
                    await Swal.fire('Error', result.msg, 'error')
                } else {
                    await Swal.fire('Success', 'Service Canceled Successfully', 'success')
                }
            }
        },
        async handleAccept() {
            this.details = false
            const result = await this.$store.dispatch('customer/updateOrder', {_id: this.order._id, status: 'accepted'})
            if (result.error === true) {
                await Swal.fire('Error', result.msg, 'error')
            } else {
                await Swal.fire('Success', 'Service Accepted Successfully', 'success')
                this.$store.commit('customer/setOrders',[])
                await this.$store.dispatch('customer/fetchOrders')
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

.details-dialog {
    min-width: 800px;
    @media (max-width: 820px) {
        min-width: 95%;
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

            span.accepted {
                background: #41b9ac;
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
