const User = require('../models/user.model');


module.exports = {
    registerUser: async (req, res) => {
        try{
            // check if the email is already in the database
            const potentialUser = await User.findOne({email: req.body.email});
            if(potentialUser){
                return res.status(400).json({message: "Email already exists"});
            }
            else{
                const newUser = await User.create(req.body);

                // return the new user
                res.status(201).json({message: "success", user: newUser})
                // return res.status(200).json({user: newUser});
            }
            // create a new user
            // set up JsonWebToken
            // const userToken = jwt.sign({
            //     id: newUser._id
            // }, process.env.JWT_SECRET);
            // // store token as a cookie
            // res.cookie("usertoken", userToken, secret, {
            //     httpOnly: true
            // }).json({message: "success"});

        } catch(err){
            console.log(err);
            return res.status(400).json(err);
        }
}
}
