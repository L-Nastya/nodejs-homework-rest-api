const {isValidObjectId} = require("mongoose")

const isValidId = (req, res, next) => {
    const {contactId} = req.params;
    const result = isValidObjectId(contactId);
    if(!result) {
        return res.status(400).json({
                message: "Invalid id format"
            })
    }
    next()
}

module.exports = isValidId