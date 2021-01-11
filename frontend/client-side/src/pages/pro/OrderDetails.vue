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
        <div class="q-ma-lg" v-if="order.status == 'pending' && !order.approved_by_pro">
            <q-btn class="q-mr-md q-px-sm bg-primary text-white no-shadow" @click="handleAccept">Accept</q-btn>
            <q-btn class="text-primary no-shadow" @click="() => {this.proposal = true}">Send Proposal</q-btn>
        </div>

        <q-dialog v-model="proposal">
            <q-card class="q-px-lg q-pt-lg">
                <q-card class="my-card" style="min-width: 400px">
                    <q-card-section class="bg-primary text-white">
                        <div class="text-h6 text-center">Create additional Offer</div>
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

                    <q-card-actions class="bg-primary text-white justify-end" style="display: grid">
                        <div class="text-h6 q-mr-md">Total: <span> {{memo.total}} BDT</span></div>
                        <q-space/>
                        <q-separator vertical/>
                    </q-card-actions>

                    <q-card-section>
                        <p class="text-center" style="font-size: 18px">If you are unable to accept the order,you can send a offer to client with additional amount</p>
                        <div class="row">
                            <span class="col-6 q-pa-sm" style="font-size: 20px">Enter purpose</span>
                            <span class="col-6 q-pa-sm" style="font-size: 20px">Enter Amount</span>
                        </div>
                        <div class="row" v-for="item in additional">
                            <q-input outlined class="col-6 q-pa-sm c-small-input" v-model="item.answer_title_or_unit"/>
                            <q-input outlined class="col-6 q-pa-sm c-small-input" mask="#######" v-model="item.price"/>
                        </div>
                        <div class="text-right q-mt-md q-mr-lg">
                            <q-item class="cursor-pointer inline-block" style="font-size: 16px;color: #389fd9"
                                    clickable
                                    @click="addAdditional"> + Add
                            </q-item>
                        </div>
                        <div class="text-center">
                            <q-btn @click="handleSendProposal" class="q-ma-md q-px-sm bg-primary text-white no-shadow">Send Offer</q-btn>
                            <q-btn @click="() => {this.proposal = false}" class="q-ma-md q-px-sm text-danger no-shadow">Cancel</q-btn>
                        </div>
                    </q-card-section>
                </q-card>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
    name: "OrderDetails",
    data() {
        return {
            proposal: false,
            additional: [
                {
                    answer_title_or_unit: null,
                    price: null
                }
            ]
        }
    },

    created() {
        if(this.$route.query.id) {
            this.$store.dispatch('pro/fetchOrder', this.$route.query.id )
        } else {
            this.$router.push('/pro/booking_list')
        }
    },
    computed: {
        order: {
            get() {
                return this.$store.getters["pro/getOrder"]
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
        addAdditional() {
            this.additional.push({
                answer_title_or_unit: null,
                price: null
            })
        },
        async handleAccept() {
            const result = await this.$store.dispatch('pro/updateOrder', {_id: this.order._id, status: 'accepted'})
            if (result.error === true) {
                await Swal.fire('Error', result.msg, 'error')
            } else {
                await Swal.fire('Success', 'Service Accepted Successfully', 'success')
            }
        },
        async handleSendProposal() {
            let total = 0
            this.proposal = false
            let questions = JSON.parse(JSON.stringify(this.order.answered_questions))
            questions.push({
                title: 'Additional',
                question_type: 'additional',
                answers: this.additional
            })
            questions.map(question => {
                question.answers.map(answer => {
                    total += +answer.price
                })
            })
            console.log(total)
            let order = {
                _id: this.order._id,
                status: "accepted",
                proposal_flag: true,
                total: total,
                answered_questions: questions
            }
            let result = await this.$store.dispatch('pro/updateOrder', order)
            if (result.error === true) {
                await Swal.fire('Error', result.msg, 'error')
            } else {
                await Swal.fire('Success', 'Order proposal send', 'success')
                await this.$store.dispatch('pro/fetchOrder', this.$route.query.id )
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