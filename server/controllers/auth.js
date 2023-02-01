import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/User.js";

/* Register User */
export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            location,
            contributions,
            activeThreads,
        } = req.body;

        // Hash the password

        const salt = await bcrypt.genSalt();
        const passwordHashed = await bcrypt.hash(password, salt);

        const newUser = new User ({
            firstName,
            lastName,
            email,
            password: passwordHashed,
            location,
            contributions,
            activeThreads,
        })

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);


    } catch (err) {
        res.status(500).json({error: err.message})
    }
};