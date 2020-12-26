<template>
  <div class="content container-fluid">
    <!-- Page Header -->
    <div class="page-header">
      <div class="row">
        <div class="col-12">
          <h3 class="page-title">Welcome Admin!</h3>
        </div>
      </div>
    </div>
    <!-- /Page Header -->
    <div class="row">
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card">
          <div class="card-body">
            <div class="dash-widget-header">
              <span class="dash-widget-icon bg-primary">
                <i class="far fa-user"></i>
              </span>
              <div class="dash-widget-info">
                <h3>429</h3>
                <h6 class="text-muted">Users</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card">
          <div class="card-body">
            <div class="dash-widget-header">
              <span class="dash-widget-icon bg-primary">
                <i class="fas fa-user-shield"></i>
              </span>
              <div class="dash-widget-info">
                <h3>148</h3>
                <h6 class="text-muted">Providers</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card">
          <div class="card-body">
            <div class="dash-widget-header">
              <span class="dash-widget-icon bg-primary">
                <i class="fas fa-qrcode"></i>
              </span>
              <div class="dash-widget-info">
                <h3>124</h3>
                <h6 class="text-muted">Services</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6 col-12">
        <div class="card">
          <div class="card-body">
            <div class="dash-widget-header">
              <span class="dash-widget-icon bg-primary">
                <i class="far fa-credit-card"></i>
              </span>
              <div class="dash-widget-info">
                <h3>$11378</h3>
                <h6 class="text-muted">Subscription</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 d-flex">
        <!-- Recent Bookings -->
        <div class="card card-table flex-fill">
          <div class="card-header">
            <h4 class="card-title">Pending Services</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover table-center mb-0 datatable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Thumb</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody v-if="services.length>0">
                  <tr v-for="({_id,title,thumb_img,category,status},index) in services.filter(item => item.status !== 'active')" :key="_id">
                    <td>{{index+1}}</td>
                    <td>{{title}}</td>
                    <td><img class="rounded service-img mr-1" :src="thumb_img"></td>
                    <td>{{category.name}}</td>
                    <td><span :class="['badge badge-pill', status == 'pending'?'badge-warning':'badge-success']">{{status}}</span></td>
                    <td class="text-right">
                      <router-link :to="'services/edit/'+_id" class="btn btn-sm bg-info-light mr-2">	
                        <i class="far fa-eye mr-1"></i>
                      </router-link>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr><td colspan="8" class="text-center">NO DATA</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- /Recent Bookings -->
      </div>
      <div class="col-md-6 d-flex">
        <!-- Recent Bookings -->
        <div class="card card-table flex-fill">
          <div class="card-header">
            <h4 class="card-title">Pending Agent Requests</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover table-center mb-0 datatable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody v-if="agents.length>0">
                  <tr v-for="({_id,name,email,mobile,status},index) in agents" :key="_id">
                    <td>{{index+1}}</td>
                    <td>{{name}}</td>
                    <td>{{mobile}}</td>
                    <td>{{email}}</td>
                    <td><span :class="['badge badge-pill', status == 'pending'?'badge-warning':'badge-success']">{{status}}</span></td>
                    <td class="text-right">
                      <router-link :to="'agents/edit/'+_id" class="btn btn-sm bg-info-light mr-2">	<i class="far fa-eye mr-1"></i></router-link>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr><td colspan="8" class="text-center">NO DATA</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- /Recent Bookings -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  middleware: 'authenticate',
  data() {
    return {
      loader:false,
    }
  },
  async fetch() {
    this.loader = true
    await this.$store.dispatch('service/fetchAll')
    await this.$store.dispatch('agent/fetchAll','pending')
  },
  computed: mapState({
    services: state => state.service.services,
    agents: state => state.agent.agents
  }),
  methods: {
  },
  mounted() {
    this.loader = false
  }
};
</script>