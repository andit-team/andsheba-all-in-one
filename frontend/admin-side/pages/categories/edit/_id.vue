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
								<form action="https://truelysell-html.dreamguystech.com/template/admin/categories">
									<div class="form-group">
										<label>Category Name</label>
										<input class="form-control" type="text" value="Automobile">
									</div>
									<div class="form-group">
										<label>Category Image</label>
										<input class="form-control" type="file">
									</div>
									<div class="form-group">
										<div class="avatar">
											<img class="avatar-img rounded" alt="" src="/img/category/category-01.jpg">
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
export default {};
</script>