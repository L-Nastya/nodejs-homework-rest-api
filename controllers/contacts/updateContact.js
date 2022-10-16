const {Contact, addSchema} = require("../../models/contact")


const updateContact = async (req, res, next) => {

        const {error} = addSchema.validate(req.body);
        if(error) {
               return res.status(400).json({
                message: "missing fields"
            })
        }
        const {contactId} = req.params;
        const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
        if(!result){
             return res.status(404).json({
                message: "Not found"
            })
        }
        res.json(result)
}

module.exports = updateContact;