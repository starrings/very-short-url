const express = require('express');

const app = express();
const port = process.env.PORT || 8282;

const urlRouter = require('./routes/url.js');
app.use(urlRouter);   

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});