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
						<form>
							<div class="form-group">
								<label>Category Name</label>
								<input class="form-control" v-model="category.name" type="text" value="Automobile">
							</div>
							<div class="form-group">
								<label>Category Image</label>
								<input class="form-control" type="file">
							</div>
							<div class="form-group">
								<div class="avatar">
									<img class="avatar-img rounded" alt="" :src="category.image">
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
import axios from 'axios'
export default {
	layout:'default',
  middleware: 'authenticate',
  data() {
    return {
			loader:false,
			fileName:'',
			category:{},
			fileObject: null,
			url: '',
			form:{
				name:'',
				image:''
			}
    }
	},
	async fetch({ store,params }) {
    await store.dispatch('category/fetchOne', params.id)
  },
  computed: mapState({
    oneCategory: state => state.category.category
	}),
	mounted() {
		this.category = this.oneCategory
	},
  methods: {
    async add(){
			this.loader = true
			if (this.url) {
        let file = document.querySelector('.img1').files[0]
        const data = new FormData()
        data.append('image', file)

        let url = "https://api.imgbb.com/1/upload?key=dbe026b9378783fd76fb76f8dea82edb";

        const res = await axios.post(url, data, {})
        if (res.data.success) {
          this.form.image = res.data.data.image.url
        };
			}
		if(this.form.image !== ""){
			const res = await this.$store.dispatch('category/addCategories',this.form)
			 if(!res.error){
				 this.loader = false
				 this.$alert("Category Successfully Added", 'Success', 'success')
				 this.form = {}
				 this.url = ''
				 this.fileName = ''
			 }
		}else{
			this.loader = false
			this.$alert("Category Add Failed", 'Error', 'error')
		}
		},
		onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      if (files[0] !== undefined) {
        this.fileName = files[0].name
        // Check validity of file
        if (this.fileName.lastIndexOf('.') <= 0) {
          return
        }
        // If valid, continue
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.url = fr.result
          this.fileObject = files[0] // this is an file that can be sent to server...

        })
      } else {
        this.fileName = ''
        this.fileObject = null
        this.url = ''
      }
    },
	}
}
</script>