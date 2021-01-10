<template>
    <div v-if="order">
        <div class="text-h5 q-ma-lg">Order Details</div>
        <div class="text-h6 q-mt-lg q-mx-lg"><span class="text-weight-regular">Service Name:</span> {{order.service.title}}</div>
<!--        <div class="text-h6 q-mt-xs q-mx-lg"><span class="text-weight-regular">Customer Name:</span> {{order.customer.name}}</div>-->
        <div class="row">
            <div class="col-12 col-md-8" style="font-size: 18px">
                <div class="q-mx-lg q-my-md" v-for="question in order.answered_questions">
                    <div class="q-my-sm">Q: <span>{{question.title}}</span></div>
                    <div class="q-my-sm"><span>A: </span><span v-for="(answer, index) in question.answers"><span v-if="index > 0">, </span>{{answer.answer_title_or_unit}}</span></div>
                </div>
                <div class="q-ma-lg" v-if="order.images.length > 0">
                    <h6 class="q-ma-none">Images</h6>
                    <div class="row q-my-lg">
                        <div v-for="(url,index) in order.images" v-bind:key="index" class="col-xs-12 col-sm-12 col-md-6 col-lg-3 q-pr-md q-my-md">
                            <q-img
                                :src="url"
                                spinner-color="white"
                                style="height: 120px;width: 150px"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 q-pa-lg">
                <q-card class="my-card">
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

                    <q-card-actions>
                        <div class="text-h6">Total: <span> {{memo.total}} BDT</span></div>
                        <q-space/>
                        <q-separator vertical/>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
        <div class="q-ma-lg" v-if="order && !order.approved_by_customer">
            <q-btn class="q-mr-md q-px-sm bg-primary text-white no-shadow" @click="()=>handleStatus('accepted')">Accept</q-btn>
            <q-btn class="q-mr-md q-px-sm text-danger no-shadow" @click="()=>handleStatus('cancelled')">Cancel</q-btn>
        </div>
    </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
    name: "OrderDetails",

    created() {
        if(this.$route.query.id) {
            this.$store.dispatch('customer/fetchOrder', this.$route.query.id )
        } else {
            this.$router.push('/user/order')
        }
    },
    computed: {
        order: {
            get() {
                return this.$store.getters["customer/getOrder"]
            }
        },
        memo: {
            get() {
                let list = []
                let total = 0
                this.order.answered_questions.map(question => {
                    if(question.question_type !== "text") {
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
        async handleStatus(status) {
            const result = await this.$store.dispatch('customer/updateOrder', {_id: this.order._id, status: status})
            if (result.error === true) {
                await Swal.fire('Error', result.msg, 'error')
            } else {
                await Swal.fire('Success', 'Service Accepted Successfully', 'success')
            }
        }
    }
}
</script>

<style lang="scss">
.c-small-input {
    .q-field__control {
        height: 38px !important;
    }
}
</style>