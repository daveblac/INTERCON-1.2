import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: [true, "First name is required"],
    },
    lastName: {
        type: String,
        required: [true, "Last Name is Required!"],
      },
      email: {
        type: String,
        required: [true, " Email is Required!"],
        unique: true,
        validate: validator.isEmail,
      },

      password: {
        type: String,
        required: [true, "Password is Required!"],
        minlength: [6, "Password length should be atleast 6 character"],
        select: true,
      },
      accountType: { type: String, default: "seeker" },
      contact: { type: String },
      location: { type: String },
      profileUrl: { type: String },
      cvUrl: { type: String },
      jobTitle: { type: String },
      about: { type: String },
      verified: { type: Boolean, default: true },
    },
    { timestamps: true }
  );

  // middelwares
userSchema.pre("save", async function () {
    if (!this.isModified) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  
  //compare password
  userSchema.methods.comparePassword = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
  };
  
  //JSON WEBTOKEN
  userSchema.methods.createJWT = function () {
    return JWT.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
  };
  
  const Users = mongoose.model("Users", userSchema);
  
  export default Users;