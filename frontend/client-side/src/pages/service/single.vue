<template>
  <div>
    <div :class="[$q.screen.gt.sm ? 'q-my-xl q-gutter-xl' : 'q-pa-xl', 'row justify-center']">
      <div class="col-md-6 col-sm-12 col-xs-12">
        
        <div :class="[$q.screen.gt.sm ? 'text-h4' : 'text-h5', 'q-mb-md text-weight-bold']">{{service.title}}</div>
        <div :class="[$q.screen.gt.sm ?'q-py-md':'','row no-wrap items-center']">
          <q-avatar :size="[$q.screen.gt.sm ?'38px':'25px']" class="q-mr-md"
            ><img :src="service.thumb_img"
          /></q-avatar>
          <q-rating :size="[$q.screen.gt.sm ?'35px':'20px']" :max="5" color="orange" />
          <span :class="[$q.screen.gt.sm ?'text-h5':'text-subtitle2', 'text-grey q-ml-sm text-weight-bold']">4.2 (551)</span>
          <span :class="[$q.screen.gt.sm ?'text-subtitel2':'text-caption','text-red q-ml-sm text-weight-bold']">6 Orders in Queue</span>
        </div>

        <div class="q-py-md">
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
        </div>
        <div class="text-h5 q-my-sm text-weight-bold q-mt-md">Service Overview</div>

        <div class="text-h6 text-grey q-mt-md">
          {{ service.description }}
        </div>
        <div class="text-h5 q-my-sm text-weight-bold q-mt-lg">FAQ</div>
        <div :class="[role=='agent'?'q-mb-xl':'']">
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
        <!-- Faq Bottom -->
        <div v-if="role !== 'agent'">
          <div class="row no-wrap items-center q-my-lg">
            <span class="text-h5 q-mr-md text-weight-bold">45 Reviews</span>
            <q-rating size="35px" :max="5" color="orange" />
          </div>
          <div class="row items-start q-my-md">
            <div class="col-md-9 col-sm-12 col-xs-12">
              <div class="row no-wrap items-center q-my-sm">
                <span class="text-h6 text-primary q-mr-md">5 Stars</span>
                <q-linear-progress
                  class="col"
                  rounded
                  size="12px"
                  value="0.7"
                  color="orange"
                />
                <span class="text-h6 text-center text-primary q-ml-md">(44)</span>
              </div>
              <div class="row no-wrap items-center q-my-sm">
                <span class="text-h6 text-primary q-mr-md">4 Stars</span>
                <q-linear-progress
                  class="col"
                  rounded
                  size="12px"
                  value="0.1"
                  color="orange"
                />
                <span class="text-h6 text-center text-primary q-ml-md">(1)</span>
              </div>
              <div class="row no-wrap items-center q-my-sm">
                <span class="text-h6 text-primary q-mr-md">3 Stars</span>
                <q-linear-progress
                  class="col"
                  rounded
                  size="12px"
                  value="0.0"
                  color="orange"
                />
                <span class="text-h6 text-center text-primary q-ml-md">(0)</span>
              </div>
              <div class="row no-wrap items-center q-my-sm">
                <span class="text-h6 text-primary q-mr-md">2 Stars</span>
                <q-linear-progress
                  class="col"
                  rounded
                  size="12px"
                  value="0.0"
                  color="orange"
                />
                <span class="text-h6 text-center text-primary q-ml-md">(0)</span>
              </div>
              <div class="row no-wrap items-center q-my-sm">
                <span class="text-h6 text-primary q-mr-md">1 Stars</span>
                <q-linear-progress
                  class="col"
                  rounded
                  size="12px"
                  value="0.0"
                  color="orange"
                />
                <span class="text-h6 text-center text-primary q-ml-md">(0)</span>
              </div>
            </div>
            <div class="col-sm-12 col-xs-12 row no-wrap justify-end items-center q-my-xl">
              <div class="text-h6 text-weight-bold q-mr-md">Sort by</div>
              <q-select outlined dense class="col-3" v-model="sortBy" :options="sortOptions" label="select"/>
            </div>
          </div>

          <q-separator />
          <!-- comment -->
          <div class="row no-wrap items-center q-my-lg">
            <q-avatar size="28px" class="q-mr-md"
              ><img :src="service.thumb_img"
            /></q-avatar>
            <div class="text-h6 text-weight-bold">gngsnap32</div>
            <q-rating size="28px" class="q-ml-md q-mr-sm" :max="1" color="orange" />
            <div class="text-h6 text-orange text-weight-bold">5</div>
          </div>
          <div class="row">
            <div class="text-subtitle1 text-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi
              tempore voluptatibus quae ipsam rerum eum Facilis eligendi tempore
              voluptatibus quae ipsam rerum eum Facilis eligendi tempore voluptatibus
              tempore voluptatibus quae ipsam rerum eum magni illo
            </div>
          </div>
          <q-separator class="q-my-md" />
          <div class="row no-wrap items-center q-my-md">
            <q-avatar size="28px" class="q-mr-md"
              ><img :src="service.thumb_img"
            /></q-avatar>
            <div class="text-h6 text-weight-bold">ugandau420</div>
            <q-rating size="28px" class="q-ml-md q-mr-sm" :max="1" color="orange" />
            <div class="text-h6 text-orange text-weight-bold">3</div>
          </div>
          <div class="row">
            <div class="text-subtitle1 text-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi
              tempore voluptatibus quae ipsam rerum eum Facilis eligendi tempore
              voluptatibus quae ipsam rerum eum Facilis eligendi tempore voluptatibus
              tempore voluptatibus quae ipsam rerum eum magni illo
            </div>
          </div>
          <q-separator  class="q-my-md"/>
          <div class="row no-wrap items-center q-my-md">
            <q-avatar size="28px" class="q-mr-md"
              ><img :src="service.thumb_img"
            /></q-avatar>
            <div class="text-h6 text-weight-bold">Shariful402</div>
            <q-rating size="28px" class="q-ml-md q-mr-sm" :max="1" color="orange" />
            <div class="text-h6 text-orange text-weight-bold">4</div>
          </div>
          <div class="row">
            <div class="text-subtitle1 text-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi
              tempore voluptatibus quae ipsam rerum eum Facilis eligendi tempore
              voluptatibus quae ipsam rerum eum Facilis eligendi tempore voluptatibus
              tempore voluptatibus quae ipsam rerum eum magni illo
            </div>
          </div>
          <q-separator  class="q-my-md"/>
          <div class="row no-wrap items-center q-my-md">
            <q-avatar size="28px" class="q-mr-md"
              ><img :src="service.thumb_img"
            /></q-avatar>
            <div class="text-h6 text-weight-bold">ugandau420</div>
            <q-rating size="28px" class="q-ml-md q-mr-sm" :max="1" color="orange" />
            <div class="text-h6 text-orange text-weight-bold">1</div>
          </div>
          <div class="row">
            <div class="text-subtitle1 text-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eligendi
              tempore voluptatibus quae ipsam rerum eum Facilis eligendi tempore
              voluptatibus quae ipsam rerum eum Facilis eligendi tempore voluptatibus
              tempore voluptatibus quae ipsam rerum eum magni illo
            </div>
          </div>
        </div>
        <!-- related section -->
      </div>
      <!-- right side -->
      <div class="col-md-3 col-sm-12 col-xs-12">
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
            <q-btn flat round icon="event" v-if="role !== 'agent'"/>
            <q-btn flat color="primary" :to="'/service/quote?id=' + service._id" class="text-weight-bold" v-if="role !== 'agent'">
              Request for Quote
            </q-btn>
            <q-btn color="primary" :to="'/pro/single?id=' + service.user._id"  icon="visibility" style ="margin:0 auto" class="text-weight-bold" v-if="role === 'agent'">
              &nbsp;See Pro Profile
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <TopAreaServices class="q-mt-lg" v-if="role !== 'agent'"/>
    <Footer/>
  </div>
</template>
<script>
import Footer from "components/footer/Footer";
import TopAreaServices from "components/services/TopAreaServices";
export default {
components:{
    TopAreaServices,
    Footer
},
  data() {
    return {
      slide:1,
      role:'',
      sortBy: null,
      sortOptions: [
        '1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'
      ]
    };
  },
  async created() {
    this.$store.dispatch("service/fetchService", this.$route.query.id);
    let res = await this.$store.dispatch("agent/fetchAgent");
    if(!res.error){
      this.role = 'agent'
    }
  },
  computed: {
    service: {
      get() {
        return this.$store.getters["service/getService"];
      },
    },
  },
  mounted() {
    console.log(this.service)
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
