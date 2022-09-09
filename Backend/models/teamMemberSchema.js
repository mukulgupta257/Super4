const mongoose = require("mongoose");
const schema = mongoose.Schema


const teamMemberSchema = new schmea({
    teamMemberType:{
        type: String
    },

    user_Id:{
        type: String
    },

    is_deleted: false,

    status: true,

    date_time: {
        type: Date
    },

    CreatedBy:{
         type: Date, 
     required: true, 
      default: Date.now 
    },

    UpdateBY:{
        type: Date 
    },

    UpdateDate: {
        type: Date 
    }
}, {timestamps: true})

const teammember = mongoose.model('teammember',userSchema)
export default teammember
