
const express = require('express');
const router = express.Router();
const {Subscribe , unsubscribe} = require('../controllers/subscriber.controller.js');

router.route('/subscribe').post(Subscribe);
router.route('/unsubscribe').post(unsubscribe);

module.exports = router;