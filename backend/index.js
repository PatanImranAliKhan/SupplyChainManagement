const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect('mongodb+srv://SupplyChainManagement:supplychainmanagement@firstcluster.fcybv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true , useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => console.log("connected to the mongodb"));

const app = express();

app.use(express.json());

app.use(cors());
const port = process.env.port || 2500;

const route=require('./routes/userRoute')
const feedbackroute = require('./routes/FeedbackRoute')
const friendsroute=require('./routes/FriendsRoute')

app.use('/user',route)
app.use('/feedback',feedbackroute)
app.use('/friendrequest',friendsroute)



app.listen(port, () => console.log(`running on the server ${port}`));