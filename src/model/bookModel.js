const mongoose  = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

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
        type:ObjectId,
        require:true
    },
    book_price:{
        type:Number,
        require:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})

    module.exports = mongoose.model('books',bookschema)






