'use strict';

const express = require('express');
const service = express();
const request = require('superagent');
const keys = require('../../keys');

service.get('/service/:location', (req, res, next) => {
    request.get('http://api.openweathermap.org/data/2.5/weather?q=' + req.params.location + '&appid=' + keys.openweatherKey + '&units=imperial', (err, response) => {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.json({result: `${response.body.weather[0].description} at ${response.body.main.temp} degrees fahrenheit`})
    })

});

module.exports = service;
