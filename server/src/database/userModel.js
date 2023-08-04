const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uuid: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userAgent: String,
    logins: [{
        ip: String,
        date: {
            type: Date,
            default: Date.now()
        }
    }],
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    },
    byPassVal: {
        type: Number,
        default: 1
    }
}, { versionKey: false});



module.exports = mongoose.model('user', userSchema);