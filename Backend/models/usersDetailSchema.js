const mongoose = require("mongoose");
const schema = mongoose.Schema

const usersDetailSchema = new Schema({
    user_Id:{

    },
user_Name:{
    type: String
},
mobile_No:{
    type: String
},
Address:{
    type: String
},

state_Id:{
    type: String
},
email_Id:{
    type: String
},

pan_No:{
    type: String
},
bank_Name:{
    type: String
},
bank_account_No:{
    type: String
},

bank_IFSC_Code:{
    type: String
},

bank_Address:{
    type: String
},

user_Img:{
    type: String
},
refer_Code:{
    type: String
},
upload_TDS:{
    type: String
},

is_Delete: false,

Status: true,

DTS:{
    type: Date, 
    required: true, 
    default: Date.now 
},
created_By:{
    type: Date, 
    required: true, 
    default: Date.now 
},
active_Date: {
    type: Date 
},
Active_Status:{
    type: Date
}



},{timestamps:true})

const userDetail = mongoose.model('userDetail',)
module.exports = userDetail