<template>
  <div class="content container-fluid">
    <!-- Page Header -->
    <div class="page-header">
      <div class="row">
        <div class="col">
          <h3 class="page-title">Services</h3>
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
                    <th>Description</th>
                    <th>Thumb</th>
                    <th>Address</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th class="text-right">Status</th>
                  </tr>
                </thead>
                <tbody v-if="services.length>0">
                  <tr v-for="({_id,title,description,thumb_img,address,category,status},index) in services" :key="_id">
                    <td>{{index+1}}</td>
                    <td>{{title}}</td>
                    <td>{{description?description.substr(0, 20):"-"}}</td>
                    <td><img class="rounded service-img mr-1" :src="thumb_img"></td>
                    <td>{{address.address}}</td>
                    <td>{{category.name}}</td>
                    <td>{{status}}</td>
                    <td class="text-right">
                      <router-link :to="'services/edit/'+_id" class="btn btn-sm bg-info-light mr-2">	<i class="far fa-eye mr-1"></i></router-link>
                    </td>
                    <!-- <td class="text-right">
                      <a href="#" @click.prevent="subcat_delete(_id)" class="btn btn-sm bg-danger-light mr-2">	<i class="fa fa-trash mr-1"></i> Delete</a>
                    </td> -->
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
// import $ from "jquery";
// import jQuery from "jquery";
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
    await this.$store.dispatch('service/fetchAll')
  },
  computed: mapState({
    services: state => state.service.services
  }),
  methods: {
    async status(id){
      console.log(id)
      return
      this.$confirm('Are you sure ?', 'Warning', 'warning').then(res => {
        this.$store.dispatch('subcategory/deleteSubCategories',id).then(res => {
          if(res){
              this.$alert("Category Successfully Deleted", 'Success', 'success')
              this.subcategories = this.$store.state.subcategory.sub_categories
            }
            else{
              this.$alert("Error Occured!!!", 'Error', 'error');
              }
        })
      })
    }
  },
  mounted() {
    console.log(this.services)
    this.loader = false
  },
};
</script>