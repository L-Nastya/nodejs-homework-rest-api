const bcryptjs = require("bcryptjs")
const gravatar = require("gravatar")

const { User } = require("../../models/user")

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (user) {
        return res.status(409).json({
                message: "Email in use"
            })
    }
    const hashPassword = await bcryptjs.hash(password, 10)
    const avatarURL = gravatar.url(email);
    const result = await User.create({email, password: hashPassword, avatarURL});
    res.status(201).json({
        email: result.email,
        subscription: result.subscription,
        })
    
}

module.exports = register;