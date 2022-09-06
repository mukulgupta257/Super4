const mongoose = require('mongoose');
const schema = mongoose.Schema


const countryMasterSchema = new schema({
    CountryName:{
        type: String
    },

    CountryCode:{
        type: String
    },

    User_Id:{
        ref: type.Schema.User_Id,
        type: String
    },
    
    IsDelete: false,

    Status: true,


}, {timestamps: true})
const countryMaster = mongoose.model('countryMaster',)
module.exports = countryMaster