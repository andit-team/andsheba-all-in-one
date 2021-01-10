const express = require('express') 
const router = express.Router() 
const Auth = require('../../auth/auth') 

// Get All Plan---------------------------
const Plan = require('../../controllers/admin/plan.controller')
router.get('/plans', Plan.getAllPlansByUser)

// Pro Controller--------------------------
const Pro = require('../../controllers/pro/pro.controller') 
router.post('/signup', Pro.signUpPro) 
router.post('/login', Pro.login) 
router.post('/verify', Pro.verifyPro)
router.put('/profile', Auth.pro, Pro.updateProfile)

// Service Controller-----------------------
const Service = require('../../controllers/pro/service.controller')
router.post('/service', Auth.pro, Service.addService)
router.get('/services', Auth.pro, Service.findAllServices)
router.get('/service/:_id', Auth.pro, Service.getOneService)
router.put('/service-status/:_id', Auth.pro, Service.updateServiceStatus)

// Order Controller------------------------
const Order = require('../../controllers/order/order.controller')
router.get('/orders', Auth.pro, Order.getAllOrdersByPro)
router.get('/order', Order.getOneOrder)
router.put('/order-status/:_id', Auth.pro, Order.updateOrderStatusByPro)

// Pro Dashboard Data--------------------------
const DashboardData = require('../../controllers/pro/pro.dashboard.controller')
router.get('/dashboard', Auth.pro, DashboardData.sendHomePageData)

// Export the Router
module.exports = router 