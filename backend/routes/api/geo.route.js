const express = require('express') 
const router = express.Router() 

// Geo Controller--------------------------
const GEO = require('../../controllers/geo/geo.controller') 
router.post('/generate', GEO.generateAllGeo) 
router.get('/get-divisions', GEO.getDivisions)
router.get('/get-districts', GEO.getDistricts)
router.get('/get-municipals', GEO.getMunicipals)
router.get('/get-wards', GEO.getWards)
router.get('/get-upazilas', GEO.getUpazillas)
router.get('/get-unions', GEO.getUnions)
router.get('/get-villages', GEO.getVillages)

// Export the Router
module.exports = router 