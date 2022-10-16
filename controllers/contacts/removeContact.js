const {Contact} = require("../../models/contact")

const removeContact = async (req, res, next) => {
        const {contactId} = req.params;
        const result= await Contact.findByIdAndDelete(contactId);
          if(!result){
              return res.status(404).json({
                message: "Not found"
            })
    }
       res.json({
            message: "contact deleted"
        })
 
}

module.exports = removeContact;