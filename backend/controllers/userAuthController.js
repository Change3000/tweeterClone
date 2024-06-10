const { StatusCodes } = require('http-status-codes');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

const User = require('./../models/user');

dotenv.config();
const secretKey = process.env.SECRET_KEY;

const securePassword = async (password) => {
    try {
        let hashedPass = await bcrypt.hash(password, 10);
        return hashedPass;
    } catch (err) {
        console.log(`Error Hashing password`, err);
        process.exit(1);
    }
}


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const responseObject = {
            isVerified: false,
            msg: 'default-res-obj-msg'
        };

        if (!name || !email || !password) {
            responseObject.msg = `All fields are required`;
            return res.status(StatusCodes.BAD_REQUEST).send(responseObject);
        }

        const oldUser = await User.findOne({ email });

        if (oldUser) {
            responseObject.msg = `User with email ${oldUser.email} already exits.`;
            return res.status(StatusCodes.CONFLICT).send(responseObject);
        }

        const hashedPass = await securePassword(password);

       
        const newData = { name, email, password: hashedPass };
 
        const user = await User.create({ ...newData });

        const accessToken = await user.generateAccessToken(secretKey);

        responseObject.isVerified = true;
        responseObject.accessToken = accessToken;
        responseObject.msg = `Logged in Successfully`;

        return res.status(StatusCodes.OK).send(responseObject);
    } catch (err) {
        console.log("Error registering a new User", err);
        process.exit(1);
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const responseObject = {
            isVerified: false,
            msg: 'default-res-obj-msg'
        };

        if (!email || !password) {
            responseObject.msg = `All fields are required`;
            return res.status(StatusCodes.BAD_REQUEST).send(responseObject);
        }

        const oldUser = await User.findOne({ email });

        if (!oldUser) {
            responseObject.msg = `Email Does not exist`;
            return res.status(StatusCodes.FORBIDDEN).send(responseObject);
        }

        const isPassCorrect = await bcrypt.compare(password, oldUser.password);

        if (isPassCorrect) {

            const accessToken = oldUser.generateAccessToken(secretKey);

            responseObject.isVerified = true;
            responseObject.accessToken = accessToken;
            responseObject.msg = `Logged in Successfully`;
            
            return res.status(StatusCodes.OK).send(responseObject);
        }

        responseObject.msg = `Invalid Credentials`;
        return res.status(StatusCodes.UNAUTHORIZED).send(responseObject);

    } catch (err) {
        console.log(`Error Logging in`, err);
        process.exit(1);
    }
};


module.exports = { registerUser, loginUser };