<template>
    <div>
        <div class="text-h5 q-ma-lg">My Services <q-btn class="bg-primary text-white q-ml-md" to="/user/add_services">Add Service</q-btn></div>
        <q-tabs
            v-model="tab"
            dense
            class="text-grey q-ma-sm"
            active-color="primary"
            indicator-color="primary"
            align="left"
            narrow-indicator
        >
            <q-tab name="active" label="Active Services" />
            <q-tab name="inactive" label="Inactive Services" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="active">
               <div class="row q-ma-sm">
                   <div v-for="(service,index) in services" :key="index" v-if="service.status !== 'inactive'" class="col-sm-12 col-md-6 col-lg-4">
                       <ServiceCard :title="service.title" price="25" :category="service.category.name" rating="3" :thumb="service.thumb_img"/>
                   </div>
               </div>
            </q-tab-panel>

            <q-tab-panel name="inactive">
                <q-tab-panel name="active">
                    <div class="row q-ma-sm">
                        <div v-for="(service,index) in services" :key="index" v-if="service.status === 'inactive'" class="col-sm-12 col-md-6 col-lg-4">
                            <ServiceCard :title="service.title" price="25" :category="service.category.name" rating="3" :thumb="service.thumb_img"/>
                        </div>
                    </div>
                </q-tab-panel>
            </q-tab-panel>
        </q-tab-panels>
    </div>
</template>

<script>
import ServiceCard from "components/common/ServiceCard"
export default {
name: "Services",
    components: {ServiceCard},
    data () {
        return {
            tab: 'active',
            ratingModel: 3
        }
    },
    created() {
        this.$store.dispatch('pro/fetchServices')
    },
    computed: {
        services: {
            get() {
                return this.$store.getters["pro/getServices"]
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
