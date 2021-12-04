const express=require('express')

const SupplyRouter=express.Router()

const supplyrequest=require('../models/SupplyRequestModel')

SupplyRouter.route('/getrequest/:email').get((req,res,next) => {
    supplyrequest.find({email: req.params.email})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/json')
        res.send(resp);
    })
    .catch((err) => {
        next(err)
    })
})

SupplyRouter.route('/all').get((req,res,next) => {
    supplyrequest.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/json')
        res.send(resp);
    })
    .catch((err) => {
        next(err)
    })
})

SupplyRouter.route('/addrequest').post((req,res,next) => {
    try{
        supplyrequest.create(req.body)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('content-type', 'text/json')
            res.send(resp);
        })
        .catch((err) => {
            next(err)
        })
    }
    catch(err)
    {
        next(err)
    }
})

SupplyRouter.route('/update/:id').put((req,res,next) => {
    supplyrequest.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true })
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/json')
        res.send(resp);
    })
    .catch((err) => {
        next(err)
    })
})

SupplyRouter.route('/delete/:id').delete((req,res,next) => {
    supplyrequest.findByIdAndDelete(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/json')
        res.json({'Message':'data was deleted successfully'});
    })
    .catch((err) => {
        next(err)
    })
})

module.exports=SupplyRouter