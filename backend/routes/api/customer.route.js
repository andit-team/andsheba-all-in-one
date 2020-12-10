const express = require('express') 
const router = express.Router() 
const Auth = require("../../auth/auth") 

// Customer Controller -------------------------
const Customer = require('../../controllers/customer/customer.controller')
router.post('/signup', Customer.signUp)
router.post('/login', Customer.login)

// Service for Customer---------------------------
const Service = require('../../controllers/customer/service.controller')
router.get('/search', Service.searchService)
router.get('/search/:_id', Service.getOneService)

// Export the Router
module.exports = router 