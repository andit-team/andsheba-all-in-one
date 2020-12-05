const express = require('express') 
const router = express.Router() 

// Pro Controller--------------------------
const Pro = require('../../controllers/pro/pro.controller') 
router.post('/signup', Pro.signUpPro) 

// Export the Router
module.exports = router 