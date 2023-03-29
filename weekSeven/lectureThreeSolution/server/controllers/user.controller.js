const User = require("../models/user.model");
const secret = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");

module.exports = {
    register: async (req, res) => {
    try{
        const potentialUser = await User.findOne({email: req.body.email});
        if(potentialUser){
            res.status(400).json({message: "Email already exists"});
        }else{
            const newUser = await User.create(req.body);

            // Create a token and it takes in three properties
            // 1. payload - what we want to store in the token
            // 2. secret key - used to sign the token
            // 3. options - expiration time
            const userToken = jwt.sign({_id:newUser.id, email: newUser.email}, secret, {expiresIn: "60m"});
            console.log(userToken);
            // set the token in the cookie
            res.cookie("usertoken", userToken, {
                httpOnly: true
            }).json({message: "success", user: newUser});
        }


    }catch(err){
        console.log(err);
        return res.status(400).json(err);

    }
},
    login: async (req, res) => {
        try {
            const user = await User.findOne({email: req.body.email});
            if(user){
                const passwordMatch = await bcrypt.compare(req.body.password, user.password);
                if(passwordMatch){
                    const userToken = jwt.sign({_id:user.id, email: user.email}, secret, {expiresIn: "60m"});
                    res.cookie("usertoken", userToken, {
                        httpOnly: true
                    }).json({message: "success", user: user});
                }else{
                    res.status(400).json({message: "Invalid email or password"});
                }
            }else{
                res.status(400).json({message: "Invalid email or password"});
            }
        }
        catch(err){
            console.log(err);
            return res.status(400).json(err);
        }   
    },
    logout: (req, res) => {
        res.clearCookie("usertoken");
        res.sendStatus(200).json({message: "User is loogged out."});
    }
}