const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan');
const { json, urlencoded} = express;

const app = express();

app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan('combined'));

const PORT = process.env.PORT || 3090;
app.listen(PORT, () => {
    console.log('app listening on port' + PORT);
})