<template>
    <div>
        <div class="text-h5 q-ma-lg">My Services <q-btn class="bg-primary text-white q-ml-md" to="/pro/add_services">Add Service</q-btn></div>
        <q-tabs
            v-model="tab"
            dense
            class="text-grey q-ma-sm"
            active-color="primary"
            indicator-color="primary"
            align="left"
            narrow-indicator
        >
            <q-tab name="active" :label="`Active Services ( ${active} )`" />
            <q-tab name="inactive" :label="`Inactive Services ( ${inActive} )`"/>
            <q-tab name="pending" :label="`Pending Services ( ${pending} )`" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="active">
               <div class="row q-ma-sm">
                   <div v-for="(service,index) in services" :key="index" v-if="(service.status === 'active') || (service.status === 'accepted')" class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                       <ServiceCard :service="service"/>
                   </div>
               </div>
            </q-tab-panel>

            <q-tab-panel name="inactive">
                <q-tab-panel name="active">
                    <div class="row q-ma-sm">
                        <div v-for="(service,index) in services" :key="index" v-if="service.status === 'inactive'" class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <ServiceCard :service="service"/>
                        </div>
                    </div>
                </q-tab-panel>
            </q-tab-panel>

            <q-tab-panel name="pending">
                <q-tab-panel name="active">
                    <div class="row q-ma-sm">
                        <div v-for="(service,index) in services" :key="index" v-if="service.status === 'pending'" class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <ServiceCard :service="service"/>
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
        },
        active: {
            get() {
                return this.services.filter(service => service.status == 'active' || service.status == 'accepted').length
            }
        },
        inActive: {
            get() {
                return this.services.filter(service => service.status == 'inactive').length
            }
        },
        pending: {
            get() {
                return this.services.filter(service => service.status == 'pending').length
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
