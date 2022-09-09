const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    user_Id: { type: String },
    UserName: { type: String, required: true, index: true, unique: true },
    Password: { type: String, required: true },
    mobile_No: { type: String },

    IsDelete: false,

    Status: true,

    date_time: { type: Date },
    createdBy: {
      type: Date,
      required: true,
      default: Date.now,
    },
    activeDate: { type: Date },
    activeStatus: { type: Date },

    Address: { type: String },

    state_Id: { type: String },
    email_Id: { type: String },

    pan_No: { type: String },
    bank_Name: { type: String },
    bank_account_No: { type: String },

    bank_IFSC_Code: { type: String },

    bank_Address: { type: String },

    user_Img: { type: String },
    refer_Code: { type: String },
    upload_TDS: { type: String },

    is_Delete: false,

    Status: true,

    DTS: { type: Date, required: true, default: Date.now },
    created_By: {
      type: Date,
      required: true,
      default: Date.now,
    },
    active_Date: { type: Date },
    Active_Status: {type: Date},
  },

  { timestamps: true }
);

const User = mongoose.model("userLogin", UserSchema);
export default User;
