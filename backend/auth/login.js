exports.login = (req, res, next) => {
    const jwt = require('jsonwebtoken');
    const dotenv = require('dotenv');
    const email = req.body.email;
    const password = req.body.password;
    

    if (!email || !password) {
        return next(res.status(401).json({
            message:"Invalid email or password"
        }))
    }

    dotenv.config();
    

    const token = jwt.sign({ email }, process.env.SECRET_TOKEN, { expiresIn: '1800s' })

    res.status(200).json({
        token
    })


}