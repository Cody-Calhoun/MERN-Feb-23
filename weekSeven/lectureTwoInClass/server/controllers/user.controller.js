const User = require("../models/user.model");

module.exports = {
    register: async (req, res) => {
    try{
        const potentialUser = await User.findOne({email: req.body.email});
        if(potentialUser){
            res.status(400).json({message: "Email already exists"});
        }else{
            const newUser = await User.create(req.body);
            res.json({message: "success", user: newUser});
        }


    }catch(err){
        console.log(err);
        return res.status(400).json(err);

    }
}
}