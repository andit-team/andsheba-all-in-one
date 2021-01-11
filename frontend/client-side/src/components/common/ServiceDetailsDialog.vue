<template>
    <q-card>
        <q-btn side round icon="close" class="absolute" size="sm" color="black" v-close-popup style="top: 10px;right: 5px;z-index: 9;">
            <q-tooltip>Close</q-tooltip>
        </q-btn>
        <q-card-section :horizontal="$q.screen.gt.sm">
            <q-card-section class="col-md-8 col-sm-12">
                <q-card-section>
                    <div :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h5', 'q-mb-md text-weight-bold']">{{service.title}}</div>
                    <div :class="[$q.screen.gt.sm ?'q-py-md':'','row no-wrap items-center']">
                    <q-avatar :size="[$q.screen.gt.sm ?'38px':'25px']" class="q-mr-md"
                        ><img :src="service.thumb_img"
                    /></q-avatar>
                    <q-rating :size="[$q.screen.gt.sm ?'35px':'20px']" :max="5" color="orange" />
                    <span :class="[$q.screen.gt.sm ?'text-h5':'text-subtitle2', 'text-grey q-ml-sm text-weight-bold']">4.2 (551)</span>
                    <span :class="[$q.screen.gt.sm ?'text-subtitel2':'text-caption','text-red q-ml-sm text-weight-bold']">6 Orders in Queue</span>
                    </div>
                </q-card-section>
                <q-card-section>
           <q-carousel swipeable animated v-model="slide" thumbnails infinite>
            <q-carousel-slide
              v-for="(image, index) in service.gallery_images"
              :name="index + 1"
              :img-src="image || 'https://cdn.quasar.dev/img/mountains.jpg'"
              :key="index"
            />

            <q-carousel-slide
              :name="20"
              img-src="https://cdn.quasar.dev/img/mountains.jpg"
            />
            <q-carousel-slide
              :name="22"
              img-src="https://cdn.quasar.dev/img/parallax1.jpg"
            />
            <q-carousel-slide
              :name="22"
              img-src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
            <q-carousel-slide
              :name="23"
              img-src="https://cdn.quasar.dev/img/quasar.jpg"
            />
          </q-carousel> 
                </q-card-section>
                <q-card-section>
                <div class="text-h5 q-my-sm text-weight-bold q-mt-md">Service Overview</div>

                    <div class="text-h6 text-grey q-mt-md">
                    {{ service.description }}
                    </div> 
                </q-card-section>
                <q-card-section>
                    <div class="text-h5 q-my-sm text-weight-bold q-mt-lg">FAQ</div>
                <div class="q-mb-xl">
                <q-list class="faq">
                    <q-expansion-item expand-separator v-for="(item,index) in service.faq" :label="item.question" :key="index">
                    <q-card>
                        <q-card-section>
                        {{ item.answer }}
                        </q-card-section>
                    </q-card>
                    </q-expansion-item>
                </q-list>
                </div>
                </q-card-section>
            </q-card-section>
        
            <q-card-section class="col-md-4 col-sm-12">
                <q-card :class="[$q.screen.gt.sm?'':'q-mt-xl','my-card']">
                    <q-img  :src="service.user.thumb_image" height="300px"/>

                    <q-card-section>
                        <q-btn
                        fab
                        color="primary"
                        icon="place"
                        class="absolute"
                        style="top: 0; right: 12px; transform: translateY(-50%)"
                        />

                        <div class="row no-wrap items-right">
                        <div class="col text-h6 ellipsis text-weight-bold">
                            {{ service.user.name }}
                        </div>
                        <div
                            class="col-auto text-grey text-subtitle1 q-pt-md row no-wrap items-center text-weight-bold"
                        >
                            <q-icon name="place" />
                            {{ service.address.address.split(',')[1] }}
                        </div>
                        </div>

                        <q-rating color="red" :max="5" size="35px" />
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div class="text-subtitle1 text-grey">
                        Small plates, salads & sandwiches in an intimate setting.
                        Small plates, salads & sandwiches in an intimate setting.
                        Small plates, salad
                        </div>
                    </q-card-section>

                    <q-separator />

                    <q-card-actions>
                        <q-btn color="primary" @click="proDetails(service.user._id)"  icon="visibility" style ="margin:0 auto" class="text-weight-bold">
                        &nbsp;Pro Profile
                        </q-btn>
                    </q-card-actions>
                </q-card>
            </q-card-section>
        </q-card-section>
        <!-- pro -->
        <q-dialog v-model="dialog2nd" transition-show="scale" transition-hide="scale">
            <ProDetailsDialog />
        </q-dialog>
    </q-card>
</template>
<script>
import ProDetailsDialog from "components/common/ProDetailsDialog"
export default {
components:{
    ProDetailsDialog
},
  data() {
    return {
      slide:1,
      sortBy: null,
      dialog2nd: false,
      sortOptions: [
        '1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'
      ]
    };
  },
  computed: {
    service: {
      get() {
        return this.$store.getters["service/getService"];
      },
    },
  },
  methods: {
      async proDetails(id){
            await this.$store.dispatch("pro/fetchProData", id);
            this.dialog2nd = true
        }
  },
};
</script>

<style scoped>
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
