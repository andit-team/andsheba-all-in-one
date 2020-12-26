const express = require('express') 
const router = express.Router() 
const Auth = require('../../auth/auth') 

// Agent Controller--------------------------
const Agent = require('../../controllers/agent/agent.controller') 
router.post('/signup', Agent.signUpAgent)
router.post('/login', Agent.loginAgent)
router.post('/verify', Agent.verifyAgent)


// Export the Router
module.exports = router 