const User = require('../models/user');
/**
 * 
 * @param {*} req 
 * @param {*} res
 * check if email alredy exists
 * password hash
 * email lowercase
 * save 
 */

const register = (req,res)=>{
    const {email, password } = req.body;
    try{
        const alreadyExists = await User.findOne({where: {email}});
        if(alreadyExists){
            res.status(401).send("Email alredy exists");
        }
    } catch (err){
        console.error(err);
    }
}

module.exports = register;