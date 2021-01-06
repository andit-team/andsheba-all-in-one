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
router.put('/profile', Auth.user, Pro.updateProfile)
//router.put('/profile-picture', Auth.user, Pro.updateProfilePicture)

// Service Controller-----------------------
const Service = require('../../controllers/pro/service.controller')
router.post('/service', Auth.user, Service.addService)
router.get('/services', Auth.user, Service.findAllServices)
router.get('/service/:_id', Auth.user, Service.getOneService)
router.put('/service-status/:_id', Auth.user, Service.updateServiceStatus)

// Order Controller------------------------
const Order = require('../../controllers/customer/order.controller')
router.get('/orders', Auth.user, Order.getAllOrdersByPro)
router.get('/order', Order.getOneOrder)
router.put('/order-status/:_id', Auth.user, Order.updateOrderStatusByPro)

// Export the Router
module.exports = router 