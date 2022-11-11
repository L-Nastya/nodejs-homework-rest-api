const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegax = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const userSchema = new Schema({
    password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: emailRegax,
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: {
    type: String,
    default: null,
  },
    avatarURL: {
      type: String,
      required: true,
  },
  verify: {
        type: Boolean,
        default: false,
    },
  verificationToken: {
        type: String,
        required: [true, 'Verify token is required'],
    }
}, { versionKey: false, timestamps: true })

const authSchema = Joi.object({
    email: Joi.string().pattern(emailRegax).required(),
    password: Joi.string().required(),
});


const verifyEmailSchema = Joi.object({
    email: Joi.string().pattern(emailRegax).required(),
});

const User = model("user", userSchema)


module.exports = {
    User,
    authSchema,
    verifyEmailSchema
}