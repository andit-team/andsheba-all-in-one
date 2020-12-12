<template>
    <div>
        <div class="column justify-center content-center items-center q-mt-xl">
            <q-img v-if="$q.screen.gt.sm"
                   width="10%"
                   src="https://avatars3.githubusercontent.com/u/38374712?s=400&v=4"
            />
            <div :class="[$q.screen.gt.sm?'text-h4':'text-h5 text-center']">
                Tell us about your project for more accurate cost estimation
            </div>
            <div class="text-h6 text-gray" v-if="$q.screen.gt.sm">
                A little info will help the pro understand your project
            </div>
        </div>
        <div class="row q-my-xl q-px-lg justify-center q-gutter-md">
            <div class="col-md-7 col-sm-6 col-xs-12">
                <q-card v-for="(question, index) in service.questions" :key="index" flat bordered class="q-mb-md">
                    <q-card-section>
                        <div class="text-h6">{{index+1}}. {{question.title}}</div>
                    </q-card-section>
                    <q-card-section v-if="question.question_type == 'checkbox'" class="q-gutter-sm row">
                        <q-checkbox v-for="(option, index1) in question.answers" v-model="answers[index][index1]" :label="option.answer_title_or_unit"/>
                    </q-card-section>
                    <q-card-section v-if="question.question_type == 'radio'" class="q-gutter-sm row">
                        <q-radio v-for="(option, index1) in question.answers" v-model="answers[index]" :val="option.answer_title_or_unit" :label="option.answer_title_or_unit" />
                    </q-card-section>
                    <q-card-section v-if="question.question_type == 'text'" class="q-gutter-sm row">
                        <q-input v-model="answers[index]" class="full-width" outlined type="textarea"/>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                <q-card class="my-card">
                    <q-card-section class="bg-primary text-white">
                        <div class="text-h6 text-center">Cost Calculation</div>
                    </q-card-section>

                    <q-markup-table>
                        <tbody>
                            <tr v-for="(item, index) in cart.list">
                                <td class="text-left">{{ (index+1) + ". " + item.title}}</td>
                                <td class="text-right">{{item.price}}</td>
                            </tr>
                        </tbody>
                    </q-markup-table>
                    <q-separator/>

                    <q-card-actions>
                        <div class="text-h6">Total: <span> {{cart.total}} TK</span></div>
                        <q-space/>
                        <q-separator vertical/>
                        <q-btn flat class="bg-primary" color="white">
                            Place Order
                        </q-btn>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            slide: 1,
            kitchen: false,
            washroom: true,
            hall: true,
            living: false,
            pool: true,
            questions: null,
        };
    },
    created() {
        this.$store.dispatch('service/fetchService', this.$route.query.id)
    },
    computed: {
        service: {
            get() {
                return this.$store.getters["service/getService"]
            }
        },
        answers: {
            get() {
                if(this.questions === null) {
                    this.questions = this.$store.getters["service/getAnswers"]
                }
                return this.questions
            },
            set(value) {
                console.log(value)
            }
        },
        cart: {
            get() {
                if(this.questions === null) {
                    return {
                        list: [],
                        total: 0
                    }
                } else {
                    let list = []
                    let total = 0
                    this.questions.forEach((question, i) => {
                        if(typeof question === 'object') {
                            question.forEach((option, j) => {
                                if(option === true) {
                                    list.push({
                                        _id: this.service.questions[i].answers[j]._id,
                                        title: this.service.questions[i].answers[j].answer_title_or_unit,
                                        price: this.service.questions[i].answers[j].price
                                    })
                                    console.log(this.service.questions[i].answers[j])
                                    total = total + this.service.questions[i].answers[j].price
                                }
                            })
                        } else {
                            console.log(question)
                            this.service.questions[i].answers.forEach(option => {
                                if(question === option.answer_title_or_unit) {
                                    list.push({
                                        _id: option._id,
                                        title: option.answer_title_or_unit,
                                        price: option.price
                                    })
                                    total += option.price
                                }
                            })

                        }
                    })
                    console.log(list)
                    return {
                        list: list,
                        total: total
                    }
                }
            }
        }
    }
};
</script>
