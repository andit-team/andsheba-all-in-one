const express = require('express') 
const router = express.Router() 
const Auth = require('../../auth/auth') 

// Customer Controller -------------------------
const Customer = require('../../controllers/customer/customer.controller')
router.post('/signup', Customer.signUp)
router.post('/login', Customer.login)
router.post('/verify', Customer.verifyCustomer)
router.put('/update', Auth.customer, Customer.updateCustomerProfile)

// Service for Customer---------------------------
const Service = require('../../controllers/customer/service.controller')
router.get('/search', Service.searchService)
router.get('/search/:_id', Service.getOneService)

// Render Data to Home Page ------------------------
const HomePageData = require('../../controllers/customer/homepage.controller')
router.get('/homepage', HomePageData.sendHomePageData)
router.post('/autocomplete-homepage', HomePageData.autoCompleteHomePage)

// Pro Controller ---------------------------
const Pro = require('../../controllers/pro/pro.controller')
router.get('/pro', Pro.getOnePro)

// Order Controller --------------------------
const Order = require('../../controllers/customer/order.controller')
router.post('/place-order', Auth.customer, Order.placeOrder)
router.get('/orders', Auth.customer, Order.getAllOrdersByCustomer)
router.get('/order', Order.getOneOrder)
router.put('/order-status/:_id', Auth.customer, Order.updateOrderStatusByCustomer)

// Customer Dashboard Data--------------------------
const DashboardData = require('../../controllers/customer/dashboard.controller')
router.get('/dashboard', Auth.customer, DashboardData.sendHomePageData)

// Export the Router
module.exports = router 