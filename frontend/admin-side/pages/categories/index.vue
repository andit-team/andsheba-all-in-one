<template>
  <div class="content container-fluid">
    <!-- Page Header -->
    <div class="page-header">
      <div class="row">
        <div class="col">
          <h3 class="page-title">Categories</h3>
        </div>
        <div class="col-auto text-right">
          <a class="btn btn-white filter-btn" href="#" id="filter_search">
            <i class="fas fa-filter"></i>
          </a>
          <router-link to="categories/add" class="btn btn-primary add-button ml-3">
            <i class="fas fa-plus"></i>
          </router-link>
        </div>
      </div>
    </div>
    <!-- /Page Header -->
    
    <!-- Search Filter -->
    <div class="card filter-card" id="filter_inputs">
      <div class="card-body pb-0">
        <form action="#" method="post">
          <div class="row filter-row">
            <div class="col-sm-6 col-md-3">
              <div class="form-group">
                <label>Category</label>
                <select class="form-control select">
                  <option>Select category</option>
                  <option v-for="{_id,name} in categories" :key="_id">{{ name }}</option>
                </select>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="form-group">
                <label>From Date</label>
                <div class="cal-icon">
                  <input class="form-control datetimepicker" type="text">
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="form-group">
                <label>To Date</label>
                <div class="cal-icon">
                  <input class="form-control datetimepicker" type="text">
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="form-group">
                <button class="btn btn-primary btn-block" type="submit">Submit</button>
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
                    <th>Category</th>
                    <th>Date</th>
                    <th class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="{_id,name,image,updatedAt} in categories" :key="_id">
                    <td>1</td>
                    <td>
                      <img class="rounded service-img mr-1" :src="image">{{ name }}</td>
                    <td>{{ updatedAt }}</td>
                    <td class="text-right">
                      <a href="#" @click.prevent="cat_delete(_id)" class="btn btn-sm bg-danger-light mr-2">	<i class="fa fa-trash mr-1"></i> Delete</a>
                    </td>
                  </tr>
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
import $ from "jquery";
import jQuery from "jquery";
import { mapState } from 'vuex'
export default {
  middleware: 'authenticate',
  data() {
    return {
      loader:false
    }
  },
  created() {
    this.loader = true
  },
  async fetch({ store }) {
    await store.dispatch('category/fetchAll')
  },
  computed: mapState({
    categories: state => state.category.categories
  }),
   methods: {
    cat_delete(id){
      this.$confirm('Are you sure ?', 'Warning', 'warning').then(res => {
        this.$store.dispatch('category/deleteCategories', id).then(res => {
          res?this.$alert("Category Successfully Deleted", 'Success', 'success'): this.$alert("Error Occured!!!", 'Error', 'error');;
        }).catch(err => {
          this.$alert("Error Occured!!!", 'Error', 'error');
        })
      }).catch(err => {
        this.$alert("Error Occured!!!", 'Error', 'error');
      })
      
    }
  },
  mounted() {
    this.loader = false
  },
};
</script>