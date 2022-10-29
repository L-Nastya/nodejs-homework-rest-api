const validateBody = schema => {
    const func = async(req, res, next)=> {
        const {error} = schema.validate(req.body);
        if(error) {
            return res.status(400).json({
                message: "missing required field"
            })
        }
        next()
    }

    return func;
}

module.exports = validateBody