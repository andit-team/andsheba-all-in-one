<template>
    <div>
        <div class="column justify-center content-center items-center q-mt-xl">
            <q-img v-if="$q.screen.gt.sm"
                   width="10%"
                   :src="service.thumb_img"

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
                        <div class="text-h6">
                            {{index+1}}. {{question.title}}
                            <q-input class="inline-block q-ml-md" input-class="text-right" square dense outlined mask="#######" v-if="question.question_type == 'unit' && question.answers.length > 0" v-model="answers[index].unit" style="width: 80px; height: 40px"/>
                            <p class="inline-block q-ml-md" v-if="question.question_type == 'unit' && question.answers.length > 0">{{answers[index].unit_type}}</p>
                        </div>
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
                                        :multiple="false"
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
            service_images: [],
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
                            if(this.service.questions[i].question_type == 'unit') {
                                if(question.unit.length > 0) {
                                    let unit = +question.unit
                                    let price = unit *  this.service.questions[i].answers[0].price

                                    list.push({
                                        _id: this.service.questions[i].answers[0]._id,
                                        title: question.unit_type + " x " + unit,
                                        price: price
                                    })
                                    total = total + price
                                }
                            } else {
                                question.forEach((option, j) => {
                                    if(option === true) {
                                        list.push({
                                            _id: this.service.questions[i].answers[j]._id,
                                            title: this.service.questions[i].answers[j].answer_title_or_unit,
                                            price: this.service.questions[i].answers[j].price
                                        })
                                        total = total + this.service.questions[i].answers[j].price
                                    }
                                })
                            }
                        } else {
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
                    return {
                        list: list,
                        total: total
                    }
                }
            }
        }
    },
    methods: {
        async handleServiceImagesChange(files) {
            let length = files.length
            for(let i=0;i<length;i++) {
                let url = await this.handleFileUpload(files[i])
                console.log(url);
                if(url !== null) {
                    this.service_images.push(url)
                }
            }
            console.log(this.service_images)

        },

        async handleFileUpload(file) {
            const data = new FormData()
            data.append('image', file)
            let url = "https://api.imgbb.com/1/upload?key=dbe026b9378783fd76fb76f8dea82edb";
            const res = await this.$axios.post(url, data, {})
            if (res.data.success) {
                return res.data.data.image.url
            }
            return null
        },
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
