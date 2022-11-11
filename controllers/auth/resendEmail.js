const {User} = require("../../models/user")

const { sendEmail, createVerifyEmail} = require("../../helpers")

const resendEmail = async(req, res)=> {
    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user) {
         return res.status(404).json({
                message: "Not found"
            })
    }

    if(user.verify) {
         return res.status(400).json({
                message: "Verification has already been passed"
            })
    }

    const mail = createVerifyEmail(email, user.verificationToken);

    await sendEmail(mail);

    res.json({
        message: "Verification email sent"
    })
}

module.exports = resendEmail;