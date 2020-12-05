var express = require('express')
let router = express.Router() 

// Admin Routes------------------
let admin = require('./api/admin.route') 
router.use('/admin', admin) 

// Geo Routes------------------
let geo = require('./api/geo.route') 
router.use('/geo', geo) 


module.exports = router 