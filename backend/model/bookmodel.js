const mongoose = require('mongoose');
// const objectId = mongoose.schema.type.objectId
const bookschema = new mongoose.Schema({
    book_name:{
        type:"string",
        require:true
    },

    book_category:{
        type:"string",
        require:true
    },

    author:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    
    book_price:{
        type:Number,
        require:true
    },
    
    book_image:{
        public_id: String,
        url: String,
    },
    
    isDeleted:{
        type:Boolean,
        default:false
    }
 
}) 

module.exports = mongoose.model('books',bookschema)