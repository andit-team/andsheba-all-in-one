<template>
  <div class="content container-fluid">
				<div class="row">
					<div class="col-xl-8 offset-xl-2">
					
						<!-- Page Header -->
						<div class="page-header">
							<div class="row">
								<div class="col">
									<h3 class="page-title">Update Pro</h3>
								</div>
							</div>
						</div>
						<!-- /Page Header -->
						
						<div class="card">
							<div class="card-body">
							
								<!-- Form -->
								<form @submit.prevent="update">
									<div class="form-group">
										<label>Pro Name</label>
										<input class="form-control" v-model="pro.name" type="text" readonly>
									</div>
									<div class="form-group">
										<label>Pro Status</label>
										<select class="form-control select" v-model="pro.status">
                  	<option value="active"><span class="badge badge-pill badge-success">Active</span></option>
                  	<option value="block"><span class="badge badge-pill badge-danger">Block</span></option>
                </select>
									</div>
									<div class="mt-4">
										<button class="btn btn-primary" type="submit">Save Changes</button>
										<router-link to="/pros" class="btn btn-link">Cancel</router-link>
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
			pro:{}
    }
  },
  async fetch({ store,params }) {
    await store.dispatch('pro/fetchOne', params.id)
  },
  computed: mapState({
    onePro: state => state.pro.pro
	}),
	mounted() {
		this.pro = this.onePro
	},
	methods: {
		async update(){
			let res = await this.$store.dispatch('pro/updateStatus',{id:this.$route.params.id,status:this.pro.status})
			if(res){
				 this.$alert("Pro status Successfully Updated", 'Success', 'success')
				 console.log(this)
				 this.$router.push('/pros')
			}else{
				this.$alert("Pro status Failed to Update", 'Error', 'error')
			}
		}
	},
};
</script>