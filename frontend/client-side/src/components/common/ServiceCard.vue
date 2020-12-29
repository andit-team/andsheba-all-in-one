<template>
    <q-card class="my-card q-ma-md">
        <q-img
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
    </q-card>
</template>

<script>
import Swal from "sweetalert2";

export default {
    name: "ServiceCard",
    props: ['service'],
    data() {
        return {
            rating: 4
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
.card-action {
    margin-top: 15px;
    .edit {
        cursor: pointer;
        color: #36a745;
        i {
            position: absolute;
            margin-top: 2px;
        }
        span {
            margin-left: 20px;
        }
        &:hover {
            color: #13711f;
        }
    }
    .delete {
        cursor: pointer;
        position: absolute;
        right: 13px;
        color: #de3544;
        i {
            position: absolute;
            margin-top: 2px;
        }
        span {
            margin-left: 18px;
        }
        &:hover {
            color: #850d18;
        }
    }
}
</style>
