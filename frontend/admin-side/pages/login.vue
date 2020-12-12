<template>
  <div class="main-wrapper">
	
		<div class="login-page">
			<div class="login-body container">
				<div class="loginbox">
					<div class="login-right-wrap">
						<div class="account-header">
							<div class="account-logo text-center mb-4">
								<a href="index-2.html">
									<img src="/img/logo-icon.png" alt="" class="img-fluid">
								</a>
							</div>
						</div>
						<div class="login-header">
							<h3>Login <span>Andsheba</span></h3>
							<p class="text-muted">Access to our dashboard</p>
						</div>
						<form  @submit.prevent="onSubmit">
							<div class="form-group">
								<label class="control-label">Mobile</label>
								<input class="form-control" v-model="sendLoginData.mobile" type="text" placeholder="Enter your mobile">
							</div>
							<div class="form-group mb-4">
								<label class="control-label">Password</label>
								<input class="form-control" v-model="sendLoginData.password" type="password" placeholder="Enter your password">
							</div>
							<div class="text-center">
								<button class="btn btn-primary btn-block account-btn" type="submit">Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  layout: "empty",
  data() {
    return {
      sendLoginData: {
        mobile: "+8801780320711",
        password: "12345678"
      },
      errMsg: ''
    }
  },
  methods: {
    async onSubmit(){
      const res = await this.$store.dispatch('auth/login', this.sendLoginData)
      
      if(res.error){
        this.$alert("Username or Password is not correct!!", 'Login Failed!!!', 'error')
      }else{
				this.$cookies.set('accessToken', res.token, {
            path: '/',
            maxAge: 60 * 60
          })
         this.$router.push({
            path: '/'
          })
      }
    }
  },
};
</script>