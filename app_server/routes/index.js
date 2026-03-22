var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const roomsController = require('../controllers/rooms');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/rooms', roomsController.roomsPage);
module.exports = router;
