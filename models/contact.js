const { Schema, SchemaTypes, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = new Schema(  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
  },
     owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    }
  }, {versionKey: false, timestamps: true})


const addSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.base': `"name" should be a type of 'string'`,
        'any.required': `"name" is a required field`
      }),
    email: Joi.string().required().messages({
        'string.base': `"email" should be a type of 'string'`,
        'any.required': `"email" is a required field`
      }),
    favorite: Joi.boolean(),
    phone: Joi.string().required().messages({
        'string.base': `"phone" should be a type of 'string'`,
        'any.required': `"phone" is a required field`
      }),
   
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
})

const Contact = model("contact", contactSchema)

module.exports = {
    Contact,
    addSchema,
    updateFavoriteSchema,
}