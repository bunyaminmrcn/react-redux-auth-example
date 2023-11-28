const User = require('../models/user');


exports.signUp = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(422).json({ success: false, msg: 'Email amd/or required' })
    }
    const record = await User.findOne({ email });
    if (record) {
        return res.json({ success: false, msg: 'Email in use!' })
    } else {

        const newRecord = new User({
            email,
            password
        })
        await newRecord.save();
        return res.json({ success: true })
    }

}