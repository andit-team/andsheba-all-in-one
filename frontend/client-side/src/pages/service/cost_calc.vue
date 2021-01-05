<template>
    <div>
        <div class="column justify-center content-center items-center q-mt-xl">
            <q-img v-if="$q.screen.gt.sm"
                   width="10%"
                   :src="service ? service.thumb_img : ''"

            />
            <div :class="[$q.screen.gt.sm?'text-h4':'text-h5 text-center']">
                Tell us about your project for more accurate cost estimation
            </div>
            <div class="text-h6 text-gray" v-if="$q.screen.gt.sm">
                A little info will help the pro understand your project
            </div>
        </div>
        <div class="row q-my-xl q-px-lg justify-center q-gutter-md">
            <div class="col-md-7 col-sm-6 col-xs-12" v-if="service">
                <q-card v-for="(question, index) in service.questions" :key="index" flat bordered class="q-mb-md">
                    <q-card-section>
                        <div class="text-h6">
                            {{index+1}}. {{question.title}}
                            <q-input class="inline-block q-ml-md" input-class="text-right" square dense outlined mask="#######" v-if="question.question_type == 'unit' && question.answers.length > 0" v-model="answers[index].unit" style="width: 80px; height: 40px"/>
                            <p class="inline-block q-ml-md" v-if="question.question_type == 'unit' && question.answers.length > 0">{{answers[index].unit_type}}</p>
                        </div>
                    </q-card-section>
                    <q-card-section v-if="question.question_type == 'checkbox'" class="q-gutter-sm row">
                        <q-checkbox v-for="(option, index1) in question.answers" v-model="answers[index].answers[index1].value" :label="option.answer_title_or_unit"/>
                    </q-card-section>
                    <q-card-section v-if="question.question_type == 'radio'" class="q-gutter-sm row">
                        <q-radio v-for="(option, index1) in question.answers" v-model="answers[index].value" :val="option._id" :label="option.answer_title_or_unit" />
                    </q-card-section>
                    <q-card-section v-if="question.question_type == 'text'" class="q-gutter-sm row">
                        <q-input v-model="answers[index].value" class="full-width" outlined type="textarea"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card q-mx-sm q-my-xl">
                    <q-card-section class="q-pa-lg">
                        <div class="block q-mt-lg q-mb-md">
                            <h6 class="q-ma-none">Upload Images to describe your service</h6>
                            <div class="row q-my-lg">
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 q-pa-md" >
                                    <file-selector
                                        :height="200"
                                        class="file-selector"
                                        accept-extensions=".jpg,.svg,.png,.jpeg"
                                        :multiple="true"
                                        :max-file-size="5 * 1024 * 1024"
                                        @changed="handleServiceImagesChange"
                                    >
                                        <q-icon name="far fa-images" style="font-size: 34px"/>
                                        <p class="q-mt-sm" style="font-size: 18px">Browse Images</p>
                                    </file-selector>
                                </div>
                                <div v-for="url in service_images" class="col-xs-12 col-sm-12 col-md-6 col-lg-4 q-pa-md">
                                    <q-img
                                        :src="url"
                                        spinner-color="white"
                                        style="height: 200px;width: 300px"
                                    />
                                </div>
                            </div>
                        </div>
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
                        <q-btn flat class="bg-primary" @click="handleOrder" color="white">
                            Place Order
                        </q-btn>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </div>
