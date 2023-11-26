const express = require('express');
const helmet = require('helmet')
const { json, urlencoded} = express;

const app = express();

app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));

const PORT = process.env.PORT || 3090;
app.listen(PORT, () => {
    console.log('app listening on port' + PORT);
})