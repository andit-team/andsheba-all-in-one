<template>
  <div class="content container-fluid">
    <!-- Page Header -->
    <div class="page-header">
      <div class="row">
        <div class="col">
          <h3 class="page-title">Customers</h3>
        </div>
      </div>
    </div>
    <!-- /Page Header -->
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <loader v-if="loader"/>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover table-center mb-0 datatable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th class="text-right">Status</th>
                  </tr>
                </thead>
                <tbody v-if="customers.length>0">
                  <tr v-for="({_id,name,mobile,email,status,createdAt},index) in customers" :key="_id">
                    <td>{{index+1}}</td>
                    <td>{{name}}</td>
                    <td>{{mobile}}</td>
                    <td>{{email}}</td>
                    <td>{{createdAt}}</td>
                    <td><span :class="['badge badge-pill', status == 'block'?'badge-danger':'badge-success']">{{status}}</span></td>
                    <td class="text-right">
                      <router-link :to="'customers/edit/'+_id" class="btn btn-sm bg-info-light mr-2">	<i class="far fa-eye mr-1"></i></router-link>
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
      selected:'',
    }
  },
  async created() {
    this.loader = true
    await this.$store.dispatch('customer/fetchAll')
  },
  computed: mapState({
    customers: state => state.customer.customers
  }),
  methods: {
  },
  mounted() {
    this.loader = false
  },
};
</script>