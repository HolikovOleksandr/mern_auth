import exp from 'constants';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        uniqe: true,
    },
    passwordHash: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

export default mongoose.modelodel('User', UserSchema)