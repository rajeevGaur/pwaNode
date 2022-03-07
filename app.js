
const bodyParser = require('body-parser');
const product = require('./api/product');
const express = require('express')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.all("/*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});
app.use('/ping', product)


module.exports = app;
// app.listen(5050, function () {
//     console.log('Example app listening on port 5050!')
// })