const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const { json, urlencoded } = express;
dotenv.config();

const app = express();


var whitelist = [process.env.STAGE == 'dev' ? 'http://localhost:3000' : process.env.DOMAIN]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
 

app.use(cors(corsOptions));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('combined'));
mongoose.connect(process.env.ME_CONFIG_MONGODB_URL)
  .then(() => console.log('Connected!'));

app.use('/api', require('./controllers/index'));

const PORT = process.env.PORT || 3090;
app.listen(PORT, () => {
  console.log('app listening on port' + PORT);
})