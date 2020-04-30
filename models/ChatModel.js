const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ChatSchema =  new Schema({
        message: {
            type: String,
            required: true
        },
        sender: {
            type: String,
            required: true
        }
    }, { timestamps: true });


module.exports = mongoose.model("Chats", ChatSchema);

