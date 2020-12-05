<template>
<div class="main-wrapper">
	
		<!-- Header -->
		<div class="header">
			<div class="header-left"> 
				<router-link to="index-2" class="logo logo-small">
					<img src="/img/logo-icon.png" alt="Logo" width="30" height="30">
				</router-link>
			</div>
			<router-link to="javascript:void(0);" id="toggle_btn">
				<i class="fas fa-align-left"></i>
			</router-link>
			<router-link class="mobile_btn" id="mobile_btn" to="javascript:void(0);">
				<i class="fas fa-align-left"></i>
			</router-link>
			
			<ul class="nav user-menu">
				<!-- Notifications -->
				<li class="nav-item dropdown noti-dropdown">
					<router-link to="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
						<i class="far fa-bell"></i>  <span class="badge badge-pill"></span>
					</router-link>
					<div class="dropdown-menu dropdown-menu-right notifications">
						<div class="topnav-dropdown-header">
							<span class="notification-title">Notifications</span>
							<router-link to="javascript:void(0)" class="clear-noti"> Clear All </router-link>
						</div>
						<div class="noti-content">
							<ul class="notification-list">
								<li class="notification-message">
									<router-link to="admin-notification">
										<div class="media">
											<span class="avatar avatar-sm">
												<img class="avatar-img rounded-circle" alt="" src="/img/provider/provider-01.jpg">
											</span>
											<div class="media-body">
												<p class="noti-details">
													<span class="noti-title">Thomas Herzberg have been subscribed</span>
												</p>
												<p class="noti-time">
													<span class="notification-time">15 Sep 2020 10:20 PM</span>
												</p>
											</div>
										</div>
									</router-link>
								</li>
								<li class="notification-message">
									<router-link to="admin-notification">
										<div class="media">
											<span class="avatar avatar-sm">
												<img class="avatar-img rounded-circle" alt="" src="/img/provider/provider-02.jpg">
											</span>
											<div class="media-body">
												<p class="noti-details">
													<span class="noti-title">Matthew Garcia have been subscribed</span>
												</p>
												<p class="noti-time">
													<span class="notification-time">13 Sep 2020 03:56 AM</span>
												</p>
											</div>
										</div>
									</router-link>
								</li>
								<li class="notification-message">
									<router-link to="admin-notification">
										<div class="media">
											<span class="avatar avatar-sm">
												<img class="avatar-img rounded-circle" alt="" src="/img/provider/provider-03.jpg">
											</span>
											<div class="media-body">
												<p class="noti-details">
													<span class="noti-title">Yolanda Potter have been subscribed</span>
												</p>
												<p class="noti-time">
													<span class="notification-time">12 Sep 2020 09:25 PM</span>
												</p>
											</div>
										</div>
									</router-link>
								</li>
								<li class="notification-message">
									<router-link to="admin-notification">
										<div class="media">
											<span class="avatar avatar-sm">
												<img class="avatar-img rounded-circle" alt="User Image" src="/img/provider/provider-04.jpg">
											</span>
											<div class="media-body">
												<p class="noti-details">
													<span class="noti-title">Ricardo Flemings have been subscribed</span>
												</p>
												<p class="noti-time">
													<span class="notification-time">11 Sep 2020 06:36 PM</span>
												</p>
											</div>
										</div>
									</router-link>
								</li>
								<li class="notification-message">
									<router-link to="admin-notification">
										<div class="media">
											<span class="avatar avatar-sm">
												<img class="avatar-img rounded-circle" alt="User Image" src="/img/provider/provider-05.jpg">
											</span>
											<div class="media-body">
												<p class="noti-details">
													<span class="noti-title">Maritza Wasson have been subscribed</span>
												</p>
												<p class="noti-time">
													<span class="notification-time">10 Sep 2020 08:42 AM</span>
												</p>
											</div>
										</div>
									</router-link>
								</li>
								<li class="notification-message">
									<router-link to="admin-notification">
										<div class="media">
											<span class="avatar avatar-sm">
												<img class="avatar-img rounded-circle" alt="User Image" src="/img/provider/provider-06.jpg">
											</span>
											<div class="media-body">
												<p class="noti-details">
													<span class="noti-title">Marya Ruiz have been subscribed</span>
												</p>
												<p class="noti-time">
													<span class="notification-time">9 Sep 2020 11:01 AM</span>
												</p>
											</div>
										</div>
									</router-link>
								</li>
								<li class="notification-message">
									<router-link to="admin-notification">
										<div class="media">
											<span class="avatar avatar-sm">
												<img class="avatar-img rounded-circle" alt="User Image" src="/img/provider/provider-07.jpg">
											</span>
											<div class="media-body">
												<p class="noti-details">
													<span class="noti-title">Richard Hughes have been subscribed</span>
												</p>
												<p class="noti-time">
													<span class="notification-time">8 Sep 2020 06:23 AM</span>
												</p>
											</div>
										</div>
									</router-link>
								</li>
							</ul>
						</div>
						<div class="topnav-dropdown-footer">
							<router-link to="admin-notification">View all Notifications</router-link>
						</div>
					</div>
				</li>
				<!-- /Notifications -->
				
				<!-- User Menu -->
				<li class="nav-item dropdown">
					<router-link to="javascript:void(0)" class="dropdown-toggle user-link  nav-link" data-toggle="dropdown">
						<span class="user-img">
							<img class="rounded-circle" src="/img/user.jpg" width="40" alt="Admin">
						</span>
					</router-link>
					<div class="dropdown-menu dropdown-menu-right">
						<router-link class="dropdown-item" to="admin-profile">Profile</router-link>
						<router-link class="dropdown-item" to="login">Logout</router-link>
					</div>
				</li>
				<!-- /User Menu -->
				
			</ul>
		</div>
		<!-- /Header -->
		
		<!-- Sidebar -->
		<div class="sidebar" id="sidebar">
			<div class="sidebar-logo">
				<router-link to="index-2">
					<img src="/img/logo-icon.png" class="img-fluid" alt="">
				</router-link>
			</div>
			<div class="sidebar-inner slimscroll">
				<div id="sidebar-menu" class="sidebar-menu">
					<ul>
						<li class="active">
							<router-link to="/"><i class="fas fa-columns"></i> <span>Dashboard</span></router-link>
						</li>
						<li>
							<router-link to="/categories"><i class="fas fa-layer-group"></i> <span>Categories</span></router-link>
						</li>
						<li>
							<router-link to="/subcategories"><i class="fab fa-buffer"></i> <span>Sub Categories</span></router-link>
						</li>
						<li>
							<router-link to="/service-list"><i class="fas fa-bullhorn"></i> <span> Services</span></router-link>
						</li>
						<li>
							<router-link to="/total-report"><i class="far fa-calendar-check"></i> <span> Booking List</span></router-link>
						</li>
						<li>
							<router-link to="/payment_list"><i class="fas fa-hashtag"></i> <span>Payments</span></router-link>
						</li>
						<li>
							<router-link to="/ratingstype"><i class="fas fa-star-half-alt"></i> <span>Rating Type</span></router-link>
						</li>
						<li>
							<router-link to="/review-reports"><i class="fas fa-star"></i> <span>Ratings</span></router-link>
						</li>
						<li>
							<router-link to="/subscriptions"><i class="far fa-calendar-alt"></i> <span>Subscriptions</span></router-link>
						</li>
						<li>
							<router-link to="/wallet"><i class="fas fa-wallet"></i> <span> Wallet</span></router-link>
						</li>
						<li>
							<router-link to="/service-providers"><i class="fas fa-user-tie"></i> <span> Service Providers</span></router-link>
						</li>
						<li>
							<router-link to="/users"><i class="fas fa-user"></i> <span>Users</span></router-link>
						</li>
						<li>
							<router-link to="/settings"><i class="fas fa-cog"></i> <span> Settings</span></router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- /Sidebar -->
		
		<div class="page-wrapper">
			<nuxt />
		</div> 
	</div>
</template>

<!-- jQuery -->
	<script src="/js/jquery-3.5.0.min.js"></script>

	<!-- Bootstrap Core JS -->
	<script src="/js/popper.min.js"></script>
	<script src="/plugins/bootstrap/js/bootstrap.min.js"></script>

	<!-- Datepicker Core JS -->
	<script src="/js/moment.min.js"></script>
	<script src="/js/bootstrap-datetimepicker.min.js"></script>

	<!-- Slimscroll JS -->
	<script src="/plugins/slimscroll/jquery.slimscroll.min.js"></script>
	<script src="/js/bootstrapValidator.min.html"></script>

	<!-- Datatables JS -->
	<script src="/plugins/datatables/datatables.min.js"></script>

	<!-- Select2 JS -->
	<script src="/js/select2.min.js"></script>

<script>

export default {
  
}
</script>