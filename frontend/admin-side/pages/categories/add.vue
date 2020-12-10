<template>
  <div class="content container-fluid">
				<div class="row">
					<div class="col-xl-8 offset-xl-2">
					
						<!-- Page Header -->
						<div class="page-header">
							<div class="row">
								<div class="col">
									<h3 class="page-title">Add Category</h3>
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
										<label>Title</label>
										<input class="form-control" type="text" v-model="form.name">
									</div>
									<div class="form-group">
										<label>Image</label>
										<input class="form-control" type="text"  @click='onPickFile' v-model="fileName">
										<input type="file" class="img1" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked">
									</div>
									<div class="form-group">
										<div class="avatar">
											<img class="avatar-img rounded" alt="" :src="url">
										</div>
									</div>
									<div class="mt-4">
										<button class="btn btn-primary" type="submit">Add Category</button>
										<router-link to="/categories" class="btn btn-link">Cancel</router-link>
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
import axios from 'axios'
export default {
	layout:'default',
  middleware: 'authenticate',
  data() {
    return {
			loader:false,
			fileName:'',
			fileObject: null,
			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRrsL9BbTEcox6kvGCc_cZXHT-PH6suq6xQ&usqp=CAU',
			form:{
				name:'',
				image:''
			}
    }
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
				 this.url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRrsL9BbTEcox6kvGCc_cZXHT-PH6suq6xQ&usqp=CAU'
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
        this.url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRrsL9BbTEcox6kvGCc_cZXHT-PH6suq6xQ&usqp=CAU'
      }
    },
	}
}
</script>