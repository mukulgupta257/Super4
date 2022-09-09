const mongoose = require("mongoose");
const schema = mongoose.schema


const transationSchema = new schema({
    user_id:{
        ref: type.Schema.User_Id,
        type: String
    },

    trns_Date:{
        type: String
    },

    tran_Invoice_No:{
        type: String
    },

    Amount:{
        type: String
    },

    Remark:{
        type: String
    },

    match_Id:{
        type: String
    },


    tran_Mode:{
        type: String   
    },

    tran_Type:{
        type: String
    },

    match_Serise_Id:{
        type: String
    },

    is_Deleted: false,

    status: true,

    date_Time: {
        type: Date
    },

   
    created_by:{ 
        type: Date, 
        required: true, 
        default: Date.now 
    },

    active_Date:{
        type: Date 
    },

    active_Status:{
        type: Date 
    }
    
},{timestamps: true})


const transation = mongoose.model('transation',)
export default transation