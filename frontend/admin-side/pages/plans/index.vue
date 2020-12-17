<template>
  <div class="content container-fluid">
    <!-- Page Header -->
    <div class="page-header">
      <div class="row">
        <div class="col">
          <h3 class="page-title">All Plans</h3>
        </div>
        <div class="col-auto text-right">
          <router-link to="plans/add" class="btn btn-primary add-button ml-3">
            <i class="fas fa-plus"></i>
          </router-link>
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
                    <th>Title</th>
                    <th>Price</th>
                    <th>Commision</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody v-if="plans.length>0">
                  <tr v-for="{_id,title,price,commision,duration,updatedAt} in plans" :key="_id">
                    <td>1</td>
                    <td>{{title}}</td>
                    <td>{{price}}</td>
                    <td>{{commision}}</td>
                    <td>{{duration}}</td>
                    <td>{{ updatedAt }}</td>
                    <td class="text-right">
                      <router-link :to="'plans/edit/'+_id" class="btn btn-sm bg-success-light mr-2">	<i class="far fa-edit mr-1"></i> Edit</router-link>
                    </td>
                    <td>
                      <a href="#" @click.prevent="plan_delete(_id)" class="btn btn-sm bg-danger-light mr-2">	<i class="fa fa-trash mr-1"></i> Delete</a>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr><td colspan="4" class="text-center">NO DATA</td></tr>
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
// import $ from "jquery";
// import jQuery from "jquery";
import { mapState } from 'vuex'
export default {
  middleware: 'authenticate',
  data() {
    return {
      loader:false,
      selected:'',
      plans:[]
    }
  },
  async created() {
    this.loader = true
    await this.$store.dispatch('plan/fetchPlans')
    this.plans = this.$store.state.plan.plans
  },
  methods: {
    async plan_delete(id){
      this.$confirm('Are you sure ?', 'Warning', 'warning').then(res => {
        this.$store.dispatch('plan/deletePlans',id).then(res => {
          if(res){
              this.$alert("Plan Successfully Deleted", 'Success', 'success')
              this.plans = this.$store.state.plan.plans
            }
            else{
              this.$alert("Error Occured!!!", 'Error', 'error');
              }
        })
      })
    }
  },
  mounted() {
    this.loader = false
  },             
};
</script>