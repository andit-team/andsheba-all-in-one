const express = require('express') 
const router = express.Router() 
const Auth = require('../../auth/auth') 

// Agent Controller--------------------------
const Agent = require('../../controllers/agent/agent.controller') 
router.post('/signup', Agent.signUpAgent)
router.post('/login', Agent.loginAgent)
router.post('/verify', Agent.verifyAgent)
router.put('/profile', Auth.agent, Agent.updateProfile)

// Service Controller -----------------------------
const Service = require('../../controllers/pro/service.controller')
router.get('/service', Auth.agent, Service.findAllServicesByAgent)
router.put('/service/:_id', Auth.agent, Service.updateServiceMessageByAgent)

// Order Controller------------------------
const Order = require('../../controllers/order/order.controller')
router.get('/orders', Auth.agent, Order.getAllOrdersByAgent)
router.get('/order', Order.getOneOrder)

// Agent Dashboard Data--------------------------
const DashboardData = require('../../controllers/agent/agent.dashboard.controller')
router.get('/dashboard', Auth.agent, DashboardData.sendHomePageData)


// Export the Router
module.exports = router 