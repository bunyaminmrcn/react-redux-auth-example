const express = require('express');
const router = express.Router();

const auth = require('./auth');
router.post('/auth/signUp', auth.signUp)

module.exports = router;