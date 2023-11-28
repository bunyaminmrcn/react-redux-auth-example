const User = require('../models/user');
const jwtManager = require('../jwt-manager');


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
            password,
            role: 'user'
        })
        await newRecord.save();

        const token = jwtManager.sign({role: newRecord.role})
        return res.json({ success: true , token })
    }

}