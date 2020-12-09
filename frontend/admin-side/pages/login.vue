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
						<form>
							<div class="form-group">
								<label class="control-label">Username</label>
								<input class="form-control" type="text" placeholder="Enter your username">
							</div>
							<div class="form-group mb-4">
								<label class="control-label">Password</label>
								<input class="form-control" type="password" placeholder="Enter your password">
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
  layout: "empty"
};
</script>