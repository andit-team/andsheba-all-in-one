const express = require('express') 
const router = express.Router() 
const Auth = require("../../auth/auth") 

// Get All Plan---------------------------
const Plan = require('../../controllers/admin/plan.controller')
router.get('/plans', Plan.getAllPlansByUser)

// Pro Controller--------------------------
const Pro = require('../../controllers/pro/pro.controller') 
router.post('/signup', Pro.signUpPro) 
router.post('/login', Pro.login) 
router.post('/verify', Pro.verifyPro)

// Service Controller-----------------------
const Service = require('../../controllers/pro/service.controller')
router.post('/service', Auth.user, Service.addService)

// Export the Router
module.exports = router 