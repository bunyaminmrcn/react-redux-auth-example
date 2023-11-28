const passport = require('passport');
const User = require('../models/user');
const jwtManager = require('../jwt-manager');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWt = require('passport-jwt').ExtractJwt;

const jwtOptions = { 
    algorithms: ['ES512'],
    jwtFromRequest: ExtractJWt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtManager.public()
};


const jwtLogin = new JwtStrategy(jwtOptions, async function (payload, done) {

    //console.log(payload)
    let userExists = await User.findById(payload.user.id);
    if(!userExists) return done(new Error('User not exist'), false)
    done(null, userExists)
})


//tell to passport to use this strategy
passport.use(jwtLogin);

module.exports = passport;