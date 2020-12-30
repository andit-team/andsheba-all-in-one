const express = require('express') 
const router = express.Router() 
const Auth = require('../../auth/auth') 

// Customer Controller -------------------------
const Customer = require('../../controllers/customer/customer.controller')
router.post('/signup', Customer.signUp)
router.post('/login', Customer.login)
router.post('/verify', Customer.verifyCustomer)

// Service for Customer---------------------------
const Service = require('../../controllers/customer/service.controller')
router.get('/search', Service.searchService)
router.get('/search/:_id', Service.getOneService)

// Render Data to Home Page ------------------------
const HomePageData = require('../../controllers/customer/homepage.controller')
router.get('/homepage', HomePageData.sendHomePageData)
router.post('/autocomplete-homepage', HomePageData.autoCompleteHomePage)

// Export the Router
module.exports = router 