<template>
  <div style="width: 900px; max-width: 80vw; max-height:80vh">
    <!-- Start - Cover Image Area -->
    <div class="banner-area" v-bind:style="{ backgroundImage: 'url(' + pro.cover_image + ')' }">
    </div>
    <!-- Ends - Cover Image Area -->
    <div class="row profileArea justify-center q-pb-xl">
      <!-- Start - Profile Info Card -->
      <q-card class="my-card q-pa-lg col-10" bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <q-avatar size="100px" class="absolute" style="right:10px;z-index:999">
              <img  :src="pro.thumb_image">
            </q-avatar>
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
                size="2em"
                max="5"
                v-model="rating"
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
      <div class="col-10">
        <div class="text-h6 text-weight-bold q-mb-md">About {{ pro.name }}</div>
        <div class="text-subtitle1">
          {{ pro.description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'CustomerDetailsDialog',
  data() {
    return {
      rating: 4.5,
    };
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

<style scoped>
.my-card {
  top: -100px;
  margin-bottom: -50px;
}
.banner-area {
  min-height: 400px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
.profileArea {
  background: #fdfdfd;
}
</style>
