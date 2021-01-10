const express = require('express') 
const router = express.Router() 
const Auth = require('../../auth/auth') 

// Agent Controller--------------------------
const Agent = require('../../controllers/agent/agent.controller') 
router.post('/signup', Agent.signUpAgent)
router.post('/login', Agent.loginAgent)
router.post('/verify', Agent.verifyAgent)

// Service Controller -----------------------------
const Service = require('../../controllers/pro/service.controller')
router.get('/service', Auth.agent, Service.findAllServicesByAgent)
router.put('/service/:_id', Auth.agent, Service.updateServiceMessageByAgent)

// Order Controller------------------------
const Order = require('../../controllers/customer/order.controller')
router.get('/orders', Auth.agent, Order.getAllOrdersByAgent)
router.get('/order', Order.getOneOrder)


// Export the Router
module.exports = router 