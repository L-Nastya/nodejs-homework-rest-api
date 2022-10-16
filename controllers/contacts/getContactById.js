const {Contact} = require("../../models/contact")

const getContactById = async (req, res) => {
        const {contactId} = req.params;
        const result = await Contact.findById(contactId);
    if (!result) {
            return res.status(404).json({
                message: "Not found"
            })
    }
        res.json(result)

}

module.exports = getContactById;