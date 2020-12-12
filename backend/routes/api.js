var express = require('express')
let router = express.Router() 

// Admin Routes------------------
let admin = require('./api/admin.route') 
router.use('/admin', admin) 

// Geo Routes------------------
let geo = require('./api/geo.route') 
router.use('/geo', geo) 

// Pro Routes------------------
let Pro = require('./api/pro.route') 
router.use('/pro', Pro) 

// Customer Routes------------------
let Customer = require('./api/customer.route') 
router.use('/customer', Customer) 


module.exports = router 