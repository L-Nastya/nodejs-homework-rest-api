const jwt = require("jsonwebtoken");

const {User} = require("../models/user");


const {SECRET_KEY} = process.env;

const authenticate = async(req, res, next) => {
    try {
        const {authorization = ""} = req.headers;
        const [bearer, token] = authorization.split(" ");
        if(bearer !== "Bearer" || !token) {
           return res.status(401).json({
                message: "Not authorized"
            }) 
        }
        const {id} = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if(!user || user.token !== token) {
            return res.status(401).json({
                message: "Not authorized"
            }) 
        }
        req.user = user;
        next()
    }
    catch(error) {
        if(!error.status) {
            error.status = 401;
        }
        next(error);
    }
}

module.exports = authenticate;