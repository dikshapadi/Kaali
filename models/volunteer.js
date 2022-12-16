const mongoose = require("mongoose");
const volunteerSchema = new mongoose.Schema({

    Name: {
        type : String,
        required : true
    },
    Category: [{
        type : String,
        required : true
    }],
    address: {
        type : String
    },
    phone : {
        type : Number,
    },
    date :{
        type : Date,
        required: true
    },

});

const volunteer = mongoose.model("volunteer",volunteerSchema)
module.exports = volunteer;