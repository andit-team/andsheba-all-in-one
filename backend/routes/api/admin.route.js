const express = require('express') 
const router = express.Router() 
const Auth = require("../../auth/auth") 

// Admin Controller--------------------------
const Admin = require('../../controllers/admin/admin.controller') 
router.post('/create', Admin.createAdmin) 
router.post('/login', Admin.adminLogin) 


// Export the Router
module.exports = router 