const mongoose = require('mongoose');

const authorschema = new mongoose.Schema({
    name:{
        type:"string",
        require:true,
        trim: true
    },

    email:{
        type:"string",
        require:true
    }, 

    city:{
        type:"string",
        require:true
    },

    // books: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Book'
    //   }],

    phone:{
        type:Number,
        require:true
    }

})

module.exports = mongoose.model('author',authorschema)