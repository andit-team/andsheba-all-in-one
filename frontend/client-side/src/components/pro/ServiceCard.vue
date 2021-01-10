<template>
    <q-card class="my-card q-ma-md">
        <q-img
        style="max-height:200px"
            :src="service.thumb_img"
            basic
        >
            <div class="absolute-bottom text-h6 bg-transparent">
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
            <div class="card-action">
                <div class="row justify-end q-px-xs">
                    <q-btn flat color="secondary" icon="visibility" :to="'/service/single?id=' + service._id" class="text-weight-bold">&nbsp; Details</q-btn>
                </div>
            </div>
        </q-card-section>
        <q-card-actions class="justify-between q-pa-md c-card-action">
            <a class="text-positive"><q-icon name="far fa-edit" style="margin-top: -3px;"/><span class="q-ml-sm">Edit</span></a>
            <a class="cursor-pointer text-negative" v-if="service.status == 'active' || service.status == 'accepted'" @click="Inactive"><q-icon name="clear"/><span class="q-ml-xs">Inactive</span></a>
            <a class="cursor-pointer text-secondary" v-if="service.status == 'inactive'" @click="Active"><q-icon name="check"/><span class="q-ml-xs">Active</span></a>
        </q-card-actions>
    </q-card>
</template>

<script>
import Swal from "sweetalert2";

export default {
    name: "ServiceCard",
    props: ['service'],
    data() {
        return {
            rating: 4,
        }
    },
    methods: {
        async Active() {
            let response = await this.$store.dispatch('pro/updateStatus', {id: this.service._id, status: 'active'})
            if(response.error) {
                await Swal.fire('Error', response.msg, 'error')
            } else {
                await Swal.fire('Success', response.msg, 'success')
                await this.$store.dispatch('pro/fetchServices')
            }
        },
        async Inactive() {
            let response = await this.$store.dispatch('pro/updateStatus', {id: this.service._id, status: 'inactive'})
            if(response.error) {
                await Swal.fire('Error', response.msg, 'error')
            } else {
                await Swal.fire('Success', response.msg, 'success')
                await this.$store.dispatch('pro/fetchServices')
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.category-tag {
    background: #d9c504;
    color: #fff;
    padding: 5px;
    border-radius: 13px;
}
.c-card-action {
    font-weight: 400;
    .q-icon {
        font-weight: 500;
        font-size: 16px;
    }
}
</style>
