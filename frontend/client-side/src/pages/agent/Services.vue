<template>
  <div>
    <div class="text-h5 q-ma-lg">Services in my Area</div>
    <q-tabs
      v-model="tab"
      dense
      class="text-grey q-ma-sm"
      active-color="primary"
      indicator-color="primary"
      align="left"
      narrow-indicator
    >
      <q-tab name="active" :label="`Active Services ( ${active.length} )`" class="text-success"/>
      <q-tab name="inactive" :label="`Inactive Services ( ${inactive.length} )`" class="text-warning" />
      <q-tab name="pending" :label="`Pending Services ( ${pending.length} )`" class="text-secondary"/>
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="active">
        <div class="row q-ma-sm">
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
        <div class="row q-ma-sm">
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
        <div class="row q-ma-sm">
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
  </div>
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
