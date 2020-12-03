var express = require('express')
let router = express.Router() 

// Admin Routes------------------
let admin = require('./api/admin.route') 
router.use('/admin', admin) 


module.exports = router 