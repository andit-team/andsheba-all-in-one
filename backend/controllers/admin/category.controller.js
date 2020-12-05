/**
 * Category Crud Controller By Admin -----------------------------
 */
const RESPONDER = require("../../responder/responder") 
const Category = require('../../models/category.model')
exports.createCategory = (req, res, next) => {

    let categoryData = {
        name: req.body.name,
        image: req.body.image
    }
    if(req.body.parent !== ''){
        categoryData = {
            ...categoryData,
            parent: req.body.parent
        }
    }
   const newCategory = new Category(categoryData)

   newCategory.save().then( result => {
       if(result){
           const data = {
            data: result,
            error: false,
            msg: 'Category Created Successfully'
        }
        RESPONDER.response(res, 200, data)
       }else{
           const data = {
            error: true,
            msg: 'Category Not Created'
        }
        RESPONDER.response(res, 200, data)
       }
   }).catch( error => {
    const data = {
        error: true,
        msg: 'Category Name Must be Unique'
    }
    RESPONDER.response(res, 200, data)
   })

}

exports.updateCategory = (req, res, next) => {

   let newCategory = {
        name: req.body.name,
        image: req.body.image
   }

   if(req.body.parent !== ''){
       newCategory = {
           ...newCategory,
           parent: req.body.parent
       }
   }

   Category.updateOne({_id: req.params._id}, newCategory).then( result => {
       
       if(result.n > 0){
           const data = {
            error: false,
            msg: 'Category Updated Successfully'
        }
        RESPONDER.response(res, 200, data)
       }else{
           const data = {
            error: true,
            msg: 'Category Not Updated'
        }
        RESPONDER.response(res, 200, data)
       }
   }).catch( error => {
       const data = {
            error: true,
            msg: 'Category Not Updated'
        }
        RESPONDER.response(res, 200, data)
   })
           
}

exports.deleteCategory = (req, res, next) => {

    Category.deleteMany({parent: req.params._id}).then(deleteResult => {

        Category.deleteOne({_id:req.params._id}).then( result => {
            if(result.n > 0){
                const data = {
                 error: false,
                 msg: 'Category Deleted Successfully'
             }
             RESPONDER.response(res, 200, data)
            }else{
                const data = {
                 error: true,
                 msg: 'Category Not Deleted'
             }
             RESPONDER.response(res, 200, data)
            }
        }).catch( error => {
            const data = {
             error: true,
             msg: 'Category Not Deleted'
         }
         RESPONDER.response(res, 200, data)
        })

    }).catch(deleteError => {
        const data = {
            error: true,
            msg: 'Category Not Deleted'
        }
        RESPONDER.response(res, 200, data)
    })       
}

exports.getAllCategory = (req, res, next) => {

    let query = {
        name: {$regex: req.query.key, $options: 'i'}
    }
    if(req.query.parent !== ''){
        query = {
            ...query,
            parent: req.query.parent
        }
    }else{
        query = {
            ...query,
            parent: null
        }
    }
    const options = {
        page: +req.query.page || 1,
        limit: +req.query.pagesize || 10,
        sort: {createdAt: -1}
    }
   Category.paginate(query,options).then( result => {
       if(result){
           const data = {
            data: result,
            error: false,
            msg: 'Category Got Successfully'
        }
        RESPONDER.response(res, 200, data)
       }else{
           const data = {
            error: true,
            msg: 'Category Not Found'
        }
        RESPONDER.response(res, 200, data)
       }
   }).catch( error => {
       const data = {
        error: true,
        msg: 'Category Not Found'
    }
    RESPONDER.response(res, 200, data)
   })
           
}

exports.getAllCategoryDropDown = (req, res, next) => {

    let query = {
        parent: null
    }
    if(req.query.parent !== ''){
        query = {
            ...query,
            parent: req.query.parent
        }
    }

   Category.find(query,{name: 1}).then( result => {
       if(result){
           const data = {
            data: result,
            error: false,
            msg: 'Category Got Successfully'
        }
        RESPONDER.response(res, 200, data)
       }else{
           const data = {
            error: true,
            msg: 'Category Not Found'
        }
        RESPONDER.response(res, 200, data)
       }
   }).catch( error => {
       const data = {
        error: true,
        msg: 'Category Not Found'
    }
    RESPONDER.response(res, 200, data)
   })
           
}

exports.getOneCategory = (req, res, next) => {

   Category.findById(req.params._id).then( result => {
       if(result){
           const data = {
            data: result,
            error: false,
            msg: 'Category Got Successfully'
        }
        RESPONDER.response(res, 200, data)
       }else{
           const data = {
            error: true,
            msg: 'Category Not Found'
        }
        RESPONDER.response(res, 200, data)
       }
   }).catch( error => {
       const data = {
        error: true,
        msg: 'Category Not Found'
    }
    RESPONDER.response(res, 200, data)
   })
           
}