<template>
  <div class="content container-fluid">
    <!-- Page Header -->
    <div class="page-header">
      <div class="row">
        <div class="col">
          <h3 class="page-title">Subcategories</h3>
        </div>
        <div class="col-auto text-right">
          <router-link to="subcategories/add" class="btn btn-primary add-button ml-3">
            <i class="fas fa-plus"></i>
          </router-link>
        </div>
      </div>
    </div>
    <!-- /Page Header -->
    
    <!-- Search Filter -->
    <div class="card filter-card">
      <div class="card-body pb-0">
        <form action="#" method="post">
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3">
              <div class="form-group">
                <label>Category</label>
                <select class="form-control select" v-model="selected">
                  <option v-for="{_id,name} in categories" :key="_id" :value="_id">{{ name }}</option>
                </select>
              </div>
            </div>
            <div class="col-sm-6 col-md-1">
              <div class="form-group">
                <button class="btn btn-primary btn-block" type="submit" @click.prevent="search">Search</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- /Search Filter -->
    
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
                    <th>Sub_category</th>
                    <th>Date</th>
                    <th class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody v-if="subcategories.length>0">
                  <tr v-for="{_id,name,image,updatedAt} in subcategories" :key="_id">
                    <td>1</td>
                    <td>
                      <img class="rounded service-img mr-1" :src="image">{{ name }}</td>
                    <td>{{ updatedAt }}</td>
                    <td class="text-right">
                      <a href="#" @click.prevent="subcat_delete(_id)" class="btn btn-sm bg-danger-light mr-2">	<i class="fa fa-trash mr-1"></i> Delete</a>
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
      categories:[],
      subcategories:[]
    }
  },
  async created() {
    this.loader = true
    await this.$store.dispatch('category/fetchAll')
    this.categories = this.$store.state.category.categories
    this.selected = this.$store.state.category.categories[0]._id
    await this.$store.dispatch('subcategory/fetchSubCategories',this.selected)
    this.subcategories = this.$store.state.subcategory.sub_categories
  },
  methods: {
    async search(){
      this.loader = true
      await this.$store.dispatch('subcategory/fetchSubCategories',this.selected)
      this.subcategories = this.$store.state.subcategory.sub_categories
      this.loader = false
    },
    async subcat_delete(id){
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
    this.loader = false
  },
};
</script>