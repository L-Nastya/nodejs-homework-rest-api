const {Contact, addSchema} = require("../../models/contact")

const addContact = async (req, res, next) => {
        const {error} = addSchema.validate(req.body);
        if(error) {
             return res.status(400).json({
                message: "missing required name field"
            })
        }
        const result = await Contact.create(req.body);
        res.status(201).json(result)
}

module.exports = addContact;