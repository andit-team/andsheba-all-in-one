const express = require('express') 
const router = express.Router() 
const Auth = require("../../auth/auth") 

// Admin Controller--------------------------
const Admin = require('../../controllers/admin/admin.controller') 
router.post('/create', Admin.createAdmin) 
router.post('/login', Admin.adminLogin) 

// Category Crud--------------------------
const Category = require('../../controllers/admin/category.controller')
router.post('/category-create', Auth.admin, Category.createCategory)
router.get('/category-get-one', Auth.admin, Category.getOneCategory)
router.put('/category-update', Auth.admin, Category.updateCategory)
router.delete('/category-delete', Auth.admin, Category.deleteCategory)
router.get('/category-get-all', Auth.admin, Category.getAllCategory)
router.get('/category-get-all-dropdown', Category.getAllCategoryDropDown)

// Export the Router
module.exports = router 