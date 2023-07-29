const express = require('express');
const router = express.Router();
const roomController = require('./controllers/roomController');

router.get('/room/:roomId', roomController.getRoom);

module.exports = router;