var express = require('express');
let router = express.Router();

var chat_controller = require('../controllers/chatController')



router.get('/', chat_controller.get_all_chats);

router.get('/sender/:senderId', chat_controller.get_chats_by_sender);

router.get('/:chatId', chat_controller.get_chats_by_id);



router.post('/', chat_controller.create_chat)

router.delete('/:chatId', chat_controller.remove_chat_by_id)

router.patch('/:chatId', chat_controller.update_chat_by_id)


module.exports = router;
