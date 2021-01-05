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
router.get('/customer', Auth.admin, Customer.getOneCustomerByAdmin)
router.put('/customer-status/:_id', Auth.admin, Customer.updateCustomerStatusByAdmin)

// Pro Controller-----------------------------------------
const Pro = require('../../controllers/pro/pro.controller')
router.get('/pros', Auth.admin, Pro.getAllProByAdmin)
router.get('/pro', Auth.admin, Pro.getOnePro)
router.put('/pro-status/:_id', Auth.admin, Pro.updateProStatusByAdmin)

// Agent Controller---------------------------------------
const Agent = require('../../controllers/agent/agent.controller')
router.get('/agents', Auth.admin, Agent.getAllAgentByAdmin)
router.get('/agent', Auth.admin, Agent.getOneAgent)
router.put('/agent/:_id', Auth.admin, Agent.updateAgentByAdmin)

// Order Controller------------------------
const Order = require('../../controllers/customer/order.controller')
router.get('/orders', Auth.admin, Order.getAllOrdersByAdmin)
router.get('/order', Order.getOneOrder)

// Export the Router
module.exports = router 