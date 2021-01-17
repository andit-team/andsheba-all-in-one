<template>
  <div>
    <!-- Start - Cover Image Area -->
    <div class="banner-area" v-bind:style="{ backgroundImage: 'url(' + pro.cover_image + ')' }">
    </div>
    <!-- Ends - Cover Image Area -->
    <div class="row profileArea justify-center q-pb-xl">
      <!-- Start - Profile Info Card -->
      <q-card class="my-card q-pa-lg col-8" bordered>
        <q-card-section horizontal>
          <q-card-section class="col-1 flex flex-center">
            <q-avatar size="100px">
              <img  :src="pro.thumb_image">
            </q-avatar>
          </q-card-section>
          <q-card-section class="q-pt-xs">
            <q-badge color="red" class="q-mr-sm">
              Featured
            </q-badge>
            <q-badge color="green">
              Verified
            </q-badge>
            <div class="text-subtitle1 text-weight-bold">Freelance Open Desk</div>
            <div class="text-h5 q-mb-xs text-weight-bold">{{pro.name}}</div>
            
            <div class="flex q-gutter-md">
              <q-rating
                v-model="ratingModel"
                size="2em"
                :max="5"
                color="orange"
              />
              <q-separator vertical/>
              <div class="text-subtitle2"><strong>Location:</strong> 32,Choto Mirzapur Khulna, 9100</div>
            </div>

            <div class="flex q-gutter-md q-py-sm">
              <div class="">
                <q-icon name="today" size="20px" /> Since: {{ pro.createdAt }}
              </div>
              <div class="">
                <q-icon name="visibility" size="20px" /> {{ Math.floor(Math.random(2,9)*15000) }} Viewed
              </div>
              <div class="">
                <q-icon name="warning" size="20px" /><span style="color:red"> Report Now</span>
              </div>
              <div class="">
                <q-icon name="share" size="20px" /> Share Profile
              </div>
            </div>
          </q-card-section>

          
        </q-card-section>
      </q-card>
      <div class="col-8">
        <div class="text-h6 text-weight-bold q-mb-md">About {{ pro.name }}</div>
        <div class="text-subtitle1">
          {{ pro.description }}
        </div>
      </div>
      <!-- Services -->
      <div class="col-8">
        <div class="text-h6 text-weight-bold q-my-md">Offered Services</div>
        <div class="row fixed-height">
          <div v-for="(service,index) in pro.services" :key="index" class="col-xs-12 col-sm-12 col-md-4 col-lg-3 q-pa-sm">
              <q-card>
                  <q-img style="height:200px"
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
                          /> ({{rating || Math.floor(Math.random(2,9)*10)}})
                      </div>
                      <div class="card-action">
                          <div class="row justify-end q-px-xs">
                              <q-btn flat color="secondary" icon="visibility" :to="'/service/single?id=' + service._id" class="text-weight-bold">&nbsp; Details</q-btn>
                          </div>
                      </div>
                  </q-card-section>
              </q-card>
          </div>
        </div>
      </div>
      <!-- Ends - Profile Info Card -->
    </div>
    <Footer/>
  </div>
</template>
<script>
import Footer from "components/footer/Footer";
import ServiceCard from "components/common/ServiceCard"
export default {
components:{
    Footer,
    ServiceCard
},
  data() {
    return {
      slide: 2,
    };
  },
  async created() {
    let res = await this.$store.dispatch("pro/fetchProData", this.$route.query.id);
    if(!res.error){
      console.log(res.data)
    }else{
      // Alert Here
      this.$router.back()
    }
  },
  computed: {
    pro: {
            get() {
                return this.$store.getters["pro/getPro"]
            }
        },
  },
};
</script>

<style>
.my-card {
  top: -100px;
  margin-bottom: -50px;
}
.banner-area {
  min-height: 500px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
.profileArea {
  background: #fdfdfd;
}
</style>
