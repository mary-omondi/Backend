const db = require('../models')
const jwt = require ('jsonwebtoken')

exports.signup = async function(req, res, next) {
    try {
        let user = await db.user.create(res.body); 
        let {id, uesrname, profileImageUrl} = user;
        let token = jwt.sign({id, username, profileImageUrl},
            process.env.SECRET_KEY);
            return res.status(200).json({
                id, username, profileImageUrl, token,
            });
  } catch(err) {
    if (err.code ===11000) {
        err.message = "sorry, that username or email is taken";
    }
    return next ({
        status:400,
        message:err.message,
    });
  }
};
