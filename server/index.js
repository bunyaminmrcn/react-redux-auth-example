const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const { json, urlencoded } = express;
dotenv.config();

const app = express();

app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('combined'));
mongoose.connect(process.env.ME_CONFIG_MONGODB_URL)
  .then(() => console.log('Connected!'));


const PORT = process.env.PORT || 3090;
app.listen(PORT, () => {
  console.log('app listening on port' + PORT);
})