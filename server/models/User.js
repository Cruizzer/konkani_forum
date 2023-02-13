import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    location: {
        type: String,
        default: "Unknown"
    },
    contributions: {
        type: Number,
        default: 0
    },
    activeThreads: {
        type: Array,
        default: []
    }
}, {timestamps: true}
);

const User = mongoose.model("User", UserSchema);

export default User;