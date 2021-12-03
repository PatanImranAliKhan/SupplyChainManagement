const express=require('express')

const UserRouter=express.Router()

const user=require('../models/userModel')

UserRouter.route('/login/:email/:password').get((req,res,next) => {
    user.find({email: req.params.email, password: req.params.password})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/json')
        if(resp.length==0)
        {
            res.statusCode = 403;
            res.json({'Error':'Invalid credentials'})
        }
        else
        {
            res.send(resp);
        }
    })
    .catch((err) => {
        next(err)
    })
})

UserRouter.route('/all').get((req,res,next) => {
    user.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/json')
        if(resp.length==0)
        {
            res.statusCode = 403;
            res.json({'Error':'No users had been registered'})
        }
        else
        {
            res.send(resp)
        }
    })
    .catch((err) => {
        next(err)
    })
})

UserRouter.route('/adduser').post((req,res,next) => {
    try{
        user.create(req.body)
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

UserRouter.route('/updateuser/:email').put((req,res,next) => {
    user.findOneAndUpdate({email: req.params.email}, {
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

UserRouter.route('/deleteuser/:email').delete((req,res,next) => {
    user.findOneAndDelete({email: req.params.email})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/json')
        res.json({'Message':'data was deleted successfully'});
    })
    .catch((err) => {
        next(err)
    })
})

module.exports=UserRouter