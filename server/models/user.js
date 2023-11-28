const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
//Define our model

const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
})

userSchema.pre('save', function(next) {
    // get access to user model
    const user = this;
    console.log({ user })
    // generate a salt then run callback
    bcrypt.genSalt(10, function(err, salt) {
        if(err) { return next(err)}

        //hash (encrypt) our passwprd using the salt
        bcrypt.hash(user.password, salt).then(hash => {
            user.password = hash;
            next();
        }).catch(err => next(err))
    })
})
//Create the model class
const ModelClass = mongoose.model('user', userSchema);

//export the model

module.exports = ModelClass;