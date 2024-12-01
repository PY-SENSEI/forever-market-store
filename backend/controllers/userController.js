import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Route for login User
import userModel from "../models/user.model.js";

const createToken = (id) => {
    return jwt.sign({id},
        process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await userModel.findOne({email});

        if (!user) {
           return res.json({success: false, message: "User not found"})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id);
            res.json({success: true, token})
        }
        else {
            res.json({success: false, message: "Invalid credentials"})
        }
    } catch (error) {
        console.log(error, "Error in login controller");
        res.json({success: false, message: error.message})
    }
}

//Roue for register/signup user

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        //checking user already exist
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success: false, message: "User already exists"})
        }
        //valdating email format and strong password
        if (!validator.isEmail(email)) {
             return res.json({success: false, message: 'Please enter a valid email address'})
        }

        if(password.length < 6) {
            return res.status({success: false, message: 'Password must be atleast 6 character'})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //creating user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save();

        const token = createToken(user._id)

        res.json({
            success: true,
            token
        })

    } catch (error) {
        console.log(error, "Error in signup controller")
        res.json({success: false, message: error.message})
    }
}

//Route for admin login
const adminLogin = async (req, res) => {
    try{
        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD ) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({
                success: true,
                token
            })
        } else {
            res.json({
                success: false,
                message: "Invalid credentials"
            })
        }
    } catch (error) {
        console.log(error, "Error in admin login controller");
        res.json({success: false, message: error.message})
    }
}


export { loginUser, registerUser, adminLogin }