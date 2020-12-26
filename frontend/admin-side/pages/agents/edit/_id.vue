<template>
  <div class="content container-fluid">
				<div class="row">
					<div class="col-xl-8 offset-xl-2">
					
						<!-- Page Header -->
						<div class="page-header">
							<div class="row">
								<div class="col">
									<h3 class="page-title">Update Agent</h3>
								</div>
							</div>
						</div>
						<!-- /Page Header -->
						
						<div class="card">
							<div class="card-body">
							
								<!-- Form -->
								<form @submit.prevent="update">
									<div class="form-group">
										<label>Agent Name</label>
										<input class="form-control" v-model="agent.name" type="text" readonly>
									</div>
									<div class="form-group">
										<label>Mobile</label>
										<input class="form-control" v-model="agent.mobile" type="text">
									</div>
									<div class="form-group">
										<label>Email</label>
										<input class="form-control" v-model="agent.email" type="text">
									</div>
									<div class="form-group">
										<label>NID</label>
										<input class="form-control" v-model="agent.nid_no" type="text">
									</div>
									<div class="form-group">
										<label>Agent Status</label>
										<select class="form-control select" v-model="agent.status">
												<option value="pending">Pending</option>
												<option value="approved">Approved</option>
										</select>
									</div>
									<div class="mt-4">
										<button class="btn btn-primary" type="submit">Save Changes</button>
										<router-link to="/agents" class="btn btn-link">Cancel</router-link>
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
			agent:{}
    }
  },
  async fetch({ store,params }) {
    await store.dispatch('agent/fetchOne', params.id)
  },
  computed: mapState({
    oneAgent: state => state.agent.agent
	}),
	mounted() {
		this.agent = this.oneAgent
		console.log(this.agent)
	},
	methods: {
		async update(){
			let res = await this.$store.dispatch('agent/updateStatus',{id:this.$route.params.id,status:this.agent})
			if(res){
				 this.$alert("Agent status Successfully Updated", 'Success', 'success')
				 this.$router.push('/agents')
			}else{
				this.$alert("Agent status Failed to Update", 'Error', 'error')
			}
		}
	},
};
</script>