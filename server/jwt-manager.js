var jwt = require('jsonwebtoken');
const fs = require('fs');
var privateKey_ = fs.readFileSync('./es512-private.pem');
var publicKey_ = fs.readFileSync('./es512-public.pem')





module.exports = {
    sign: (user)=> {
        const token = jwt.sign({ user }, privateKey_, {
            expiresIn: "1h",
            algorithm: 'ES512'
          });
          return token;
    },
    verify: (token) =>
        jwt.verify(token, publicKey_, { algorithm: 'ES512' }, (err, truth)=> {
            if(err) {
                return null
            } else {
                return truth;
            }
        })
    
}