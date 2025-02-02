import mongoose from "mongoose";



const clientSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    clientRating: {
        type: Number,
        default: 0
    },
    
    profilePicture: {
        type: String,
        default:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
}, { timestamps: true });

const Client = mongoose.model("Client", clientSchema);

export default Client;