<template>
  <div class="content container-fluid">
				<div class="row">
					<div class="col-xl-8 offset-xl-2">
					
						<!-- Page Header -->
						<div class="page-header">
							<div class="row">
								<div class="col">
									<h3 class="page-title">Edit Plan</h3>
								</div>
							</div>
						</div>
						<!-- /Page Header -->
						
						<div class="card">
							<loader v-if="loader"/>
							<div class="card-body">
							
								<!-- Form -->
								<form @submit.prevent="add()">
									<div class="form-group">
										<label>Plan Title</label>
										<input class="form-control" v-model="plan.title" type="text" value="Automobile">
									</div>
									<div class="form-group">
										<label>Plan Price</label>
										<input class="form-control" v-model="plan.price" type="text" value="Automobile">
									</div>
									<div class="form-group">
										<label>Plan Commision</label>
										<input class="form-control" v-model="plan.commision" type="text" value="Automobile">
									</div>
									<div class="form-group">
										<label>Plan Duration</label>
										<input class="form-control" v-model="plan.duration" type="text" value="Automobile">
									</div>
									<div class="mt-4">
										<button class="btn btn-primary" type="submit">Save Changes</button>
										<router-link to="/plans" class="btn btn-link">Cancel</router-link>
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
			loader:false,
			plan:{
				title:'',
				price:'',
				commision:'',
				duaration:'',
			}
    }
  },
  async fetch({ store,params }) {
    await store.dispatch('plan/fetchOne', params.id)
  },
  computed: mapState({
    onePlan: state => state.plan.plan
	}),
	mounted() {
		this.plan = this.onePlan
	},
	methods: {
    async add(){
			this.loader = true
			const res = await this.$store.dispatch('plan/updatePlan',{id:this.$route.params.id,data:this.plan})
			 if(!res.error){
				 this.loader = false
				 this.$alert("Plan Update Successfull", 'Success', 'success')
				 this.plan = {}
			 }else{
				 this.loader = false
				 this.$alert("Plan Update Failed", 'Error', 'error')
			 }
		},
	}
};
</script>