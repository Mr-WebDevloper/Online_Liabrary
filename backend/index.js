const express = require ('express');

const bodyParser = require ('body-parser');

const app = express();
const port = 3000

app.use(bodyParser.json());
app.use (bodyParser.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log (`Server is Running on ${port}`)
})




const cloudinary = require ('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dcdqy5hba', 
    api_key: '468262222988858', 
    api_secret: 'CW117swXGof2QBPnaf43yti9b2k',
    secure: true
  });

const fileUpload = require('express-fileupload')
const path= require('path');
const mongoose = require ('mongoose')
mongoose.connect("mongodb+srv://ravikumar123:8369782692ravi@cluster0.qk3oh.mongodb.net/user?authSource=admin&replicaSet=atlas-emoll9-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true", {useNewUrlParser: true})
.then(() => console.log('mongodb running on 27017'))
.catch(err => console.log(err))

const route = require('./route/route');

app.use('/', route);

app.use(fileUpload({ debug : true,
    tempFileDirectory : path.join(__dirname,'./temp'),
    useTempFiles : true}))





