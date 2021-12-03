const express=require('express')

const Feedback = require('../models/FeedbackModel')

const feedbackRouter=express.Router()

feedbackRouter.route('/all').get((req,res,next) => {
    Feedback.find({})
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

feedbackRouter.route('/get/:email').get((req,res,next) => {
    Feedback.find({email: req.params.email})
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


feedbackRouter.route('/add').post((req,res,next) => {
    try{
        Feedback.create(req.body)
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

feedbackRouter.route('/update/:email').put((req,res,next) => {
    Feedback.findOneAndUpdate({email: req.params.email}, {
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

feedbackRouter.route('/delete/:email').delete((req,res,next) => {
    Feedback.findOneAndDelete({email: req.params.email})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/json')
        res.json({'Message':'data was deleted successfully'});
    })
    .catch((err) => {
        next(err)
    })
})

module.exports=feedbackRouter