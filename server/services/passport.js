const passport = require('passport');
const User = require('../models/user');
const jwtManager = require('../jwt-manager');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');


//create local strategy
const localOptions = { usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions, async function(email, password, done) {
    // Verify this email and password, call done with the user
    // if it is the correct email and password
    // otherwise, call done with false

    const user = await User.findOne({ email })
    if(!user) { return done(null, false)}

    //compare passwords 
    user.comparePassword(password, function(err, isMatch) {
        if(err) {
            return done(err);
        }
        if(!isMatch) {
            return done(null, false);
        }
        return done(null, user);
    })
})

//setup options for JWT strategy
const jwtOptions = { 
    algorithms: ['ES512'],
    jwtFromRequest: ExtractJWt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtManager.public()
};


const jwtLogin = new JwtStrategy(jwtOptions, async function (payload, done) {

    //console.log(payload)
    let userExists = await User.findById(payload.id);
    if(!userExists) return done(new Error('User not exist'), false)
    done(null, userExists)
})


//tell to passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);

module.exports = passport;