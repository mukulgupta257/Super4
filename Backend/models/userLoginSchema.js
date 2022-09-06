const mongoose = require("mongoose");
const teammember = require("./TeamMemberTypeMasterSchema");
const schema = mongoose.Schema


const userLoginSchema  = new schema({
  
user_Id: {
    type: String
},
UserName:{
    type:String
},
Password:{
    type: String
},

IsDelete: false,

Status: true,

date_time: {
    type: Date
},
createdBy:{
    type: Date, 
    required: true, 
    default: Date.now 
},
activeDate: {
    type: Date
},
activeStatus:{
    type: Date
},

}, {timestamps:true})

const userLogin = mongoose.model('userLogin', users)
module.exports = userLogin