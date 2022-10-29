const {Contact} = require("../../models/contact")

const listContacts = async (req, res, next) => {
        const { _id: owner } = req.user;
        const {page = 1, limit = 20, ...filter} = req.query;
        const skip = (page - 1)* limit;
        const result = await Contact.find({owner, ...filter}, "name email phone", {skip, limit}).populate("owner", "email");
        res.json(result)
}

module.exports = listContacts;
