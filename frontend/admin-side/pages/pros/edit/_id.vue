<template>
  <div class="content container-fluid">
				<div class="row">
					<div class="col-xl-8 offset-xl-2">
					
						<!-- Page Header -->
						<div class="page-header">
							<div class="row">
								<div class="col">
									<h3 class="page-title">Update Customer</h3>
								</div>
							</div>
						</div>
						<!-- /Page Header -->
						
						<div class="card">
							<div class="card-body">
							
								<!-- Form -->
								<form @submit.prevent="update">
									<div class="form-group">
										<label>Customer Name</label>
										<input class="form-control" v-model="customer.title" type="text" readonly>
									</div>
									<div class="form-group">
										<label>Customer Status</label>
										<select class="form-control select" v-model="customer.status">
                  	<option value="pending">Pending</option>
                  	<option value="active">Active</option>
                </select>
									</div>
									<div class="mt-4">
										<button class="btn btn-primary" type="submit">Save Changes</button>
										<router-link to="/customers" class="btn btn-link">Cancel</router-link>
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
			customer:{}
    }
  },
  async fetch({ store,params }) {
    await store.dispatch('customer/fetchOne', params.id)
  },
  computed: mapState({
    oneCustomer: state => state.customer.customer
	}),
	mounted() {
		this.customer = this.oneCustomer
	},
	methods: {
		async update(){
			let res = await this.$store.dispatch('customer/updateStatus',{id:this.$route.params.id,status:this.customer.status})
			if(res){
				 this.$alert("Customer status Successfully Updated", 'Success', 'success')
				 console.log(this)
				 this.$router.push('/')
			}else{
				this.$alert("Customer status Failed to Update", 'Error', 'error')
			}
		}
	},
};
</script>