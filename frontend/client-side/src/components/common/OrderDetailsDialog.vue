<template>
    <div v-if="order">
        <q-card>
            <q-card-section>
                <div class="text-h6 text-center">{{order.service.title}}</div>
            </q-card-section>
            
            <q-card-section>
                <div style="font-size: 18px">
                    <div class="q-mx-lg q-my-md" v-for="(question,index) in order.answered_questions" :key="index">
                        <div class="q-my-sm">Q: <span>{{question.title}}</span></div>
                        <div class="q-my-sm"><span>A: </span><span v-for="(answer, index) in question.answers" :key="index"><span v-if="index > 0">, </span>{{answer.answer_title_or_unit}}</span></div>
                    </div>

                    <!-- <div class="q-ma-lg" v-if="order.images.length > 0">
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
                    </div> -->
                </div>
            </q-card-section>
            
            <q-card-section>
                <div class="q-pa-sm">
                    <q-card class="my-card">
                        <q-card-section class="bg-primary text-white">
                            <div class="text-h6 text-center">Customer Budget</div>
                        </q-card-section>

                        <q-markup-table>
                            <tbody>
                            <tr v-for="(item, index) in memo.list" :key="index">
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
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
    name: "OrderDetailsCard",
    data() {
        return {
            proposal: false,
        }
    },
    computed: {
        order: {
            get() {
                return this.$store.getters["agent/getOrder"]
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