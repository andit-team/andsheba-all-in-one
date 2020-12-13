<template>
    <q-card class="my-card q-ma-md">
        <q-img
            :src="service.thumb_img"
            basic
        >
            <div class="absolute-bottom text-h6 bg-transparent">
                $25
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
                <a class="edit"><q-icon name="far fa-edit"/><span>Edit</span></a>
                <a class="delete" v-if="service.status == 'active' || service.status == 'accepted'"><q-icon name="far fa-trash-alt"/><span>Inactive</span></a>
                <a class="delete text-primary" v-if="service.status == 'inactive'"><q-icon name="far fa-trash-alt"/><span>Active</span></a>
            </div>
        </q-card-section>
    </q-card>
</template>

<script>
export default {
    name: "ServiceCard",
    props: ['service'],
    data() {
        return {
            rating: 4
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
