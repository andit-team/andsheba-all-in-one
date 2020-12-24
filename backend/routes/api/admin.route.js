const express = require('express') 
const router = express.Router() 
const Auth = require('../../auth/auth') 

// Admin Controller--------------------------
const Admin = require('../../controllers/admin/admin.controller') 
router.post('/create', Admin.createAdmin) 
router.post('/login', Admin.adminLogin)
router.post('/verify', Admin.verifyAdmin)  

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

// Service Related Controller--------------------------
const Service = require('../../controllers/pro/service.controller')
router.get('/services', Auth.admin, Service.findAllServicesByAdmin)
router.get('/service/:_id', Auth.admin, Service.getOneService)
router.put('/service-status/:_id', Auth.admin, Service.updateServiceStatus)

// Customer Controller-----------------------------------------
const Customer = require('../../controllers/customer/customer.controller')
router.get('/customers', Auth.admin, Customer.getAllCustomerByAdmin)
router.put('/customer-status/:_id', Auth.admin, Customer.updateCustomerStatusByAdmin)

// Export the Router
module.exports = router 