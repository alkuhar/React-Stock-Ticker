var express = require('express');
var path = require('path');
var webpack = require('webpack');
var app = express();
var cors = require('cors');
var gfinance = require('gfinance');

var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'client');

app.use(cors());
app.use(express.static(static_path))
    .get('/', function (req, res) {
        res.sendFile('index.html', {
            root: static_path
        });
    })
    .get('/v1/stocks/:stock_tickers', function (req, res) {
        gfinance.get(req.params.stock_tickers, function (err, apires) {
            res.json({ stocks: apires });
        });
    })
    .listen(process.env.PORT || 8080, function (err) {
        if (err) { console.log(err) };
        console.log('Listening at localhost:8080');
    });
