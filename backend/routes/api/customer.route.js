const express = require('express') 
const router = express.Router() 
const Auth = require("../../auth/auth") 

// Service for Customer---------------------------
const Service = require('../../controllers/customer/service.controller')
router.get('/search', Service.searchService)
router.get('/search/:_id', Service.getOneService)

// Export the Router
module.exports = router 