</template>
<script>
import Swal from "sweetalert2";
import {LocalStorage} from "quasar";

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
            service_images: [],
            order: {}
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
                    this.questions = JSON.parse ( JSON.stringify ( this.$store.getters["service/getAnswers"] ) )
                }
                return this.questions
            }
        },
        cart: {
            get() {
                this.$store.dispatch('service/updateAnswersLocal', {
                    service_id: this.service ? this.service._id : '',
                    answers: this.questions
                })

                let order = {
                    service_id: this.service ? this.service._id : '',
                    answered_questions: []
                }
                if(this.questions === null) {
                    return {
                        list: [],
                        total: 0
                    }
                } else {
                    let list = []
                    let total = 0
                    this.questions.forEach((question, i) => {
                        let answered_questions = {
                            _id: this.service.questions[i]._id,
                            title: this.service.questions[i].title,
                            question_type: this.service.questions[i].question_type,
                            answers: []
                        }
                        if(this.service.questions[i].question_type === "radio") {
                            this.service.questions[i].answers.map(answer => {
                                if(question.value === answer._id) {
                                    list.push({
                                        _id: answer._id,
                                        title: answer.answer_title_or_unit,
                                        price: answer.price
                                    })
                                    answered_questions.answers.push({
                                        _id: answer._id,
                                        answer_title_or_unit: answer.answer_title_or_unit,
                                        price: answer.price
                                    })
                                    total += answer.price
                                }
                            })
                        } else if(this.service.questions[i].question_type === "unit") {
                            if(question.unit.length > 0) {
                                let unit = +question.unit
                                let price = unit *  this.service.questions[i].answers[0].price
                                list.push({
                                    _id: this.service.questions[i].answers[0]._id,
                                    title: question.unit_type + " x " + unit,
                                    price: price
                                })
                                total = total + price
                                answered_questions.answers = [{
                                    _id: this.service.questions[i].answers[0]._id,
                                    answer_title_or_unit: question.unit_type + " x " + unit,
                                    price: price
                                }]
                            }
                        } else if(this.service.questions[i].question_type === "checkbox") {
                            question.answers.map((answer, j) => {
                                if(answer.value === true) {
                                    list.push({
                                        _id: this.service.questions[i].answers[j]._id,
                                        title: this.service.questions[i].answers[j].answer_title_or_unit,
                                        price: this.service.questions[i].answers[j].price
                                    })
                                    answered_questions.answers.push({
                                        _id: this.service.questions[i].answers[j]._id,
                                        answer_title_or_unit: this.service.questions[i].answers[j].answer_title_or_unit,
                                        price: this.service.questions[i].answers[j].price
                                    })
                                    total += this.service.questions[i].answers[j].price
                                }
                            })
                        } else if (this.service.questions[i].question_type === "text") {
                            if(question.value.length > 0) {
                                answered_questions.answers = [{
                                    _id: question._id,
                                    answer_title_or_unit: question.value,
                                    price: 0
                                }]
                            }
                        }
                        if(answered_questions.answers.length > 0) {
                            order.answered_questions.push(answered_questions)
                        }
                    })
                    this.order = {
                        ...order,
                        total,
                        images: this.service_images
                    }
                    return {
                        list: list,
                        total: total
                    }
                }
            }
        },
        user: {
            get() {
                return this.$store.getters["customer/getCustomer"]
            }
        }
    },
    methods: {
        async handleServiceImagesChange(files) {
            let length = files.length
            for(let i=0;i<length;i++) {
                let fileReader = new FileReader()
                fileReader.onload = e => {
                    this.service_images.push(e.currentTarget.result)
                }
                fileReader.readAsDataURL(files[i])
            }
        },
        async handleOrder() {
            if(!this.user.isVerified) {
                await Swal.fire('Warning', "Please log in", 'warning')
                LocalStorage.set('last_url', this.$route.fullPath)
                await this.$router.push('/login')
            } else {
                this.$swal_loading()
                let result = await this.$store.dispatch('customer/placeOrder', this.order)
                if (result.error) {
                    await Swal.fire('Error', result.msg, 'error')
                } else {
                    await Swal.fire('Success', 'Successfully Order Placed', 'success')
                    await this.$router.push('/user/bookings')
                }
            }
        }

    }
};
</script>

<style lang="scss">
.fs-droppable {
    border: 1px dashed #389fd9;
    text-align: center;
    .fs-btn-select {
        width: 100%;
        height: 100%;
        padding-top: 17%;
        cursor: pointer;
    }
}
</style>
