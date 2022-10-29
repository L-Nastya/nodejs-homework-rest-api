const bcryptjs = require("bcryptjs")

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
    const result = await User.create({email, password: hashPassword});
    res.status(201).json({
        email: result.email,
        subscription: result.subscription,
        })
    
}

module.exports = register;