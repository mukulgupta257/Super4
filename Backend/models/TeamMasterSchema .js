const mongoose = require('mongoose')
const schema = mongoose.Schema

const TeamMasterSchema = new schema({
    TeamName:{
        type: String
    },
    user_Id:{
        type: String
    },

    is_Delete: false,

    status: true,

    date_time:{
        type: Date,
    },

    

},{timestamps: true})

const TeamSchema = mongoose.model('TeamMaster',userSchema)
module.exports = TeamMaster