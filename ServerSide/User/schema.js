var mongoose = require("mongoose");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

/**
 * @username => User's username
 * @first_name => User's first name
 * @last_name => User's last name
 * @email => User's email
 * @role => restricted for most users
 * @contacts => User's contacts like (number , linkedIn , etc ..)
 * @courses => The courses made by user
 * @comments => The comments made by user
 */

var UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      trim:true
    },
    last_name: {
      trim:true,
      type: String,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    },
    username: {
      trim:true,
      type: String,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    },
    birth_date:{type:String},
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
    },
    contacts: [],
    bio: String,
    profileImg: { contentType: String },
    avatar: {
      fieldname: String,
      originalname: String,
      encoding: String,
      mimetype: String,
      destination: String,
      filename: String,
      path: String,
      size: Number,
      data: Buffer,
    },
    hash: String,
    salt: String,
    interests: [{ required: false }],
  },
  { timestamps: true }
);

UserSchema.methods.generateJWT = function () {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);
  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000),
    },
    config.secret
  );
};
UserSchema.methods.toJSON = function () {
  return {
    first_name: this.first_name,
    last_name: this.last_name,
    username: this.username,
    email: this.email,
    avatar: this.avatar,
    birth_date:this.birth_date,
    _id: this._id,
    bio: this.bio,
    interests: this.interests,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

UserSchema.methods.toAuthJSON = function () {
  //TODO Clean
  return {
    first_name: this.first_name,
    last_name: this.last_name,
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
    bio: this.bio,
    avatar: this.avatar,
    _id: this._id,
    interests: this.interests,
  };
};

UserSchema.methods.initInfo = function(info){
  this.first_name = info.first_name;
  this.email = info.email;
  this.last_name = info.last_name;
  this.username = info.username;
  this.token = this.generateJWT();
  this.setPassword(info.password);
}

UserSchema.methods.assignInfo = function (info) {
  Object.keys(info).map((key) => {
    if (key === "password") {
      return this.setPassword(info.password);
    }
    if (key === "avatar") {
      return;
    }
    this[key] = info[key];
  });
  this.token = this.generateJWT();
};

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

UserSchema.methods.validPassword = function (password) {
  var hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

module.exports = UserSchema = mongoose.model("User", UserSchema);
