'use strict';

const config = require('../config');

const express = require('express');
const service = express();
const request = require('superagent');
const moment = require('moment');

service.get('/service/:location', (req, res, next) => {
    request.get('https://api.opencagedata.com/geocode/v1/json?q=' + req.params.location + '&key=' + config.opencageApiKey + '&limit=1&pretty=1', (err, response) => {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }

        // Test with moment
        const timeStamp = +moment().format('X');
        const offset = response.body.results[0].annotations.timezone.offset_sec
        const timeString = moment.unix(timeStamp + offset).utc().format('dddd, MMMM Do YYYY, h:mm:ss a');

        res.json({result: timeString})
    })

});

module.exports = service;
