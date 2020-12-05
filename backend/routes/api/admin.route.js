const express = require('express') 
const router = express.Router() 
const Auth = require("../../auth/auth") 

// Admin Controller--------------------------
const Admin = require('../../controllers/admin/admin.controller') 
router.post('/create', Admin.createAdmin) 
router.post('/login', Admin.adminLogin) 

// Category Crud--------------------------
const Category = require('../../controllers/admin/category.controller')
router.post('/category', Auth.admin, Category.createCategory)
router.get('/category/:_id', Auth.admin, Category.getOneCategory)
router.put('/category/:_id', Auth.admin, Category.updateCategory)
router.delete('/category/:_id', Auth.admin, Category.deleteCategory)
router.get('/categories', Auth.admin, Category.getAllCategory)
router.get('/categories-dropdown', Category.getAllCategoryDropDown)

// Plan CRUD -------------------------------------------------
const Plan = require('../../controllers/admin/plan.controller')
router.post('/plan', Auth.admin, Plan.addPlan)
router.get('/plan/:_id', Plan.getOnePlan)
router.delete('/plan/:_id', Auth.admin, Plan.deletePlan)
router.put('/plan/:_id', Auth.admin, Plan.updatePlan)
router.get('/plans', Plan.getAllPlans)

// Export the Router
module.exports = router 