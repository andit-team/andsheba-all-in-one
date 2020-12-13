<template>
  <div class="content container-fluid">
				<div class="row">
					<div class="col-xl-8 offset-xl-2">
					
						<!-- Page Header -->
						<div class="page-header">
							<div class="row">
								<div class="col">
									<h3 class="page-title">Edit Category</h3>
								</div>
							</div>
						</div>
						<!-- /Page Header -->
						
						<div class="card">
							<div class="card-body">
							
								<!-- Form -->
								<form>
									<div class="form-group">
										<label>Category Name</label>
										<input class="form-control" v-model="category.name" type="text" value="Automobile">
									</div>
									<div class="form-group">
										<label>Category Image</label>
										<input class="form-control" type="file">
									</div>
									<div class="form-group">
										<div class="avatar">
											<img class="avatar-img rounded" alt="" :src="category.image">
										</div>
									</div>
									<div class="mt-4">
										<button class="btn btn-primary" type="submit">Save Changes</button>
										<router-link to="/categories" class="btn btn-link">Cancel</router-link>
									</div>
								</form>
								<!-- /Form -->
								
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
			category:{}
    }
  },
  fetch({ store,params }) {
    store.dispatch('category/fetchOne', params.id)
  },
  computed: mapState({
    oneCategory: state => state.category.category
	}),
	mounted() {
		this.category = this.oneCategory
	},
};
</script>