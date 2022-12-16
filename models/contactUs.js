const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({

    Name: {
        type : String,
    },
    
    address: {
        type : String,
    },
    phone : {
        type : Number,
    },
    message :{
        type : String,
        
    },

});

const contact = mongoose.model("contact",contactSchema)
module.exports = contact;