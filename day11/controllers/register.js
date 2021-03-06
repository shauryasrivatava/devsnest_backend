const User = require('../models/user');
const bcrypt = require('bcrypt');

/**
 * 
 * check if email alredy exists
 * password hash
 * email lowercase
 * save 
 */
const saltRounds = 10;
const register = (req,res)=>{
    const {email, password } = req.body;
    try{
        const alreadyExists = await User.findOne({where: {email}});
        if(alreadyExists){
            res.status(401).send("Email alredy exists");
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        // Store hash in your password DB.

        const newUser = new User({email: email.toLowerCase(), password: hash})
        const savedUser = await newUser.save();
        res.status(201).send("user registered");
    } catch (err){
        console.error(err);
        res.status(500).send("something went wrong")
    }
}

module.exports = register;