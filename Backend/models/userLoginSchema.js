const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    user_Id: { type: String },
    UserName: { type: String, required: true },
    Password: { type: String, required: true },

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
  },
  { timestamps: true }
);

const userLogin = mongoose.model("userLogin", UserSchema);
export default userLogin;

