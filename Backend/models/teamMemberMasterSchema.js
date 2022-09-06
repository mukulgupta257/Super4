const mongoose = require("mongoose");
const schema = mongoose.Schema

const teamMemberMasterSchema = new schema({
    teamId:{
        type: String
    },

    teamMemberTypeId:{
        type: String
    },

    TeamMemberName: {
        type: String
    },

    UserId:{
        type: String
    },

    IsDelete: false,

    Status: true,

    date_time: {
        type: Date
    },

    CreatedBy:{
        type: Date, 
        required: true, 
        default: Date.now 
    },

    UpdateBY:{
        type: date 
    },

    UpdateDate: {
        type: date 
    }
},{timestamps: true})
const teammemberMaster = mongoose.model('teammemberMaster')
module.exports = teammemberMaster