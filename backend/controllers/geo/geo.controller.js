/**
 * All Geo Collections------------------------------------------
 */

 const division = require('../../models/division.model')
 const district = require('../../models/districts.model')
 const municipal = require('../../models/municipals.model')
 const upazila = require('../../models/upazila.model')
 const union = require('../../models/union.model')
 const village = require('../../models/village.model')
 const ward = require('../../models/ward.model')

 const division_json = require('../../geo_json/divisions.json')
 const district_json = require('../../geo_json/districts.json')
 const municipal_json = require('../../geo_json/municipals.json')
 const upazila_json = require('../../geo_json/upazilas.json')
 const union_json = require('../../geo_json/unions.json')
 const village_json = require('../../geo_json/villages.json')
 const ward_json = require('../../geo_json/wards.json')

 const RESPONDER = require('../../responder/responder') 

 exports.generateAllGeo = async(req, res, next)=> {


    try{

        let divisionResult = await division.insertMany(division_json)
        if(!divisionResult){
            const data = {
                error: true,
                msg: 'Division Data Adding Failed'
            }
            RESPONDER.response(res, 200, data)
        }
        let districtResult = await district.insertMany(district_json)
        if(!districtResult){
            const data = {
                error: true,
                msg: 'District Data Adding Failed'
            }
            RESPONDER.response(res, 200, data)
        }
        let municipialResult = await municipal.insertMany(municipal_json)
        if(!municipialResult){
            const data = {
                error: true,
                msg: 'Municipal Data Adding Failed'
            }
            RESPONDER.response(res, 200, data)
        }
        let upazilaResult = await upazila.insertMany(upazila_json)
        if(!upazilaResult){
            const data = {
                error: true,
                msg: 'Upazilla Data Adding Failed'
            }
            RESPONDER.response(res, 200, data)
        }
        let unionResult = await union.insertMany(union_json)
        if(!unionResult){
            const data = {
                error: true,
                msg: 'Union Data Adding Failed'
            }
            RESPONDER.response(res, 200, data)
        }
        let villageResult = await village.insertMany(village_json)
        if(!villageResult){
            const data = {
                error: true,
                msg: 'Village Data Adding Failed'
            }
            RESPONDER.response(res, 200, data)
        }
        let wardResult = await ward.insertMany(ward_json)
        if(!wardResult){
            const data = {
                error: true,
                msg: 'Ward Data Adding Failed'
            }
            RESPONDER.response(res, 200, data)
        }

        const data = {
            error: false,
            msg: 'Geo Data added successfully'
        }

        RESPONDER.response(res, 200, data)



    }catch(error){

        const data = {
            error: true,
            msg: 'Data Adding Failed'
        }

        RESPONDER.response(res, 200, data)

    }


 }


 exports.getDivisions = async(req, res, next)=> {

    try{

        let divisionData = await division.find() 
        if(!divisionData){

            let data = {
                error: true,
                msg: 'Problem in finding Division',
                data: []
            }
            RESPONDER.response(res, 200, data)

        }

        let data = {
            error: false,
            msg: 'Division Data Get Successfully',
            data: divisionData
        }
        RESPONDER.response(res, 200, data)

    }catch(error){
        let data = {
            error: true,
            msg: 'Problem in finding Division',
            data: []
        }
        RESPONDER.response(res, 200, data)
    }


 }


 exports.getDistricts = async(req, res, next)=> {


    try{

        let districtData = await district.find({division_id: req.query.division_id}) 
        if(!districtData){

            let data = {
                error: true,
                msg: 'Problem in finding district',
                data: []
            }
            RESPONDER.response(res, 200, data)

        }

        let data = {
            error: false,
            msg: 'district Data Get Successfully',
            data: districtData
        }
        RESPONDER.response(res, 200, data)

    }catch(error){
        let data = {
            error: true,
            msg: 'Problem in finding district',
            data: []
        }
        RESPONDER.response(res, 200, data)
    }


}


exports.getUpazillas = async(req, res, next)=> {

    try{

        let upazilaData = await upazila.find({district_id: req.query.district_id}) 
        if(!upazilaData){

            let data = {
                error: true,
                msg: 'Problem in finding upazila',
                data: []
            }
            RESPONDER.response(res, 200, data)

        }

        let data = {
            error: false,
            msg: 'upazila Data Get Successfully',
            data: upazilaData
        }
        RESPONDER.response(res, 200, data)

    }catch(error){
        let data = {
            error: true,
            msg: 'Problem in finding upazila',
            data: []
        }
        RESPONDER.response(res, 200, data)
    }


}


exports.getUnions = async(req, res, next)=> {

    try{

        let unionData = await union.find({upazila_id: req.query.upazilla_id}) 
        if(!unionData){

            let data = {
                error: true,
                msg: 'Problem in finding union',
                data: []
            }
            RESPONDER.response(res, 200, data)

        }

        let data = {
            error: false,
            msg: 'union Data Get Successfully',
            data: unionData
        }
        RESPONDER.response(res, 200, data)

    }catch(error){
        let data = {
            error: true,
            msg: 'Problem in finding union',
            data: []
        }
        RESPONDER.response(res, 200, data)
    }


}

exports.getVillages = async(req, res, next)=> {

    try{

        let villageData = await village.find({union_id: req.query.union_id}) 
        if(!villageData){

            let data = {
                error: true,
                msg: 'Problem in finding village',
                data: []
            }
            RESPONDER.response(res, 200, data)

        }

        let data = {
            error: false,
            msg: 'village Data Get Successfully',
            data: villageData
        }
        RESPONDER.response(res, 200, data)

    }catch(error){
        let data = {
            error: true,
            msg: 'Problem in finding village',
            data: []
        }
        RESPONDER.response(res, 200, data)
    }

}


exports.getMunicipals = async(req, res, next)=> {

    try{

        let municipalData = await municipal.find({district_id: req.query.district_id}) 
        if(!municipalData){

            let data = {
                error: true,
                msg: 'Problem in finding municipal',
                data: []
            }
            RESPONDER.response(res, 200, data)

        }

        let data = {
            error: false,
            msg: 'municipal Data Get Successfully',
            data: municipalData
        }
        RESPONDER.response(res, 200, data)

    }catch(error){
        let data = {
            error: true,
            msg: 'Problem in finding municipal',
            data: []
        }
        RESPONDER.response(res, 200, data)
    }


}


exports.getWards = async(req, res, next)=> {

    try{

        let wardData = await ward.find({municipal_id: req.query.municipal_id}) 
        if(!wardData){

            let data = {
                error: true,
                msg: 'Problem in finding ward',
                data: []
            }
            RESPONDER.response(res, 200, data)

        }

        let data = {
            error: false,
            msg: 'ward Data Get Successfully',
            data: wardData
        }
        RESPONDER.response(res, 200, data)

    }catch(error){
        let data = {
            error: true,
            msg: 'Problem in finding ward',
            data: []
        }
        RESPONDER.response(res, 200, data)
    }


}