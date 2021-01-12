<template>
  <q-card class="fit q-mx-md" >
    <q-card-section class="bg-secondary text-white text-center">
        <div class="text-h5">Services in my Area</div>
    </q-card-section>
    <q-tabs
      v-model="tab"
      dense
      class="fixed-height bg-grey-2 text-grey-7 q-pa-sm"
      active-color="primary"
      indicator-color="primary"
      align="center"
    >
      <q-tab name="active" :label="`Active ( ${active.length} )`" class="text-green"/>
      <q-tab name="inactive" :label="`Inactive ( ${inactive.length} )`" class="text-muted" />
      <q-tab name="pending" :label="`Pending ( ${pending.length} )`" class="text-red"/>
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="active">
        <div class="row">
          <div
            v-for="(service, index) in active"
            :key="index"
            class="col-xs-12 col-sm-12 col-md-6 col-lg-4"
          >
            <ServiceCard
              :service="service"
            />
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="inactive">
        <div class="row">
          <div
            v-for="(service, index) in inactive"
            :key="index"
            class="col-xs-12 col-sm-12 col-md-6 col-lg-4"
          >
            <ServiceCard :service="service" />
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="pending">
        <div class="row">
          <div
            v-for="(service, index) in pending"
            :key="index"
            class="col-xs-12 col-sm-12 col-md-6 col-lg-4"
          >
            <ServiceCard :service="service" />
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import ServiceCard from "components/common/ServiceCard";
import { mapState } from "vuex";
export default {
  name: "Services",
  components: { ServiceCard },
  data() {
    return {
      tab: "active",
      ratingModel: 3,
    };
  },
  async created() {
    await this.$store.dispatch("agent/fetchServices");
  },
  computed: {
    ...mapState({
      services: (state) => state.agent.services,
    }),
    active: {
      get() {
        return this.services.filter(
          (service) => service.status == "active");
      },
    },
    inactive: {
      get() {
        return this.services.filter((service) => service.status == "inactive");
      },
    },
    pending: {
      get() {
        return this.services.filter((service) => service.status == "pending");
      },
    },
  },
};
</script>
