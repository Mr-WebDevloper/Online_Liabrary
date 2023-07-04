const express = require('express');

const app = express();

const port = 3000;


const route = require('./route/route')

let bodyParser =  require ('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})


const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://ravikumar123:8369782692ravi@cluster0.qk3oh.mongodb.net/demo?authSource=admin&replicaSet=atlas-emoll9-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true", {useNewUrlParser: true})
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

    app.use('/', route);