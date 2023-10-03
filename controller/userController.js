const userModels = require('../models/userModels');
const bcrypt = require('bcrypt');


exports.registerController= async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).send({
                success:false,
                massage:"All filed are required",
            })
        }
        const existingUser = await userModels.findOne({email});
        if(existingUser){
            return res.status(401).send({
                success:false,
                massage:"User Already Exist",
            })
        }
        const hashPassword = await bcrypt.hash(password,10);
        const user = new userModels({name,email,password:hashPassword});
        await user.save();
        return res.status(200).send({
            success:true,
            massage:"User Successfuly Registered",
            user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            massage:'Error in registration',
            success:false,
            error
        })
    }

}

exports.loginController= async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(401).send({
                success:flase,
                massage:"All field required"
            });
        }
        const user = await userModels.findOne({email})
        if(!user){
            return res.status(201).send({
                success:false,
                massage:"User is Not valid",
            })

        }
        const isMatched = await bcrypt.compare(password,user.password);
        if(!isMatched){
            return res.status(400).send({
                success:false,
                massage:"User is or passowrd is not currect",
            })
        }
        return res.status(200).send({
            success:true,
            massage:"Login Successfull",
            user

        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            massage:'Error in registration',
            success:false,
            error
        })
    }
    
}
