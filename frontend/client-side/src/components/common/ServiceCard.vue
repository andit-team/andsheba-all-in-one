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
                    <q-btn flat color="secondary" icon="visibility" @click="serviceDetails(service._id)" v-if="role === 'agent'" class="text-weight-bold">&nbsp; Details</q-btn>
                    <q-btn flat color="secondary" icon="visibility" :to="'/service/single?id=' + service._id" v-else class="text-weight-bold">&nbsp; Details</q-btn>
                </div>
            </div>
        </q-card-section>

        <q-card-actions v-if="role !== 'agent'" class="justify-between q-pa-md c-card-action">
            <a class="text-positive"><q-icon name="far fa-edit" style="margin-top: -3px;"/><span class="q-ml-sm">Edit</span></a>
            <a class="cursor-pointer text-negative" v-if="service.status == 'active' || service.status == 'accepted'" @click="inactive"><q-icon name="clear"/><span class="q-ml-xs">Inactive</span></a>
            <a class="cursor-pointer text-secondary" v-if="service.status == 'inactive'" @click="Active"><q-icon name="check"/><span class="q-ml-xs">Active</span></a>
        </q-card-actions>

        <!-- Modal -->
        <q-dialog v-model="dialog" transition-show="rotate" full-width transition-hide="rotate">
            <ServiceDetailsDialog />
        </q-dialog>
    </q-card>
</template>

<script>
import Swal from "sweetalert2";
import ServiceDetailsDialog from "components/common/ServiceDetailsDialog"
export default {
    name: "ServiceCard",
    components:{
        ServiceDetailsDialog
    },
    props: ['service'],
    data() {
        return {
            rating: 4.4,
            role:'',
            dialog:false,
        }
    },
    async created() {
        let res = await this.$store.dispatch("agent/fetchAgent");
        if(!res.error){
        this.role = 'agent'
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
        async inactive() {
            let response = await this.$store.dispatch('pro/updateStatus', {id: this.service._id, status: 'inactive'})
            if(response.error) {
                await Swal.fire('Error', response.msg, 'error')
            } else {
                await Swal.fire('Success', response.msg, 'success')
                await this.$store.dispatch('pro/fetchServices')
            }
        },
        async serviceDetails(id){
            await this.$store.dispatch("service/fetchService", id);
            this.dialog = true
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
