<template>
  <div class="content container-fluid">
				<div class="row">
					<div class="col-xl-8 offset-xl-2">
					
						<!-- Page Header -->
						<div class="page-header">
							<div class="row">
								<div class="col">
									<h3 class="page-title">Update Service</h3>
								</div>
							</div>
						</div>
						<!-- /Page Header -->
						
						<div class="card">
							<div class="card-body">
							
								<!-- Form -->
								<form @submit.prevent="update">
									<div class="form-group">
										<label>Service Name</label>
										<input class="form-control" v-model="service.title" type="text" readonly>
									</div>
									<div class="form-group">
										<label>Service Status</label>
										<select class="form-control select" v-model="service.status">
                  	<option value="pending">Pending</option>
                  	<option value="active">Active</option>
                </select>
									</div>
									<div class="mt-4">
										<button class="btn btn-primary" type="submit">Save Changes</button>
										<router-link to="/services" class="btn btn-link">Cancel</router-link>
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
			service:{}
    }
  },
  async fetch({ store,params }) {
    await store.dispatch('service/fetchOne', params.id)
  },
  computed: mapState({
    oneService: state => state.service.service
	}),
	mounted() {
		this.service = this.oneService
	},
	methods: {
		async update(){
			let res = await this.$store.dispatch('service/updateStatus',{id:this.$route.params.id,status:this.service.status})
			if(res){
				 this.$alert("Service status Successfully Updated", 'Success', 'success')
				 console.log(this)
				 this.$router.push('/')
			}else{
				this.$alert("Service status Failed to Update", 'Error', 'error')
			}
		}
	},
};
</script>