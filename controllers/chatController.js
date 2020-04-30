var Chat = require('../models/ChatModel');

// GET ALL CHATS
exports.get_all_chats = async (req, res) => {

    try{
        const chats = await Chat.find();
        res.status(200).json(chats);
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
};

// GET CHATS BY :ID
exports.get_chats_by_id = async (req, res) => {
    console.log("in chats_by_id")
    try{
        const chat = await Chat.find({
            _id: req.params.chatId
        })
        res.status(200).json(chat)
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
}

// GET CHATS BY :SENDER
exports.get_chats_by_sender = async (req, res) => {
    console.log("in chats_by_sender")
    try{
        const chats = await Chat.find({
            sender: req.params.senderId
        })
        res.status(200).json(chats)
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
}


// CREATE CHAT
exports.create_chat = async (req, res) => {
    const new_chat = new Chat({
        message: req.body.message,
        sender: req.body.sender
    });
    try{
        const data = await new_chat.save();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
}

// REMOVE CHAT BY :ID
exports.remove_chat_by_id = async (req, res) => {
    try{
        const removedPost = await Chat.remove({
            _id: req.params.chatId
        });
        res.json(removedPost);
    } catch (err){
        res.status(400).json({
            message: err
        });
    }
}

// UPDATE CHAT BY :ID
exports.update_chat_by_id = async (req, res) => {
    try{
        const updatedPost = Chat.updateOne(
            {
            _id: req.params.postId
            },
            {
                $set: {message: req.body.message}
            }
            );
        res.json(updatedPost)
    } catch (err){
        res.status(400).json({
            message: err
        });
    }
}



