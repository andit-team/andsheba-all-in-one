<template>
  <div>
    <div :class="[$q.screen.gt.sm ? 'q-mt-xl q-gutter-xl' : 'q-pa-xl', 'row justify-center']">
      {{ agent }}
    </div>
    <Footer/>
  </div>
</template>
<script>
import Footer from "components/footer/Footer";
export default {
components:{
    Footer
},
  data() {
    return {
      slide: 2,
      agent:[],
    };
  },
  async created() {
    let res = await this.$store.dispatch("agent/fetchAgent");
    !res.error?this.agent = res.data:[]
  },
  computed: {
  },
};
</script>

<style>
.faq .q-item {
  padding: 8px 0px !important;
}

.faq .q-item__label {
  font-size: 20px;
}
.text-subtitle1 {
    font-size: 1.1rem;
}
.q-rating i{
    color: #c8102f!important;
}
</style>
