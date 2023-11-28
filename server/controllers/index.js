const express = require('express');
const router = express.Router();
const jwtManager = require('../jwt-manager');

const passport = require('passport')
const passportService = require('../services/passport');
const requireAuth = passportService.authenticate('jwt', {
    session: false
})

const auth = require('./auth');
router.post('/auth/signUp', auth.signUp)


router.get('/auth/protected', requireAuth, (req, res) => {
    return res.json({msg: 'hi there'})
})

router.post('/auth/protected',
    (req, res, next) => {
        console.log(req.headers)
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        
        if (token == null) return res.sendStatus(401)
        const verified = jwtManager.verify(token);
        if(verified) {
            next();
        } else {
            return res.sendStatus(403)
        }
    },
    (req, res, next) => {
        return res.json({user: 'verified'})
    })


module.exports = router;