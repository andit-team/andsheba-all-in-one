<template>
  <div>
    <!-- Start - Cover Image Area -->
    <div class="banner-area">
    </div>
    <!-- Ends - Cover Image Area -->
    <div class="row profileArea justify-center q-pb-xl">
      <!-- Start - Profile Info Card -->
      <q-card class="my-card q-pa-lg col-8" bordered>
        <q-card-section horizontal>
          <q-card-section class="col-1 flex flex-center">
            <q-avatar size="100px">
              <img  src="http://amentotech.com/htmls/servosell/images/service-provider-single/img-01.jpg">
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
            <div class="text-h5 q-mb-xs text-weight-bold">We Help You To Invent The Bright and Secure Future</div>
            
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
                <q-icon name="today" size="20px" /> Since: Jun 27, 2010
              </div>
              <div class="">
                <q-icon name="visibility" size="20px" /> 15,063 Viewed
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
        <div class="text-h6 text-weight-bold q-mb-md">About “Freelance Open Desk”</div>
        <div class="text-subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempoer incididunt utenalo labore etesdolore magna aliqua. Ut enim ad minim veniam, quis nrud exercitation ullamco laboris nisi ut aliquip acommodo consequat. duis auete irure dolor in reprehenderit in voluptate velit.
          <br><br>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sede perspiciatis unde omnis iste natus error sitame voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaete ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicoe Nemo enim ipsam voluptatem quia voluptas sitae aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porrom quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.
        </div>
      </div>
      <!-- Services -->
      <div class="col-8">
        <div class="text-h6 text-weight-bold q-my-md">Offered Services</div>
        <div class="row">
          <div v-for="(service,index) in services" :key="index" class="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <q-card>
                  <q-img
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
      // this.$store.dispatch('pro/fetchServices')
    }else{
      // Alert Here
      this.$router.back()
    }
  },
  computed: {
    pro: {
            get() {
                console.log(this.$store.getters["pro/getPro"])
                return this.$store.getters["pro/getPro"]
            }
        },
    services: {
            get() {
                // return this.$store.getters["pro/getPro"]
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
  background-image:url('https://scontent.fdac6-1.fna.fbcdn.net/v/t1.0-9/115837339_1191064301227542_5839657770245649795_o.jpg?_nc_cat=111&ccb=2&_nc_sid=dd9801&_nc_ohc=6Aouz53SUo8AX9xbtFu&_nc_ht=scontent.fdac6-1.fna&oh=1508aebe7fbf3c2392aa8722a971ae63&oe=60102055');
  background-size: cover;
  background-repeat: no-repeat;
}
.profileArea {
  background: #fdfdfd;
}
</style>
