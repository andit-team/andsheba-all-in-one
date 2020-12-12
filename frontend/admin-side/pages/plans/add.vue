<template>
  <div class="content container-fluid">
				<div class="row">
					<div class="col-xl-8 offset-xl-2">
					
						<!-- Page Header -->
						<div class="page-header">
							<div class="row">
								<div class="col">
									<h3 class="page-title">Add New Plan</h3>
								</div>
							</div>
						</div>
						<!-- /Page Header -->
						
						<div class="card">
							<loader v-if="loader"/>
							<div class="card-body">
							
								<!-- Form -->
								<form @submit.prevent="add">
									<div class="form-group">
										<label>Plan Title</label>
										<input class="form-control" placeholder="Plan title" type="text" v-model="form.title">
									</div>
									<div class="form-group">
										<label>Price</label>
										<input class="form-control" placeholder="Price" type="number" v-model="form.price">
									</div>
									<div class="form-group">
										<label>Commission</label>
										<input class="form-control" placeholder="Commission" type="number" v-model="form.commision">
									</div>
									<div class="form-group">
										<label>Duration</label>
										<input class="form-control" placeholder="Duration" type="number" v-model="form.duration">
									</div>
									<div class="mt-4">
										<button class="btn btn-primary" type="submit">Add Plan</button>
										<router-link to="/plans" class="btn btn-link">Cancel</router-link>
									</div>
								</form>
								<!-- Form -->
								
							</div>
						</div>
					</div>
				</div>
			</div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
export default {
	layout:'default',
  middleware: 'authenticate',
  data() {
    return {
			loader:false,
			form:{
				title:'',
				price:'',
				commision:'',
				duaration:'',
			}
    }
  },
  methods: {
    async add(){
			this.loader = true
			const res = await this.$store.dispatch('plan/addPlan',this.form)
			 if(!res.error){
				 this.loader = false
				 this.$alert("Plan Successfully Added", 'Success', 'success')
				 this.form = {}
			 }else{
				 this.loader = false
				 this.$alert("Plan Add Failed", 'Error', 'error')
			 }
		},
	}
}
</script>