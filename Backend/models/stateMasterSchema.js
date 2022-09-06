const mongoose = require('mongoose');
const schema = mongoose.schemma

const stateMasterSchema = new Schema({
    state_Name: {
        type: String
    },

    state_Code_Gst: {
        type: String
    },

    CountryId:{
        type: String
    },

    User_Id:{
        ref: type.Schema.User_Id,
        type: String
    },

    IsDelete: false,

    Status: true,

    CreatedBy:{
        type: Date, 
    required: true, 
    default: Date.now 
    },

    activeDate:{
        type: String
    },

    activeStatus: true


},{timestamps:true})
const sateMaster = mongoose.model('stateMaster',)
module.exports = stateMaster