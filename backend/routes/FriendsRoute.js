const express=require('express')

const friendRouter=express.Router()

const friends=require('../models/FriendsModel')

friendRouter.route('/friendRequests/:email').get((req,res,next) => {
    friends.find({ $or:[ {'requestedBy':req.params.email}, {'requestedTo':req.params.email}]})
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

friendRouter.route('/all').get((req,res,next) => {
    friends.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/json')
        if(resp.length==0)
        {
            res.statusCode = 403;
            res.json({'Error':'No friendss had been registered'})
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

friendRouter.route('/addfriends').post((req,res,next) => {
    try{
        friends.create(req.body)
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

friendRouter.route('/updatefriend/:requestedBy/:requestedTo').put((req,res,next) => {
    friends.findOneAndUpdate({requestedBy: req.params.requestedBy,requestedTo: req.params.requestedTo}, {
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

friendRouter.route('/deletefriends/:email').delete((req,res,next) => {
    friends.findOneAndDelete({ $or:[ {'requestedBy':req.params.email}, {'requestedTo':req.params.email}]})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/json')
        res.json({'Message':'data was deleted successfully'});
    })
    .catch((err) => {
        next(err)
    })
})

module.exports=friendRouter