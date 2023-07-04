const mongoose  = require('mongoose');


const authorschema = new mongoose.Schema({
    name:{
        type: "string",
        required: true
      },
      email:{
        type: "string",
        required: true
      },
      phone:{
        type: "string",
        required: true
      },
      city:{
        type: "string",
        required: true
      }

})

module.exports = mongoose.model('author',authorschema)
