<template>
    <div class="cursor-pointer" @click="() => {this.$router.push(link)}">
        <q-card class="my-card q-mr-sm">
            <q-card-section class="q-pa-lg" style="color: #fff;height: 155px;" v-bind:style="{background: bgColor}">
                <div class="text-h4 border-circle inline-block">
                    <span>{{value}}</span>
                </div>
                <div class="title">{{title}}</div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
    name: "DashboardCards",
    props: ['title', 'value', 'bgColor', 'link'],
}
</script>

<style lang="scss" scoped>
.title {
    position: absolute;
    right: 10%;
    top: 53px;
    font-size: 30px;
}
.border-circle {
    border: 2px solid #fff;
    height: 100px;
    width: 100px;
    border-radius: 50px;
    span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

}
</style>
